import { AnimalComponent } from "../../components/animal/index.js";
import { ButtonComponent } from "../../components/button/index.js";
import { MainPage } from "../main/index.js";
import { ajax } from "../../modules/ajax.js";
import { urls } from "../../modules/urls.js";

export class AnimalPage {
  constructor(parent, id) {
    this.parent = parent
    this.id = id
  }

  renderCard() {
    ajax.post(urls.animalById(this.id))
      .then(response => response.json())
      .then(data => {
        this.renderData(data)
      })
  }

  get pageRoot() {
    return document.getElementById('product-page')
  }

  getHTML() {
    return (
      `<div id="product-page"></div>`
    )
  }

  clickBack() {
    const mainPage = new MainPage(this.parent)
    mainPage.render()
  }

  deleteCard() {
    fetch(urls.animalById(this.id), {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ id: `${this.id}` })
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        this.clickBack()
      })
      .catch(error => {
        console.error('Error:', error);
      });
  }

  renderData(item) {
    const product = new AnimalComponent(this.pageRoot)
    console.log(item)
    product.render(item)
  }

  render() {
    this.parent.innerHTML = ''
    const html = this.getHTML()
    this.parent.insertAdjacentHTML('beforeend', html)

    const backButton = new ButtonComponent(this.pageRoot, 'back', 'Назад', 'primary')
    console.log(this.clickBack.bind(this))
    backButton.render(this.clickBack.bind(this))

    const deleteButton = new ButtonComponent(this.pageRoot, 'delete', 'Удалить', 'danger')
    console.log(this.deleteCard.bind(this))

    deleteButton.render(this.deleteCard.bind(this))

    this.renderCard()
  }
}