const UserDAO = require('../daos/userDAO');

const userService = {
    create: (user) => {
        if (!user) {
            return err = {
                message: "user is empty",
                status: false
            }
        }
        return UserDAO.create(user);
    },

    findAll: () => {
        return UserDAO.findAll();
    },

    findById: (id) => {
        return UserDAO.findById(id);
    },

    findByDocumentAndPass: (userDTO) => {
        return UserDAO.findByDocumentAndPass(userDTO);
    },

    find
}

module.exports = userService;