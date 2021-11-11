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
    password: {
        type: Sequelize.STRING,
        allowNull: false
    },
    user_role_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {    
          model: 'userRoles',
          key: 'id'
        }
    },
    document_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: {    
          model: 'documents',
          key: 'id'
        }
    }
})

module.exports = User;