const postRequest = endpoint => {
  return fetch("localhost:3000/postclientassessment", {
    method: "post",
    data: JSON.stringify(data)
  })
    .then(res => res.json())
    .catch(console.log);
};

export default postRequest;
