import { BackButtonComponent } from "../../components/back-button/index.js";
import { SubjectComponent } from "../../components/subject/index.js";
import { MainPage } from "../main/index.js";
import { mocks } from "../../mocks/mocks.js";

export class SubjectPage {
    constructor(parent, slideId) {
        this.parent = parent
        this.slideId = slideId
    }

    getData(){
        let slideInfo = mocks.find(x => x.id == this.slideId)
        return slideInfo;
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
