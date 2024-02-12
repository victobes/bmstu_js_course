export class CarouselComponent {
    constructor(parent) {
        this.parent = parent
    }

    getHTML() {
        return (
            `<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img src="https://source.unsplash.com/fk4tiMlDFF0/900x600/" class="d-block w-100" alt="test1">
          </div>
          <div class="carousel-item">
            <img src="https://source.unsplash.com/TzjMd7i5WQI/900x600/" class="d-block w-100" alt="test2">
          </div>
          <div class="carousel-item">
            <img src="https://source.unsplash.com/-Go4DH2pZbc/900x600/" class="d-block w-100" alt="test3">
          </div>
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Предыдущий</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Следующий</span>
        </button>
      </div>
      `
        )
    }

    render() {
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)
    }
}