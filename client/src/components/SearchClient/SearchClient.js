// search client page

import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Card from '@material-ui/core/Card';
import { CardContent } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Typography from '@material-ui/core/Typography';
import NavBar from '../NavBar/NavBar';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../theme';
import getRequest from '../../utils/getData';

import { filterClients } from '../../utils/filterClients';

const useStyles = makeStyles({
  cardBg: {
    backgroundColor: '#EBEDEE',
    width: '350px',
    height: '110px',
    display: 'flex',
    borderRadius: '10px',
    marginBottom: '20px'
  },
  accountIcon: {
    color: '#C4C4C4',
    borderRadius: '50%',
    width: '100px',
    height: '100%',
    justifyContent: 'flex-start',
    alignContent: 'center'
  },
  accountInfo: {}
});

// Automatically sends a request to the server asking for a list of all the clients

const SearchClient = ({ clients, setClients }) => {
  // Creates a card for every user which comes back from the database

  useEffect(() => {
    getRequest('/getallclients').then(res => {
      setClients(res);
      // console.log(clients.client_id);
    });
  }, []);
  const [searchInputFirstName, setSearchInputFirstName] = React.useState(
    undefined
  );
  const [searchInputLastName, setSearchInputLastName] = React.useState(
    undefined
  );
  const [searchInputDOB, setSearchInputDOB] = React.useState(undefined);
  // const [cardCount, setCardCount] = React.useState(clients.length)
  // let counter = 0;

  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <form>
        <input
          type='text'
          id='search'
          name='search'
          required
          value={searchInputFirstName}
          aria-label='search bar'
          placeholder='Search by first name'
          onChange={e => setSearchInputFirstName(e.target.value)}
        />
      </form>
      <form>
        <input
          type='text'
          id='search'
          name='search'
          required
          value={searchInputLastName}
          aria-label='search bar'
          placeholder='Search by surname'
          onChange={e => setSearchInputLastName(e.target.value)}
        />
      </form>{' '}
      <form>
        <input
          type='text'
          id='search'
          name='search'
          required
          value={searchInputDOB}
          aria-label='search bar'
          placeholder='Search by date of birth'
          onChange={e => setSearchInputDOB(e.target.value)}
        />
      </form>
      <div className='App'>
        <br />
        <p>
          <b>You have {clients.length} clients:</b>
        </p>
        <br />
        {filterClients(
          searchInputFirstName,
          searchInputLastName,
          searchInputDOB,
          clients
        ).map(client => (
          <Link
            to={`clientProfile/${client.client_id}`}
            style={{ textDecoration: 'none' }}
          >
            <Card className={classes.cardBg}>
              <CardContent>
                <AccountCircleIcon className={classes.accountIcon} />
              </CardContent>
              <Typography className={classes.accountInfo}>
                <h3>
                  {/* there is apparently an issue with h3 being a descedant of the p tag */}
                  <b>
                    {client.client_firstname} {client.client_surname}
                  </b>
                </h3>
                <p>DOB: {client.to_char}</p>
              </Typography>
            </Card>
          </Link>
        ))}
      </div>
    </ThemeProvider>
  );
};

export default SearchClient;
