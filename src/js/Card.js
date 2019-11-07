export default class Card {
  constructor(card) {
    this.createCardElement(card)
  }
  createCardElement(card) {
    const el = document.createElement('section')
    el.className = 'card'
    this.createCardHTML(el, card)
    this.addToggleLogic(el)
    document.body.appendChild(el)
  }

  createCardHTML(el, card) {
    el.innerHTML = `
      <h2 class ="card__title">${card.title}</h2>
      <div class="card__content" data-js="card-content" hidden>
      <p>${card.question}</p>
      <p class="card__answer">${card.answer}</p>
      </div>
      <button class="card__button" data-js="card-button">Show</button>
      `
  }

  addToggleLogic(el) {
    const toggleClass = el.querySelector('[data-js=card-content]')
    const toggleButton = el.querySelector('[data-js=card-button]')

    toggleButton.addEventListener('click', () => {
      toggleClass.toggleAttribute('hidden')
      const buttonText = toggleButton.textContent
      toggleButton.textContent = buttonText === 'Show' ? 'Hide' : 'Show'
    })
  }
}
