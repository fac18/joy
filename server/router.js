const express = require('express');
const router = express.Router();
const path = require('path');
const { getAllClients } = require('./model/queries/getData.js');

router.get('/getallclients', (req, res) => {
  getAllClients()
    .then(data => {
      res.json(data);
    })
    .then(data => {
      console.log('I am in the router', data);
    });
});

module.exports = router;
