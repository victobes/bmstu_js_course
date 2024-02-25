export class CarouselComponent {
  constructor(parent) {
    this.parent = parent
  }

  getHTML(data) {
    return (
      `<div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="true">
        <div class="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div class="carousel-inner">
          <div id="${data[0].id}" class="carousel-item active">
            <img src=${data[0].src} class="d-block w-100" style="height: 600px; width: 900px" alt="test1">
            <div class="carousel-caption d-none d-md-block">
              <h2>${data[0].title}</h2>
              <p>${data[0].description}</p>
            </div>
          </div>
          <div id="${data[1].id}" class="carousel-item">
            <img src=${data[1].src} class="d-block w-100" style="height: 600px; width: 900px" alt="test2">
            <div class="carousel-caption d-none d-md-block">
              <h2>${data[1].title}</h2>
              <p>${data[1].description}</p>
            </div>
          </div>
          <div id="${data[2].id}" class="carousel-item">
            <img src=${data[2].src} class="d-block w-100" style="height: 600px; width: 900px" alt="test3">
            <div class="carousel-caption d-none d-md-block">
              <h2>${data[2].title}</h2>
              <p>${data[2].description}</p>
            </div>
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

  addListeners(listener){
    document.addEventListener("DOMContentLoaded", function(){

      var carousel = document.getElementById("carouselExampleIndicators");

      carousel.addEventListener("slide.bs.carousel", listener);
    });
  }

  render(data, listener) {
    const html = this.getHTML(data)
    this.parent.insertAdjacentHTML('beforeend', html)
    this.addListeners(listener)
  }
}

///////////////// РЕФЕРЕНСЫ ///////////////////

  // addListeners(){
  //   document.addEventListener("DOMContentLoaded", function(){

  //     var carousel = document.getElementById("carouselExampleIndicators");

  //     carousel.addEventListener("slid.bs.carousel", function(e){
  //       // alert("The sliding transition of previous carousel item has been fully completed.");
  //       console.log(e.relatedTarget.id)
  //     });
  //   });
  // }