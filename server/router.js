const express = require('express');
const router = express.Router();
const path = require('path');
const { getAllClients, getClient } = require('./model/queries/getData.js');

// When the getallclients route is called, calls the getdata function
// Sends back info from database

router.get('/getallclients', (req, res) => {
  getAllClients().then(data => {
    res.json(data);
  });
});

router.get('/getclient:id', (req, res) => {
  const id = parseInt(req.params.id.slice(1, req.params.id.length));
  getClient(id).then(data => {
    console.log('I am the data in the router', data);
    return res.json(data);
  });
});

module.exports = router;
