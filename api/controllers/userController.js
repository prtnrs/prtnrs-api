module.exports = () => {

  const controller = {};

  const service = require('../services/userService');

  controller.findAll = (req, res) => {
    service.findAll().then(r => {
      res.status(200).json(r);
    })
  }

  controller.findById = (req, res) => {
    service.findById(req.params.id).then(r => {
      res.status(200).json(r);
    })
  }

  return controller;

}