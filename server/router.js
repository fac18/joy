const express = require('express');
const router = express.Router();
const path = require('path');
const { getAllClients } = require('./model/queries/getData.js');

router.get('/getallclients', (req, res) => {
  getAllClients().then(data => {
    res.json(data);
  });
});

module.exports = router;
