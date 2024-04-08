export class AddAnimalCardComponent {
  constructor(parent) {
    this.parent = parent;
  }
  getHTML() {
    return (
      `
      <div class="card border-dark mb-3" style="margin: 10px">
        <div class="card-body">
            <h2 class="card-title">Создание новой записи</h2>
          
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroup-sizing-default">Название</span>
            </div>
            <input id="new-title" type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
          </div>
  
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroup-sizing-default">Ссылка на фото</span>
            </div>
            <input id="new-photo" type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
          </div>
  
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="inputGroup-sizing-default">Описание</span>
            </div>
            <input id="new-description" type="text" class="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default">
          </div>
          
          <button id="save" class="btn btn-primary" type="button" style="position:absolute;">Сохранить</button>
        </div>
      </div>
          `
    )
  }

  addListeners(listener) {
    document
      .getElementById(`save`)
      .addEventListener("click", listener)
  }

  render(listener) {
    const html = this.getHTML()
    this.parent.insertAdjacentHTML('beforeend', html)
    this.addListeners(listener)
  }
}