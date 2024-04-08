const Animals = require('../models/animals.js')


class AnimalsStorage {
    async createAnimal(req, res) {
        const { title, photo, description } = req.body
        const newAnimal =
            await Animals.create({
                title: title,
                photo: photo,
                description: description
            })
        res.json(newAnimal)
    }

    async getAllAnimals(req, res) {
        console.log(req)
        const allAnimals = await Animals.findAll({ raw: true })
        res.json(allAnimals)
    }

    async getAnimalById(req, res) {
        const id = req.params.id
        const Animal = await Animals.findAll({
            where: {
                animal_id: id
            },
            raw: true
        })
        res.json(Animal)
    }

    async deleteAnimal(req, res) {
        const id = req.params.id
        const deletedAnimal = await Animals.destroy({
            where: {
                animal_id: id
            },
            raw: true
        })
        res.json(deletedAnimal)
    }
}

module.exports = new AnimalsStorage()
