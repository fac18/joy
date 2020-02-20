import Autocomplete from '@material-ui/lab/Autocomplete';

// initial assessment
import React, { useEffect } from 'react';
// import { useForm } from 'react-hook-form';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import theme from '../../theme';
import NavBar from '../NavBar/NavBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useParams, useHistory } from 'react-router-dom';
import getRequest from '../../utils/getData';
import buildClientObject from '../../utils/buildClientObject';

const useStyles = makeStyles({
  mainTitle: {
    fontSize: '35px',
    fontWeight: 'bold',
    textAlign: 'center'
  },
  clientName: {
    fontSize: '35px',
    textAlign: 'center'
  },
  startQ: {
    fontSize: '20px',
    textAlign: 'center'
  },
  pinkButton: {
    background: '#E71F67',
    color: 'white',
    '&:hover': {
      backgroundColor: '#80902F'
    },
    padding: '10px 30px',
    marginLeft: '11rem',
    marginTop: '2rem',
    marginBottom: '2rem'
  },
  form: {
    margin: 'auto',
    marginTop: '4em',
    display: 'flex',
    flexDirection: 'column'
  }
});

const ReferralForm = ({ singleClient, setSingleClient }) => {
  const [services, setServices] = React.useState(null);
  const [referredServices, setReferredServices] = React.useState(null);
  const classes = useStyles();
  let { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    getRequest(`/getclient:${id}`).then(res => {
      setSingleClient(buildClientObject(res));
    });
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(referredServices)
    };
    fetch(`/postreferralform:${id}`, options).then(response => {
      if (response.status === 200) {
        history.push(`/clientProfile/${id}`);
      } else console.log(response);
    });
  };

  useEffect(() => {
    getRequest(`/getallservices`).then(res => {
      console.log(res);
      setServices(res);
    });
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Typography className={classes.mainTitle}>Referral Form:</Typography>
      <Typography className={classes.clientName}>
        {' '}
        {singleClient.firstname} {singleClient.surname}
      </Typography>
      <Typography className={classes.startQ}></Typography>;
      <form className={classes.form} onSubmit={handleSubmit}>
        <Typography className={classes.startQ}>
          Which service would you like to refer your client to?
        </Typography>
        <Autocomplete
          onChange={(event, value) => {
            setReferredServices({
              ...referredServices,
              referredServiceOne: value
            });
          }}
          id=''
          getOptionLabel={option => option.services_name}
          options={services}
          style={{ width: 300, margin: 'auto', padding: '5em' }}
          renderInput={params => (
            <TextField
              {...params}
              label='Find the right service.'
              variant='outlined'
              fullWidth
            />
          )}
        />

        <Button
          type='submit'
          className={classes.pinkButton}
          variant='container'
          size='medium'
          style={{ margin: 'auto' }}
        >
          SUBMIT
        </Button>
      </form>
    </ThemeProvider>
  );
};

export default ReferralForm;
