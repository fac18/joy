const express = require('express');
const router = express.Router();
const path = require('path');
const bodyParser = require('body-parser');

const {
  getAllClients,
  getAllServices,
  getClient,
  getCurrentAssessment,
  getInitialAssessment,
  getClientServices,
  postRegisterClient,
  getTotalClients,
  getTotalServices,
  getWellbeingTotals,
  getServicesPopularity,
} = require('./model/queries/getData.js');
const postClientAssessment = require('./model/queries/postData.js');

// const  = require('./model/queries/postData');
// When the getallclients route is called, calls the getdata function
// Sends back info from database

router.get('/getallclients', (req, res) => {
  getAllClients().then(data => {
    res.json(data);
  });
});

router.get('/getclient:id', (req, res) => {
  const id = parseInt(req.params.id.slice(1, req.params.id.length));
  Promise.all([
    getClient(id),
    getInitialAssessment(id),
    getCurrentAssessment(id),
    getClientServices(id),
  ]).then(data => {
    // console.log('I am the res.json', res.json(data));
    console.log('I am not res.jsoned', data);
    return res.json(data);
  });
});

router.post('/postregisterclient', (req, res) => {
  // res.send("POST request to the wellbeing page");
  console.log('I got a request!');
  console.log(req.body);
  postRegisterClient(req.body);
});
// router.post("/postregisterclient", (req, res) => {
//   // res.send("POST request to the wellbeing page");
//   console.log("I got a register client request!");
//   console.log(req.body);
// postRegisterClient(req.body);
// res.redirect("/");
router.post('/postclientassessment', (req, res) => {
  // res.send("POST request to the wellbeing page");
  console.log('I got a request!');
  console.log(req.body);
  postClientAssessment(req.body);
});
// res.redirect("/");

// Promise.all([postClientAssessment]).then(data =>
//   console.log("Inside the post promise", data)
// );
// console.log("This is the request body", JSON.parse(req.body))
// res.send(req.body);
// });

router.get('/gettotalclients', (req, res) => {
  getTotalClients().then(data => {
    res.json(data);
  });
});

router.get('/gettotalservices', (req, res) => {
  getTotalServices().then(data => {
    res.json(data);
  });
});

router.get('/getwellbeingtotals', (req, res) => {
  getWellbeingTotals().then(data => {
    res.json(data);
  });
});

router.get('/getservicespopularity', (req, res) => {
  getServicesPopularity().then(data => {
    res.json(data);
  });
});

module.exports = router;
