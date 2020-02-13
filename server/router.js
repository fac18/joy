const express = require('express');
const router = express.Router();
const path = require('path');
const { getAllClients } = require('./model/queries/getData.js');

// When the getallclients route is called, calls the getdata function
// Sends back info from database

router.get('/getallclients', (req, res) => {
  getAllClients().then(data => {
    res.json(data);
  });
});

router.get('/clientProfile:id', (req, res) => {
  getClient(id).then(data => {
    res.json(data);
  });
});

module.exports = router;
