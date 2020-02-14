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

router.get('/getclient:id', (req, res) => {
  const id = parseInt(req.params.id);
  getClient(id).then(data => {
    res.json(data);
  });
});

module.exports = router;
