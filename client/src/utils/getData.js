// generic getdata function which
// checks the endpoint you are looking to getdata from
//sends this info to the server
// brings back the results from the database

const getRequest = endpoint => {
  return fetch(endpoint)
    .then(res => res.json())
    .catch(console.log);
};

export default getRequest;
