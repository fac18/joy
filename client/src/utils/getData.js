// get data file

const getRequest = endpoint => {
  return fetch(endpoint)
    .then(res => res.json())
    .then(res => console.log('I am on the front end', res))
    .catch(console.log);
};

export default getRequest;
