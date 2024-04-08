const Router = require('express').Router
const router = Router()
const animalsStorage = require('../storage/animals.storage')

router.get('/', animalsStorage.getAllAnimals)
router.get('/:id', animalsStorage.getAnimalById)
router.post('/', animalsStorage.createAnimal)
router.delete('/:id', animalsStorage.deleteAnimal)

module.exports = router