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
    getRequest('/list-users').then(res => updateClients(res));
  }, []);

  return (
    <>
      {clients.map}I am the search clients page
      <Link to='/clientProfile'>Link to client profile</Link>
    </>
  );
};

export default SearchClient;
