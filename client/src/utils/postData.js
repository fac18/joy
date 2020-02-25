const postRequest = (endpoint, data) => {
  const options = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  };
  return fetch(endpoint, options);
};

export default postRequest;
