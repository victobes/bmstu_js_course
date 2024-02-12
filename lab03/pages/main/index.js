import { CarouselComponent } from "../../components/carousel/index.js";
import { InfoButtonComponent } from "../../components/info-button/index.js";
import { SubjectPage } from "../subject/index.js";

export class MainPage {

    constructor(parent) {
        this.parent = parent;
        this.currentSlide;
    }
    
    get pageRoot() {
        return document.getElementById('main-page')
    }
        
    getHTML() {
        return (
            `
                <div id="main-page" class="d-flex flex-wrap" style="width:900px; height:700px"></div>
            `
        )
    }

    clickInfo() {

        const subjectPage = new SubjectPage(this.parent, this.currentSlide)
        subjectPage.render()
    }

    InfoAboutCurrentSlide(e){
        // this.currentSlide = e.relatedTarget.id
        this.currentSlide = e.relatedTarget
        console.log(this.currentSlide)
    }

    render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)

        const carousel = new CarouselComponent(this.pageRoot)
        carousel.render(this.InfoAboutCurrentSlide.bind(this))

        const infoButton = new InfoButtonComponent(this.pageRoot)
        infoButton.render(this.clickInfo.bind(this))
    }
}


////////////////////// РЕФЕРЕНСЫ ////////////////
    // getData() {
    //     return [
    //         {
    //             id: 1,
    //             src: "https://i.pinimg.com/originals/c9/ea/65/c9ea654eb3a7398b1f702c758c1c4206.jpg",
    //             title: "Акция",
    //             text: "Такой акции вы еще не видели 1"
    //         },
    //         {
    //             id: 2,
    //             src: "https://i.pinimg.com/originals/c9/ea/65/c9ea654eb3a7398b1f702c758c1c4206.jpg",
    //             title: "Акция",
    //             text: "Такой акции вы еще не видели 2"
    //         },
    //         {
    //             id: 3,
    //             src: "https://i.pinimg.com/originals/c9/ea/65/c9ea654eb3a7398b1f702c758c1c4206.jpg",
    //             title: "Акция",
    //             text: "Такой акции вы еще не видели 3"
    //         },
    //     ]
    // }

    // clickCard(e) {
    //     const cardId = e.target.dataset.id
    
    //     const productPage = new ProductPage(this.parent, cardId)
    //     productPage.render()
    // }

    // getData() {
    //     return {
    //         id1: 1,
    //         src1: "https://source.unsplash.com/fk4tiMlDFF0/900x600/",
    //         alt1: "Тест1",
    //         id2: 2,
    //         src2: "https://source.unsplash.com/TzjMd7i5WQI/900x600/",
    //         alt2: "Тест2",
    //         id3: 3,
    //         src3: "https://source.unsplash.com/-Go4DH2pZbc/900x600/",
    //         alt3: "Тест3"
    //     }
    // }