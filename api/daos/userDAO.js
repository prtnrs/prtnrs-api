const User = require('../models/user');

const userDAO = {
    findAll: () => {
        return User.findAll();
    },

    findById: (id) => {
        return User.findByPk(id);
    }
}

module.exports = userDAO;