const Sequelize = require('sequelize');
const database = require('../db/db');

const UserRolePermission = database.define('userRolePermissions', {
    id: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.INTEGER,
        primaryKey: true
    },
    role_id: {
        type: Sequelize.INTEGER,
        primaryKey: false,
        references: {
            model: 'userRoles',
            key: 'id'
        }
    },
    permission_id: {
        type: Sequelize.INTEGER,
        primaryKey: false,
        references: {
            model: 'permissions',
            key: 'id'
        }
    }
})

module.exports = UserRolePermission;