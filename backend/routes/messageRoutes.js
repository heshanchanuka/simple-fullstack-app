const express = require('express');
const router = express.Router();
const Message = require('../models/Message');

router.post('/', async (req, res) => {
  const { name, message } = req.body;
  const newMessage = new Message({ name, message });
  await newMessage.save();
  res.json(newMessage);
});

router.get('/', async (req, res) => {
  const messages = await Message.find();
  res.json(messages);
});

module.exports = router;
