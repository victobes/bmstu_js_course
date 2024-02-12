import { BackButtonComponent } from "../../components/back-button/index.js";
import { SubjectComponent } from "../../components/subject/index.js";
import { MainPage } from "../main/index.js";

export class SubjectPage {
    constructor(parent, info) {
        this.parent = parent
        this.info = info
    }

    getData(){
        return this.info;
    }

    get pageRoot() {
        return document.getElementById("subject-page")
    }

    getHTML() {
        return (
            `
            <div id="subject-page"></div>
            `
        )
    }

    clickBack() {
        const mainPage = new MainPage(this.parent)
        mainPage.render()
    }

    render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)

        const backButton = new BackButtonComponent(this.pageRoot)
        backButton.render(this.clickBack.bind(this))

        const data = this.getData()
        const subjectItem = new SubjectComponent(this.pageRoot)
        subjectItem.render(data)
    }
}

/////////////////////// РЕФЕРЕНСЫ /////////////////////

  // getData() {
    //     return {
    //         id: 1,
    //         src: "https://i.pinimg.com/originals/c9/ea/65/c9ea654eb3a7398b1f702c758c1c4206.jpg",
    //         title: `Акция ${this.id}`,
    //         text: "Такой акции вы еще не видели"
    //     }
    // }