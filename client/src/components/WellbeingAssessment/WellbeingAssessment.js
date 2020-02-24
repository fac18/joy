import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { makeStyles, ThemeProvider } from '@material-ui/core/styles';
import theme from '../../theme';
import NavBar from '../NavBar/NavBar';
import Typography from '@material-ui/core/Typography';
import './WellbeingAssessment.css';
import Button from '@material-ui/core/Button';
import { ReactComponent as InfoIcon } from '../../assets/info.svg';
import WellbeingAssessmentModal from '../WellbeingAssessment/WellbeingAssessmentModal.js';
import { useParams, useHistory } from 'react-router-dom';
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
    marginLeft: '14.5rem',
    marginTop: '2rem',
    marginBottom: '2rem'
  }
});

const ClientAssessment = ({ singleClient, setSingleClient }) => {
  const [show, setShow] = React.useState(false);
  const history = useHistory();
  const showModal = () => setShow(true);
  const hideModal = () => setShow(false);
  const { register, handleSubmit, errors } = useForm();
  const [checkedOne, setCheckedOne] = useState(false);
  const [checkedTwo, setCheckedTwo] = useState(false);
  const [checkedThree, setCheckedThree] = useState(false);
  const [checkedFour, setCheckedFour] = useState(false);
  const [checkedFive, setCheckedFive] = useState(false);
  const [checkedSix, setCheckedSix] = useState(false);
  const [checkedSeven, setCheckedSeven] = useState(false);
  const [checkedEight, setCheckedEight] = useState(false);
  const [checkedNine, setCheckedNine] = useState(false);

  const [colorOne, setColorOne] = useState('');
  const [colorTwo, setColorTwo] = useState('');
  const [colorThree, setColorThree] = useState('');
  const [colorFour, setColorFour] = useState('');
  const [colorFive, setColorFive] = useState('');
  const [colorSix, setColorSix] = useState('');
  const [colorSeven, setColorSeven] = useState('');
  const [colorEight, setColorEight] = useState('');
  const [colorNine, setColorNine] = useState('');

  const classes = useStyles();
  let { id } = useParams();

  const onSubmit = (data, e) => {
    // e.preventDefault();
    console.log('This is the data inside onSubmit', data);
    // Add in the client id to the post

    data.client_id = id;
    const options = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    };
    fetch('/postclientassessment', options).then(response => {
      if (response.status === 200) {
        setTimeout(history.push(`/clientProfile/${id}`), 6000);
      } else console.log(response);
    });
  };

  console.log(errors);

  useEffect(() => {
    if (checkedOne) {
      setCheckedTwo(false);
      setColorOne('turn-pink');
      setColorTwo('');
      setColorThree('');
      setCheckedThree(false);
    }
    if (checkedTwo) {
      setCheckedOne(false);
      setColorTwo('turn-pink');
      setColorOne('');
      setColorThree('');
      setCheckedThree(false);
    }
    if (checkedThree) {
      setCheckedOne(false);
      setColorThree('turn-pink');
      setColorTwo('');
      setColorOne('');
      setCheckedTwo(false);
    }
  }, [checkedOne, checkedTwo, checkedThree]);

  useEffect(() => {
    if (checkedFour) {
      setColorFour('turn-pink');
      setCheckedFive(false);
      setCheckedSix(false);
      setColorFive('');
      setColorSix('');
    }
    if (checkedFive) {
      setColorFive('turn-pink');
      setCheckedFour(false);
      setCheckedSix(false);
      setColorFour('');
      setColorSix('');
    }
    if (checkedSix) {
      setColorSix('turn-pink');
      setCheckedFive(false);
      setCheckedFour(false);
      setColorFive('');
      setColorFour('');
    }
  }, [checkedFour, checkedFive, checkedSix]);

  useEffect(() => {
    if (checkedSeven) {
      setColorSeven('turn-pink');
      setCheckedEight(false);
      setCheckedNine(false);
      setColorEight('');
      setColorNine('');
    }
    if (checkedEight) {
      setColorEight('turn-pink');
      setCheckedNine(false);
      setCheckedSeven(false);
      setColorNine('');
      setColorSeven('');
    }
    if (checkedNine) {
      setColorNine('turn-pink');
      setCheckedEight(false);
      setCheckedSeven(false);
      setColorEight('');
      setColorSeven('');
    }
  }, [checkedSeven, checkedEight, checkedNine]);

  return (
    <ThemeProvider theme={theme} className={classes.parentElement}>
      <NavBar />
      <WellbeingAssessmentModal show={show} handleClose={hideModal}>
        <p>Modal</p>
        <p>Data</p>
      </WellbeingAssessmentModal>
      <br />
      <Typography className={classes.mainTitle}>
        <span onClick={showModal}>
          <InfoIcon title='Click me' />{' '}
        </span>
        Wellbeing assessment:
      </Typography>
      <Typography className={classes.clientName}>
        {' '}
        {singleClient.firstname} {singleClient.surname}
      </Typography>
      <br />
      <Typography className={classes.startQ}>
        {' '}
        <b>Overall, how often do you:</b> (please select)
      </Typography>
      <br />
      <section className='parentForm'>
        <form onSubmit={handleSubmit(onSubmit)} className='formWellbeing'>
          <h4>1. Feel lack of companionship?</h4>
          <fieldset className='groupQuestion'>
            <label className={colorOne}>
              1
              <input
                className='radio-input'
                name='q1_companionship'
                type='radio'
                required
                value='1'
                ref={register}
                onClick={() => {
                  setCheckedOne(prevState => !prevState);
                }}
              />
            </label>
            <label className={colorTwo}>
              2
              <input
                className='radio-input'
                name='q1_companionship'
                type='radio'
                required
                value='2'
                ref={register}
                onClick={() => {
                  setCheckedTwo(prevState => !prevState);
                }}
              />
            </label>
            <label className={colorThree}>
              3
              <input
                className='radio-input'
                name='q1_companionship'
                type='radio'
                required
                value='3'
                ref={register}
                onClick={() => {
                  setCheckedThree(prevState => !prevState);
                }}
              />
            </label>
          </fieldset>
          <aside className='ratingQ'>
            <span className='one'>Hardly ever </span>
            <span className='two'>Sometimes </span>
            <span className='three'>Often</span>
          </aside>
          {/* { errors.companionship && <p>Required field!</p> } */}
          <h4> 2. Feel left out?</h4>
          <fieldset className='groupQuestion'>
            <label className={colorFour}>
              1
              <input
                className='radio-input'
                name='q2_left_out'
                type='radio'
                required
                value='1'
                ref={register}
                onClick={() => {
                  setCheckedFour(prevState => !prevState);
                }}
              />
            </label>
            <label className={colorFive}>
              2
              <input
                className='radio-input'
                name='q2_left_out'
                type='radio'
                required
                value='2'
                ref={register}
                onClick={() => {
                  setCheckedFive(prevState => !prevState);
                }}
              />
            </label>
            <label className={colorSix}>
              3
              <input
                className='radio-input'
                name='q2_left_out'
                type='radio'
                required
                value='3'
                ref={register}
                onClick={() => {
                  setCheckedSix(prevState => !prevState);
                }}
              />
            </label>
          </fieldset>
          <aside className='ratingQ'>
            <span className='one'>Hardly ever </span>
            <span className='two'>Sometimes </span>
            <span className='three'>Often</span>
          </aside>
          <h4> 3. Feel isolated from others?</h4>
          <fieldset className='groupQuestion'>
            <label className={colorSeven}>
              1
              <input
                className='radio-input'
                name='q3_isolated'
                type='radio'
                required
                value='1'
                ref={register}
                onClick={() => {
                  setCheckedSeven(prevState => !prevState);
                }}
              />
            </label>
            <label className={colorEight}>
              2
              <input
                className='radio-input'
                name='q3_isolated'
                type='radio'
                required
                value='2'
                ref={register}
                onClick={() => {
                  setCheckedEight(prevState => !prevState);
                }}
              />
            </label>
            <label className={colorNine}>
              3
              <input
                className='radio-input'
                name='q3_isolated'
                type='radio'
                required
                value='3'
                ref={register}
                onClick={() => {
                  setCheckedNine(prevState => !prevState);
                }}
              />
            </label>
          </fieldset>
          <aside className='ratingQ'>
            <span className='one'>Hardly ever </span>
            <span className='two'>Sometimes </span>
            <span className='three'>Often</span>
          </aside>
          <br />
          <br />
          <h3 className='additionalTextTitle'>Additional Notes:</h3>
          <label className='additionalNotes'>
            <br />
            <br />
            <textarea
              placeholder='The client’s current thoughts and feelings or anything else to be aware of?'
              name='additionalNotes'
              ref={register}
            />
          </label>
          <br />
          <h3 className='scheduleTitle'>Schedule next Appointment:</h3>
          <div className='schedule-options'>
            <input
              type='datetime-local'
              placeholder='nextAppointment'
              name='nextAppointment'
              ref={register}
            />
            <br />
          </div>

          <Button
            onClick={showModal}
            type='submit'
            className={classes.pinkButton}
            variant='container'
            size='medium'
          >
            SUBMIT
          </Button>
        </form>
      </section>
    </ThemeProvider>
  );
};

export default ClientAssessment;
