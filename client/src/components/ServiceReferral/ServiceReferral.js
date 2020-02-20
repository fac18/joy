// initial assessment
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import theme from '../../theme';
import NavBar from '../NavBar/NavBar';
import Typography from '@material-ui/core/Typography';
import './WellbeingAssessment.css';
import Button from '@material-ui/core/Button';
import Autocomplete from '@material-ui/lab/Autocomplete';

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

const ClientAssessment = ({ singleClient }) => {
  const classes = useStyles();
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = data => {
    console.log(data);
  };

  const [events, setEvents] = React.useState([]);
  const [isLoaded, setIsLoaded] = React.useState([]);

  React.useEffect(() => {});

  console.log(errors);
  return (
    <ThemeProvider theme={theme}>
      <NavBar />
      <br />
      <Typography className={classes.mainTitle}>
        Wellbeing assessment:
      </Typography>
      <Typography className={classes.clientName}>
        {singleClient.firstname} {singleClient.surname}, 64
      </Typography>
      <br />
      <Typography className={classes.startQ}>
        {' '}
        <b>
          Please select which services you would like to refer your client to:
        </b>{' '}
      </Typography>
      <br />
      <form onSubmit={handleSubmit(onSubmit)} className='formWellbeing'>
        <Autocomplete
          id='combo-box-demo'
          options={top100Films}
          getOptionLabel={option => option.title}
          style={{ width: 300 }}
          renderInput={params => (
            <TextField
              {...params}
              label='Combo box'
              variant='outlined'
              fullWidth
            />
          )}
        />
        <Autocomplete
          id='combo-box-demo'
          options={top100Films}
          getOptionLabel={option => option.title}
          style={{ width: 300 }}
          renderInput={params => (
            <TextField
              {...params}
              label='Combo box'
              variant='outlined'
              fullWidth
            />
          )}
        />
        <Autocomplete
          id='combo-box-demo'
          options={top100Films}
          getOptionLabel={option => option.title}
          style={{ width: 300 }}
          renderInput={params => (
            <TextField
              {...params}
              label='Combo box'
              variant='outlined'
              fullWidth
            />
          )}
        />
        <Autocomplete
          id='combo-box-demo'
          options={top100Films}
          getOptionLabel={option => option.title}
          style={{ width: 300 }}
          renderInput={params => (
            <TextField
              {...params}
              label='Combo box'
              variant='outlined'
              fullWidth
            />
          )}
        />
        <Autocomplete
          id='combo-box-demo'
          options={top100Films}
          getOptionLabel={option => option.title}
          style={{ width: 300 }}
          renderInput={params => (
            <TextField
              {...params}
              label='Combo box'
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

export default ClientAssessment;
