import React, { useReducer } from "react";

const initialState = {
  firstName: "",
  lastName: "",
  knownAs: "",
  email: "",
  password1: "",
  password2: "",
  location: ""
};

function reducer(state, { field, value }) {
  return {
    ...state,
    [field]: value
  };
}

const RegisterClient = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // if(state) {
  //     console.log(state);
  // }

  const onChange = e => {
    dispatch({ field: e.target.name, value: e.target.value });
  };

  const {
      firstName,
      lastName,
      knownAs,
    dateOfBirth,
    phoneNumber,
    address,
    nhsNumber,
  } = state;

  
export default RegisterClient;