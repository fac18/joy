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
  getInitialWellbeingTotals,
  getCurrentWellbeingTotals,
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

router.get('/getinitialwellbeingtotals', (req, res) => {
  getInitialWellbeingTotals().then(data => {
    res.json(data);
  });
});
router.get('/getcurrentwellbeingtotals', (req, res) => {
  getCurrentWellbeingTotals().then(data => {
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
      res.status(200).send('Data successfully submitted!'); ;
    })
    .catch(console.log);
});

router.post('/postregisterclient', (req, res) => {
  postRegisterClient(req.body)
    .then(data => {
      res.status(200).send('Data successfully submitted!');
    })
    .catch(console.log);
});

router.post('/postclientassessment', (req, res) => {
  postClientAssessment(req.body)
    .then(data => {
      res.status(200).send('Data successfully submitted!');
    })
    .catch(console.log);
});

module.exports = router;
