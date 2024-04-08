const { DataTypes } = require('sequelize')
const db = require('../database/database')

const Animals = db.define('animals',
    {
        animal_id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false
        },
        title: {
            type: DataTypes.STRING,
            allowNull: true
        },
        photo: {
            type: DataTypes.STRING,
            allowNull: true
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: true
        }
    },
    {
        timestamps: false
    }
)

module.exports = Animals