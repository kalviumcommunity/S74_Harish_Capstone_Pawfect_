const express = require('express');
const router = express.Router();
const Pet = require('../models/pet');


router.get('/', async (req, res) => {
  try {
    const pets = await Pet.find();
    res.json(pets);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
