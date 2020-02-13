// search client page

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import getRequest from '../../utils/getData';

const SearchClient = () => {
  const [clients, updateClients] = React.useState([{}], [{}]);

  useEffect(() => {
    getRequest('/getallclients').then(res => {
      console.log('I am the res in searhclient', res[0].client_firstname);
      updateClients(res);
    });
  }, []);

  return (
    <>
      <p>{clients[0].client_firstname}</p>
    </>
  );
};

export default SearchClient;
