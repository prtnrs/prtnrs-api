const User = require('../models/user');
const { QueryTypes } = require('sequelize');
const sequelize = require('../db/db');

const userDAO = {
    findAll: () => {
        return User.findAll();
    },

    findById: (id) => {
        return User.findByPk(id);
    },

    findByDocumentAndPass: (userDTO) => {
        return sequelize.query("SELECT u.name, u.user_role_id as role, u.document_id as document, d.type FROM users u INNER JOIN documents d ON d.value = :value and u.document_id = d.id and u.password = :password limit 1;", { replacements: { value: userDTO.document,  password: userDTO.password}, type: QueryTypes.SELECT });
    }
}

module.exports = userDAO;