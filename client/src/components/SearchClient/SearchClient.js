// search client page

import React, { useEffect } from 'react';
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
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import { fade, makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  cardBg: {
    backgroundColor: '#EBEDEE',
    width: '320px',
    height: '110px',
    display: 'flex',
    borderRadius: '10px',
    marginBottom: '20px'
  },
  cardBgGrey: {
    backgroundColor: 'rgba(0,0,0,0.2)',
    width: '320px',
    display: 'flex',
    borderRadius: '10px',
    margin: '2rem auto'
  },
  accountIcon: {
    color: '#C4C4C4',
    borderRadius: '50%',
    width: '100px',
    height: '100%',
    justifyContent: 'flex-start',
    alignContent: 'center'
  },
  accountInfo: {},
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: 200,
      '&:focus': {
        width: 200
      }
    }
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: '#EBEDEE',
    '&:hover': {
      backgroundColor: 'white'
    },
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      // marginLeft: theme.spacing(1),
      width: 'auto'
    },
    margin: '1rem auto'
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#C4C4C4'
  },
  searchContainer: {
    margin: '0 auto'
  }
});

// Automatically sends a request to the server asking for a list of all the clients

const clients = [
  {
    client_firstname: 'Jim',
    client_surname: 'Brown',
    to_char: '05/05/1996'
  },
  {
    client_firstname: 'Dot',
    client_surname: 'Green',
    to_char: '05/05/1996'
  },
  {
    client_firstname: 'Kathy',
    client_surname: 'Black',
    to_char: '05/05/1996'
  },
  {
    client_firstname: 'JIm',
    client_surname: 'Brown',
    to_char: '05/05/1993'
  }
];

console.log(filterClients('J', 'J', 'J', clients));

const SearchClient = ({ clients, setClients }) => {
  // Creates a card for every user which comes back from the database
  const [searchInputFirstName, setSearchInputFirstName] = React.useState(
    undefined
  );
  const [searchInputLastName, setSearchInputLastName] = React.useState(
    undefined
  );
  const [searchInputDOB, setSearchInputDOB] = React.useState(undefined);
  const classes = useStyles();

  useEffect(() => {
    getRequest('/getallclients').then(res => {
      setClients(res);
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Card className={classes.cardBgGrey}>
        <div className={classes.searchContainer}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ 'aria-label': 'search' }}
              type='text'
              id='search'
              name='search'
              required
              value={searchInputFirstName}
              aria-label='search bar'
              placeholder='First name'
              onChange={e => setSearchInputFirstName(e.target.value)}
            />
          </div>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ 'aria-label': 'search' }}
              type='text'
              id='search'
              name='search'
              required
              value={searchInputLastName}
              aria-label='search bar'
              placeholder='Surname'
              onChange={e => setSearchInputLastName(e.target.value)}
            />
          </div>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ 'aria-label': 'search' }}
              type='text'
              id='search'
              name='search'
              required
              value={searchInputDOB}
              aria-label='search bar'
              placeholder='Date of birth'
              onChange={e => setSearchInputDOB(e.target.value)}
            />
          </div>
        </div>
      </Card>
      <div className='App'>
        <p>
          <b>Results:</b>
        </p>
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
