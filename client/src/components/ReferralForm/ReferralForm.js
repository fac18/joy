import Autocomplete from '@material-ui/lab/Autocomplete';

// initial assessment
import React, { useReducer } from 'react';
// import { useForm } from 'react-hook-form';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import theme from '../../theme';
import NavBar from '../NavBar/NavBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useParams } from 'react-router-dom';
import FormControl from '@material-ui/core/FormControl';

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
  }
});

const ReferralForm = () => {
  let { id } = useParams();

  const [referredServices, setReferredServices] = React.useState(null);

  const classes = useStyles();

  const handleSubmit = e => {
    e.preventDefault();
    alert('submitting form');
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(referredServices)
    };
    fetch('/postreferralform', options).then(response => console.log(response));
  };

  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Typography className={classes.mainTitle}>Referral Form:</Typography>
      <Typography className={classes.clientName}>Jim Brown, 64</Typography>
      <Typography className={classes.startQ}></Typography>;
      <form
        // action='/postreferralform'
        // method='POST'
        onSubmit={handleSubmit}
        className='formWellbeing'
      >
        <Autocomplete
          onChange={(event, value) => {
            setReferredServices({
              ...referredServices,
              referredSeriviceOne: value
            });
          }}
          // setReferredServices(prevState => ({
          //   referredServices: {
          //     ...prevState.referredServices,
          //     referredServiceOne: value
          //   }
          // }
          // )}
          // prints the selected value
          id=''
          options={['poo', 'wee', 'blue']}
          style={{ width: 300 }}
          renderInput={params => (
            <TextField
              {...params}
              label='Find the right service.'
              variant='outlined'
              fullWidth
            />
          )}
        />
        <Autocomplete
          onChange={(event, value) => {
            setReferredServices({
              ...referredServices,
              referredSeriviceTwo: value
            });
          }}
          id=''
          options={['poo', 'wee', 'blue']}
          style={{ width: 300 }}
          renderInput={params => (
            <TextField
              {...params}
              label='Find the right service.'
              variant='outlined'
              fullWidth
            />
          )}
        />
        <Autocomplete
          onChange={(event, value) => {
            setReferredServices({
              ...referredServices,
              referredSeriviceThree: value
            });
          }}
          id=''
          options={['poo', 'wee', 'blue']}
          style={{ width: 300 }}
          renderInput={params => (
            <TextField
              {...params}
              label='Find the right service.'
              variant='outlined'
              fullWidth
            />
          )}
        />
        <Autocomplete
          onChange={(event, value) => {
            setReferredServices({
              ...referredServices,
              referredSeriviceFour: value
            });
          }}
          id=''
          options={['poo', 'wee', 'blue']}
          style={{ width: 300 }}
          renderInput={params => (
            <TextField
              {...params}
              label='Find the right service.'
              variant='outlined'
              fullWidth
            />
          )}
        />
        <Autocomplete
          onChange={(event, value) => {
            setReferredServices({
              ...referredServices,
              referredSeriviceFive: value
            });
          }}
          id=''
          options={['poo', 'wee', 'blue']}
          style={{ width: 300 }}
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
        >
          NEXT
        </Button>
      </form>
    </ThemeProvider>
  );
};

export default ReferralForm;
