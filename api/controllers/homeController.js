module.exports = () => {

  const controller = {};

  controller.home = (req, res) => {
    res.status(200).json("I'm running!");
  }

  return controller;

}