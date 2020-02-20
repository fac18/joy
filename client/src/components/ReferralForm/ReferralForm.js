import Autocomplete from '@material-ui/lab/Autocomplete';

// initial assessment
import React from 'react';
import { useForm } from 'react-hook-form';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import theme from '../../theme';
import NavBar from '../NavBar/NavBar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useParams } from 'react-router-dom';

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

  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (data, e) => {
    console.log('This is the data inside onSubmit', data);
    // data.client_id = id;
    // const options = {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(data)
    // };
    // fetch('/postreferralform', options).then(response => console.log(response));
  };

  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <Typography className={classes.mainTitle}>Referral Form:</Typography>
      <Typography className={classes.clientName}>Jim Brown, 64</Typography>
      <Typography className={classes.startQ}></Typography>;
      <form onSubmit={handleSubmit(onSubmit)} className='formWellbeing'>
        <Autocomplete
          id=''
          options={['poo', 'wee', 'blue']}
          value='poo'
          // getOptionLabel={option => option.title}
          style={{ width: 300 }}
          ref={register}
          renderInput={params => (
            <TextField
              {...params}
              label='Find the right service.'
              variant='outlined'
              fullWidth
            />
          )}
        />
        <input
          name='email'
          placeholder='bluebill1049@hotmail.com'
          type='email'
          ref={register}
        />
        <label>
          1
          {/* <input
            name='q1_companionship'
            type='radio'
            required
            value='1'
            ref={register}
          /> */}
        </label>

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
