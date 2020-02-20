const express = require('express')
const router = express.Router()
const path = require('path')
const bodyParser = require('body-parser')
const {
  getAllClients,
  getClient,
  getCurrentAssessment,
  getInitialAssessment,
  getClientServices,
  getWellbeingTotals,
  getAllServices
} = require('./model/queries/getData.js')
const {
  postClientAssessment,
  postReferralForm
} = require('./model/queries/postData.js')

// When the getallclients route is called, calls the getdata function
// Sends back info from database

router.get('/getallclients', (req, res) => {
  getAllClients().then(data => {
    res.json(data)
  })
})

router.get('/getclient:id', (req, res) => {
  const id = parseInt(req.params.id.slice(1, req.params.id.length))

  Promise.all([
    getClient(id),
    getInitialAssessment(id),
    getCurrentAssessment(id),
    getClientServices(id)
  ]).then(data => {
    // console.log('I am the res.json', res.json(data));
    console.log('I am not res.jsoned', data)
    return res.json(data)
  })
})

router.post('/postclientassessment', (req, res) => {
  // res.send("POST request to the wellbeing page");
  // const hostname = window && window.location && window.location.hostname
  console.log('I got a request!')
  console.log('I am the client id on the backend', req.body.client_id)

  postClientAssessment(req.body)

  res.redirect('/dashboard')
})

router.post('/postreferralform:id', (req, res) => {
  const id = parseInt(req.params.id)
  postReferralForm(req, id)
})

router.get('/getwellbeingtotals', (req, res) => {
  getWellbeingTotals().then(data => {
    res.json(data)
  })
})

router.get('/getallservices', (req, res) => {
  getAllServices().then(data => {
    res.json(data)
  })
})

// router.get('*', (req, res) => {
//   res.sendFile(path.join(__dirname + '/../client/build'));
// });

// router.get('*', function(req, res) {
//   res.redirect('/');
// });

router.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, '..', 'client', 'public', 'index.html'))
})

module.exports = router
