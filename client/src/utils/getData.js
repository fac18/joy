// get data file

const getRequest = endpoint => {
  return fetch('http://localhost:3001' + endpoint)
    .then(res => res.json())
    .catch(console.log);
};

export default getRequest;
