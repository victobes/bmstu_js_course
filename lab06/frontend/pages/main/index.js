import { CardComponent } from "../../components/card/index.js";
import { AnimalPage } from "../../pages/animal/index.js";
import { ajax } from "../../modules/ajax.js";
import { urls } from "../../modules/urls.js";
import { AddAnimalCardComponent } from "../../components/add-animal-card/index.js";

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
      <div id="main-page" class="d-flex flex-wrap"><div/>
      `
    )
  }

  renderCards() {
    ajax.post(urls.animals())
      .then(response => response.json())
      .then(data => {
        this.renderData(data)
      })
  }

  renderData(items) {
    const addCard = new AddAnimalCardComponent(this.pageRoot)
    addCard.render(this.addAnimal.bind(this))

    console.log(items)
    items.forEach((item) => {
      const card = new CardComponent(this.pageRoot)
      card.render(item, this.clickCard.bind(this))
    })
  }

  clickCard(e) {
    const cardId = e.target.dataset.id
    const userPage = new AnimalPage(this.parent, cardId)
    userPage.render()
  }

  addAnimal() {
    const input_title = document.getElementById('new-title')
    const title_photo = document.getElementById('new-photo')
    const title_description = document.getElementById('new-description')

    if (input_title.value === "" || title_photo.value === "") {
      alert("Заполните название и ссылку на фото!")
      return
    }

    fetch(urls.animals(), {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        title: `${input_title.value}`,
        photo: `${title_photo.value}`,
        description: `${title_description.value}`
      })
    })
      .then(response => response.json())
      .then(() => {
        const mainPage = new MainPage(this.parent)
        mainPage.render()
      })
      .catch(error => console.error(error));

  }


  render() {
    this.parent.innerHTML = ''
    const html = this.getHTML()
    this.parent.insertAdjacentHTML('beforeend', html)

    this.renderCards()
  }
}