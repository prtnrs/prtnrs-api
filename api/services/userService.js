const UserDAO = require('../daos/userDAO');

const userService = {
    findAll: () => {
        return UserDAO.findAll();
    },

    findById: (id) => {
        return UserDAO.findById(id);
    },

    findByDocumentAndPass: (userDTO) => {
        return UserDAO.findByDocumentAndPass(userDTO);
    }
}

module.exports = userService;