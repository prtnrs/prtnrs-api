const Sequelize = require('sequelize');
const database = require('../db/db');

const Permission = database.define('permissions', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    }
})

module.exports = Permission;