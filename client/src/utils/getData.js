// get data file

const getRequest = endpoint => {
  return fetch('http://localhost:5000' + endpoint)
    .then(res => res.json())
    .catch(console.log);
};

export default getRequest;
