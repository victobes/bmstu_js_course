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
          <div id="slide_1" class="carousel-item active">
            <img src="https://source.unsplash.com/fk4tiMlDFF0/900x600/" class="d-block w-100" style="height: 600px; width: 900px" alt="test1">
          </div>
          <div id="slide_2" class="carousel-item">
            <img src="https://source.unsplash.com/TzjMd7i5WQI/900x600/" class="d-block w-100" style="height: 600px; width: 900px" alt="test2">
          </div>
          <div id="slide_3" class="carousel-item">
            <img src="https://source.unsplash.com/-Go4DH2pZbc/900x600/" class="d-block w-100" style="height: 600px; width: 900px" alt="test3">
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

      carousel.addEventListener("slid.bs.carousel", listener);
    });
  }

  render(listener) {
    const html = this.getHTML()
    this.parent.insertAdjacentHTML('beforeend', html)
    // this.addListeners()
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