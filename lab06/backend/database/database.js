const { postgresConfig } = require('../config')

const Sequilize = require('sequelize')

module.exports = new Sequilize(postgresConfig.db, postgresConfig.user, postgresConfig.password, {
    host: postgresConfig.host,
    dialect: 'postgres',
    operatorsAliases: 0,
    pool: {
        max: 5,
        min: 0,
        acquire: 3000,
        idle: 10000
    }
})