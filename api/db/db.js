const Sequelize = require('sequelize');
const sequelize = new Sequelize('postgres://mxgryioc:epRuzKIlO8YedZlD9v_H55pSMl_oZ8uS@kesavan.db.elephantsql.com:5432/mxgryioc', {dialect: 'postgres'});

module.exports = sequelize;