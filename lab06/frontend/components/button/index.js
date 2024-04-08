export class ButtonComponent {
  constructor(parent, type, text, style) {
    this.parent = parent;
    this.type = type;
    this.text = text;
    this.style = style
  }

  addListeners(listener) {
    document
      .getElementById(`${this.type}-button`)
      .addEventListener("click", listener)
  }

  getHTML() {
    return (
      `<button id="${this.type}-button" class="btn btn-${this.style}" type="button">${this.text}</button>`
    )
  }

  render(listener) {
    const html = this.getHTML()
    this.parent.insertAdjacentHTML('beforeend', html)
    this.addListeners(listener)
  }
}