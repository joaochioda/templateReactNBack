const User = require('../models/User')

module.exports = {
  async store(req, res) {
    try {
      const { name } = req.body;
      const user = await User.create({ name });
      return res.status(200).json(user);
    } catch (ex) {
      return res.status(500).json("Failed to create user");
    }
  },
  async index(req, res) {
    try {
      const users = await User.findAll();
      return res.status(200).json(users);
    } catch (ex) {
      return res.status(500);
    }
  },
};