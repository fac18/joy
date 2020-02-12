// search client page

import React from 'react';
import { Link } from 'react-router-dom';

const SearchClient = () => {
  return (
    <div className='App'>
      I am the search clients page
      <Link to='/clientProfile'>Link to client profile</Link>
    </div>
  );
};

export default SearchClient;
