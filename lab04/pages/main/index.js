import { ProductCardComponent } from "../../components/product-card/index.js";
import { ProductPage } from "../product/index.js";
import { ajax } from "../../modules/ajax.js";
import { urls } from "../../modules/urls.js";
import { groupId } from "../../modules/consts.js"
import { selectFilterComponent } from "../../components/selectFilter/index.js";

export class MainPage {

    constructor(parent) {
        this.parent = parent;
    }

    get pageRoot() {
        return document.getElementById('main-page')
    }

    getHTML() {
        return (
            `
            <div id="main-page" class="d-flex flex-column flex-wrap"><div/>
            `
        )
    }

    getData(filter) {
        ajax.post(urls.getGroupConversations(groupId, filter), (data) => {
            this.renderData(data.response.items)
        })
    }

    clickCard(e) {
        const cardId = e.target.dataset.id

        const productPage = new ProductPage(this.parent, cardId)
        productPage.render()
    }

    changeFilter(e) {
        console.log("CURRENT FILTER VALUE: ", e.target.value)
        // location.reload()
        this.reloadData(e.target.value)

    }

    reloadData(filter) {
        this.getData(filter)
    }

    renderData(items) {
        items.forEach((item) => {
            const productCard = new ProductCardComponent(this.pageRoot)
            productCard.render(item, this.clickCard.bind(this))
        })
    }

    render() {
        this.parent.innerHTML = ''
        const html = this.getHTML()
        this.parent.insertAdjacentHTML('beforeend', html)

        const filter = new selectFilterComponent(this.pageRoot)
        filter.render(this.changeFilter.bind(this))
        console.log("FILTER VALUE(RENDER):", filter.getFilterText())

        this.getData(filter.getFilterText())
    }
}

///////////////////////////////TODO///////////////////////////////
// Добавить обработчик собыия изменения фильтра.
// Добавить информацию о чате на вторую страницу 
// (кол-во пользователей, текст закрепленного сообщения и др.)
// Попробовать сделать главную страницу более красивой. 