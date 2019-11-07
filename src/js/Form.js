export default class Form {
  constructor(onSubmit) {
    const templateEl = document.querySelector('#form-template')
    const template = templateEl.innerHTML
    document.body.insertAdjacentHTML('beforeend', template)
    this.el = document.querySelector('[data-js=form]')
    this.onSubmit = onSubmit
    this.submit()
  }

  submit() {
    this.el.addEventListener('submit', () => {
      event.preventDefault()
      const el = this.el
      const cardObject = {
        title: el.title.value,
        question: el.question.value,
        answer: el.answer.value,
      }
      this.onSubmit(cardObject)
    })
  }
}
