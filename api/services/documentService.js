const DocumentDAO = require('../daos/documentDAO');
const documentUtils = require('../utils/documentUtils');

const documentService = {
    create: (document) => {
        let isValid = documentUtils.determineDocumentTypeValidation(document);
        if (!isValid) {
            return err = {
                message: "invalid document!"
            }
        }
        return DocumentDAO.create(document);
    }
}

module.exports = documentService;