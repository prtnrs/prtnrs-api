require("dotenv-safe").config();
const jwt = require('jsonwebtoken');

const userService = require('../services/userService');

const authService = {
    generateToken: async (userDTO) => {
        let userDTORes = await userService.findByDocumentAndPass(userDTO);
        if (userDTORes.length < 1) {
            return err = {
                message: "No one user with this document and pass",
                status: false
            };
        }
        const token = jwt.sign({ userDTORes }, process.env.SECRET, {
            expiresIn: 86400 // expires in 5min
        });
        return success = { token: token, status: true };
    },

    verifyJWT: (token, req, next) => {
        return jwt.verify(token, process.env.SECRET, function (err, decoded) {
            if (err) {
                return err.message;
            }
        });
    }
}

module.exports = authService;