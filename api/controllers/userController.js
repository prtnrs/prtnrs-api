module.exports = () => {

  const controller = {};

  const service = require('../services/userService');

  const authService = require('../services/authService');

  controller.findAll = (req, res) => {
    const token = req.headers.authorization;

    if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });

    let isNotValid = authService.verifyJWT(token, req);

    if (isNotValid) {
      return res.status(400).json({ auth: false, message: `Error, ${isNotValid}` });
    }

    service.findAll().then(r => {
      res.status(200).json(r);
    }).catch(e => {
      console.log(e)
    })
  }

  controller.findById = (req, res) => {
    const token = req.headers.authorization;

    if (!token) return res.status(401).json({ auth: false, message: 'No token provided.' });

    let isNotValid = authService.verifyJWT(token, req);

    if (isNotValid) {
      return res.status(400).json({ auth: false, message: `Error, ${isNotValid}` });
    }
    
    service.findById(req.params.id).then(r => {
      res.status(200).json(r);
    }).catch(e => {
      console.log(e)
    })
  }

  return controller;

}