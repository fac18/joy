// search client page

import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import getRequest from '../../utils/getData';

const SearchClient = () => {
  const [clients, updateClients] = React.useState(
    [
      {
        client_firstname: 'Jim',
        client_surname: 'Morris',
        client_dob: '1994/05/05'
      }
    ],
    [
      {
        client_firstname: 'Sally',
        client_surname: 'Evans',
        client_dob: '1993/05/05'
      }
    ]
  );

  useEffect(() => {
    getRequest('/getallclients')
      .then(res => updateClients(res))
      .then(console.log(clients));
  }, []);

  return (
    <>
      <p>shhh</p>
    </>
  );
};

export default SearchClient;
