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
  const [colorOne, setColorOne] = useState(null);
  const [colorTwo, setColorTwo] = useState(null);
  const [colorThree, setColorThree] = useState(null);
  const [colorFour, setColorFour] = useState(null);
  const [colorFive, setColorFive] = useState(null);
  const [colorSix, setColorSix] = useState(null);
  const [colorSeven, setColorSeven] = useState(null);
  const [colorEight, setColorEight] = useState(null);
  const [colorNine, setColorNine] = useState(null);
  const classes = useStyles();
  let { id } = useParams();

  // useEffect(() => {
  //   getRequest(`/getclient:${id}`).then(res => {
  //     setSingleClient(buildClientObject(res));
  //   });
  // }, []);
  const colorOneFunc = event => {
    console.log('Hello this is pink');
    setColorOne('turn-pink');
  };
  const colorTwoFunc = event => {
    console.log('Hello this is pink');
    setColorTwo('turn-pink');
  };
  const colorThreeFunc = event => {
    console.log('Hello this is pink');
    setColorThree('turn-pink');
  };
  const colorFourFunc = event => {
    console.log('Hello this is pink');
    setColorFour('turn-pink');
  };
  const colorFiveFunc = event => {
    console.log('Hello this is pink');
    setColorFive('turn-pink');
  };
  const colorSixFunc = event => {
    console.log('Hello this is pink');
    setColorSix('turn-pink');
  };
  const colorSevenFunc = event => {
    console.log('Hello this is pink');
    setColorSeven('turn-pink');
  };
  const colorEightFunc = event => {
    console.log('Hello this is pink');
    setColorEight('turn-pink');
  };
  const colorNineFunc = event => {
    console.log('Hello this is pink');
    setColorNine('turn-pink');
  };

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
        history.push(`/clientProfile/${id}`);
      } else console.log(response);
    });
  };

  console.log(errors);

  // useEffect(() => {
  //   if (colorOne === "turn-pink") {
  //     setColorOne(null);
  //   }
  // }, [
  //   colorTwo,
  //   colorThree,
  //   colorFour,
  //   colorFive,
  //   colorSix,
  //   colorSeven,
  //   colorEight,
  //   colorNine
  // ]);

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
                // checked={
                //   colorOne === "turn-pink" &&
                //   colorTwo === null &&
                //   colorThree === null
                // }
                ref={register}
                onChange={colorOneFunc}
              />
            </label>
            <label className={colorTwo}>
              2
              <input
                className='radio-input'
                onChange={colorTwoFunc}
                name='q1_companionship'
                type='radio'
                required
                value='2'
                ref={register}
                // checked={
                //   colorTwo === "turn-pink" &&
                //   colorOne === null &&
                //   colorThree === null
                // }
              />
            </label>
            <label className={colorThree}>
              3
              <input
                className='radio-input'
                onChange={colorThreeFunc}
                name='q1_companionship'
                type='radio'
                required
                value='3'
                ref={register}
                // checked={
                //   colorThree === "turn-pink" &&
                //   colorTwo === null &&
                //   colorOne === null
                // }
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
                onChange={colorFourFunc}
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
                onChange={colorFiveFunc}
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
                onChange={colorSixFunc}
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
                onChange={colorSevenFunc}
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
                onChange={colorEightFunc}
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
                onChange={colorNineFunc}
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
              placeholder='The client’s current thoughts and feelings and Anything else to be aware of?'
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
