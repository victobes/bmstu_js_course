export class AnimalComponent {
  constructor(parent) {
    this.parent = parent;
  }
  getHTML(data) {
    console.log("DATA", data)
    return (
      `
             <div class="card mb-3" style="width: 540px; margin: 10px">
                  <div class="row g-0">
                      <div class="col-md-4">
                          <img src="${data[0].photo}" class="img-fluid" alt="картинка">
                      </div>
                      <div class="col-md-8">
                          <div class="card-body">
                              <h5 class="card-title">${data[0].title}</h5>
                              <p><strong>Описание</strong>: ${data[0].description}</p>
                          </div>
                      </div>
                  </div>
              </div>
          `
    )
  }

  render(data) {
    const html = this.getHTML(data)
    this.parent.insertAdjacentHTML('beforeend', html)
  }
}