const Sequelize = require('sequelize');
const database = require('../db/db');

const User = database.define('users', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    userRoleId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {    
          model: 'userRoles',
          key: 'id'
        }
    },
    documentId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {    
          model: 'documents',
          key: 'id'
        }
    }
})

module.exports = User;