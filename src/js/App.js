import Card from './Card'
import Form from './Form'
import { postCard, getCards } from './services'

export default class App {
  constructor() {
    getCards()
      .then(cards => {
        this.cards = cards
        this.renderCards(cards)
      })
      .catch(err => console.log('-->', err))
    fetch('http://localhost:3333/cards')
      .then(res => res.json())
      .then(cards => cards.forEach(card => new Card(card)))
      .catch(err => console.log('--->', err))

    new Form(postCard)
  }
}
