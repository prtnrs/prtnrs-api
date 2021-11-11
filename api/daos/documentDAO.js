const Document = require('../models/document');
const { QueryTypes } = require('sequelize');
const sequelize = require('../db/db');

const documentDAO = {
    create: (document) => {
        return Document.create(document);
    },
}

module.exports = documentDAO;
