const express = require("express");
const router = express.Router();
const path = require("path");
const {
  getAllClients,
  getClient,
  getCurrentAssessment,
  getInitialAssessment,
  getClientServices
} = require("./model/queries/getData.js");
const { postClientAssessment } = require("./model/queries/postData");

// When the getallclients route is called, calls the getdata function
// Sends back info from database

router.get("/getallclients", (req, res) => {
  getAllClients().then(data => {
    res.json(data);
  });
});

router.get("/getclient:id", (req, res) => {
  const id = parseInt(req.params.id.slice(1, req.params.id.length));
  Promise.all([
    getClient(id),
    getInitialAssessment(id),
    getCurrentAssessment(id),
    getClientServices(id)
  ]).then(data => {
    // console.log('I am the res.json', res.json(data));
    console.log("I am not res.jsoned", data);
    return res.json(data);
  });
});

router.post("/postclientassessment", (req, res) => {
  // console.log("This is the response", req);
  console.log("This is the request body", JSON.parse(req.body));
  // postClientAssessment().then(data => {
  //   res.redirect("/");
  //   res.json(data);
  // });
  return req.then(data => {
    console.log("This is data body", JSON.parse(data.body));
  });
  // res.redirect("/");
});

module.exports = router;
