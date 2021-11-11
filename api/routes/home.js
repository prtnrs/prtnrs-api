module.exports = app => {
    const controller = app.controllers.homeController;
  
    app.route('/api/v1/')
      .get(controller.home);
  }