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
  getTotalClients,
  getTotalServices,
  getWellbeingTotals,
  getServicesPopularity
} = require('./model/queries/getData.js');

const {
  postClientAssessment,
  postReferralForm,
  postRegisterClient

} = require('./model/queries/postData.js');

// get routes

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
    getClientServices(id)
  ]).then(data => {
    console.log('I am not res.jsoned', data);
    return res.json(data);
  });
});

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

router.get('/getallservices', (req, res) => {
  getAllServices().then(data => {
    res.json(data);
  });
});

router.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '../client/build/index.html'));
});

// post routes

router.post('/postreferralform:id', (req, res) => {
  const id = parseInt(req.params.id.slice(1, req.params.id.length));
  postReferralForm(req, id)
    .then(data => {
      res.status(200);
    })
    .catch(err => res.status(200).send('Server error posting to database'));
});

router.post('/postregisterclient', (req, res) => {
  console.log('I am posting the client', req.body.firstName);
  postRegisterClient(req.body)
    .then(data => {
      res.status(200).send('Data successfully submitted!');
    })
    .catch(err => res.status(500).send('Server error posting to database'));
});

router.post('/postclientassessment', (req, res) => {
  console.log(req.body);
  postClientAssessment(req.body)
    .then(data => {
      res.status(200).send('Data successfully submitted!');
    })
    .catch(err => res.status(500).send('Server error posting to database'));
});

module.exports = router;
