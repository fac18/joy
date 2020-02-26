const fs = require('fs');
const dbBuild = require('../model/database/db_build');
const schema = fs.readFileSync(`${__dirname}/../model/database/db_build.sql`).toString();
const {
  getClient,
  getAllClients,
  getCurrentAssessment,
  getInitialAssessment,
  getClientServices,
  getTotalClients,
  getTotalServices,
  getInitialWellbeingTotals,
  getCurrentWellbeingTotals,
  getServicesPopularity,
  getAllServices
} = require('../model/queries/getData.js');

beforeEach(() => {
  return dbBuild(schema);
});

beforeEach(() => {
  jest.setTimeout(10000);
});

test('get a specific client basic info', () => {
  return getClient(1).then(client => {
    expect(client[0].client_firstname).toBe('Jim');
  });
});

test('get all the clients in the database', () => {
  return getAllClients().then(clients => {
    expect(clients.length).toBe(8);
  });
});

test('get current assessment details', () => {
  return getCurrentAssessment(1).then(assessment => {
    expect(assessment[0].total_ucla3).toBe(8);
  });
});

test('get initial assessment details', () => {
  return getInitialAssessment(1).then(assessment => {
    expect(assessment[0].total_ucla3).toBe(8);
  });
});

test('get details about what services a client has been referred to', () => {
  return getClientServices(1).then(services => {
    expect(services.length).toBe(3);
  });
});

test('get details about what services a client has been referred to', () => {
  return getClientServices(1).then(services => {
    expect(services.length).toBe(3);
  });
});

test('get the total number of clients in the database', () => {
  return getTotalClients().then(count => {
    expect(parseInt(count[0].count)).toBe(8);
  });
});

test('get the count of the total number of services in the database', () => {
  return getTotalServices().then(count => {
    expect(parseInt(count[0].count)).toBe(14);
  });
});

test('get accurate data around the sites initial wellbeing', () => {
  return getInitialWellbeingTotals().then(totals => {
    console.log(totals);
    expect(parseInt(totals[0].lonely_8_9)).toBe(4);
  });
});

test('get accurate data around the sites current wellbeing', () => {
  return getCurrentWellbeingTotals().then(totals => {
    console.log(totals);
    expect(parseInt(totals[0].lonely_8_9)).toBe(1);
  });
});

test('get the right number of services', () => {
  return getAllServices().then(services => {
    console.log(services);
    expect(services.length).toBe(14);
  });
});
