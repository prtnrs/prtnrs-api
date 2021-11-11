module.exports = () => {

  const controller = {};

  const service = require('../services/authService');

  controller.login = (req, res) => {
    service.generateToken(req.body).then(r => {
      const response = r;
      if (!response.status) {
        res.status(400).json({ auth: false, message: `Error, ${response.message}` });
      }
      return res.json({ auth: true, token: response.token });
    })
  }

  return controller;

}