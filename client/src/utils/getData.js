// get data file

const getRequest = endpoint => {
  return fetch(endpoint)
    .then(res => res.json())
    .then(res => res)
    .catch(console.log);
};

export default getRequest;
