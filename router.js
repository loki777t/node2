const express = require('express');
const router = express.Router();
const actor = require('./actor');

router.get('/users', (req, res) => {
  try {
    const users = actor.getAllUsers();
    res.json(users);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

router.get('/users/id/:id', (req, res) => {
  try {
    const user = actor.getUserById(req.params.id);
    res.json(user);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

router.get('/users/login/:login', (req, res) => {
  try {
    const user = actor.getUserByLogin(req.params.login);
    res.json(user);
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

router.delete('/users/delete/:id', (req, res) => {
  try {
    const message = actor.deleteUserById(req.params.id);
    res.json({ message });
  } catch (error) {
    res.status(404).json({ error: error.message });
  }
});

module.exports = router;
