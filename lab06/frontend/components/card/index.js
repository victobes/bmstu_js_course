export class CardComponent {
  constructor(parent) {
    this.parent = parent;
  }
  getHTML(data) {
    return (
      `
              <div class="card" style="width: 220px; margin: 10px">
                  <img class="card-img-top" src="${data.photo}" alt="картинка">
                  <div class="card-body">
                      <h5 class="card-title">${data.title}</h5>
                      <button class="btn btn-primary" id="click-card-${data.animal_id}" data-id="${data.animal_id}">Подробнее</button>
                  </div>
              </div>
          `
    )
  }

  addListeners(data, listener) {
    document
      .getElementById(`click-card-${data.animal_id}`)
      .addEventListener("click", listener)
  }

  render(data, listener) {
    const html = this.getHTML(data)
    this.parent.insertAdjacentHTML('beforeend', html)
    this.addListeners(data, listener)
  }
}