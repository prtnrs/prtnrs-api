module.exports = app => {
  const controller = app.controllers.userController;

  app.route('/api/v1/users')
    .get(controller.findAll);

  app.route('/api/v1/users/:id')
    .get(controller.findById);

  app.route('/api/v1/users')
    .post(controller.create);
}