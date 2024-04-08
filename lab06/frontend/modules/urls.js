class Urls {
  constructor() {
    this.url = 'http://localhost:8010/animals'
  }

  animals() {
    return this.url
  }

  animalById(id) {
    return `${this.url}/${id}`
  }
}

export const urls = new Urls()