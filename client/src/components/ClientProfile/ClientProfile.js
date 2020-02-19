import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link, useParams, Switch } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../theme';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import NavBar from '../NavBar/NavBar';
import getRequest from '../../utils/getData';
import buildClientObject from '../../utils/buildClientObject';
import { Route } from 'react-router-dom';
import WellbeingAssessment from '../WellbeingAssessment/WellbeingAssessment';

// import Button from "../Button/Button";

const useStyles = makeStyles({
  root: {
    minWidth: 350,
    maxWidth: 500,
    border: 'solid 2px #A0B43B',
    textAlign: 'center',
    margin: '1rem'
  },
  services: {
    minWidth: 350,
    maxWidth: 500,
    border: 'solid 2px #E91E63',
    margin: '1rem',
    listStyleType: 'none'
  },
  mainTitle: {
    paddingTop: '2rem'
  },
  pos: {
    display: 'inline-block',
    fontSize: 32,
    marginBottom: 12,
    backgroundColor: '#F6A192',
    // borderRadius: "50",
    // duplicate border radius, assumed the one below is the property in use
    padding: '13px 28px',
    borderRadius: '100px'
  },
  greenButton: {
    background: '#A0B43B',
    color: 'white',
    '&:hover': {
      backgroundColor: '#707E29'
    },
    padding: '10px 20px',
    margin: '0.5rem auto'
  },
  pinkButton: {
    background: '#E71F67',
    color: 'white',
    '&:hover': {
      backgroundColor: '#80902F'
    },
    padding: '10px 20px',
    margin: '0.5rem auto'
  },
  accountIcon: {
    color: '#C4C4C4'
  },
  list: {
    listStyleType: 'none',
    margin: 'auto'
  }
});

const ClientProfile = ({ singleClient, setSingleClient, match }) => {
  // const [id, setID] = React.useState({});

  const classes = useStyles();

  let { id } = useParams();

  useEffect(() => {
    getRequest(`/getclient:${id}`).then(res => {
      setSingleClient(buildClientObject(res));
    });
  }, []);

  if (singleClient === null) {
    console.log('poo');
    return null;
  } else {
    console.log('I am the singleClient', singleClient);
    return (
      <ThemeProvider theme={theme}>
        <NavBar />
        <div className='App'>
          <Typography className={classes.mainTitle} variant='h4' gutterBottom>
            <AccountCircleIcon
              fontSize='large'
              className={classes.accountIcon}
            />
            {singleClient.firstname} {singleClient.surname}, 64
          </Typography>

          <Card className={classes.root}>
            <CardContent>
              <Typography
                variant='body1'
                component='p'
                color='textPrimary'
                gutterBottom
              >
                Initial wellbeing score: <b>{singleClient.initialAssessment}</b>
              </Typography>
              <Typography variant='h6' component='h6'>
                <b>Current wellbeing score:</b>
              </Typography>
              <Typography className={classes.pos} color='textPrimary'>
                {singleClient.currentAssessment}
              </Typography>
              <Typography variant='body1' component='p'>
                Last assessment date: {singleClient.currentAssessmentDate}
              </Typography>
              <Typography variant='h6' component='h6'>
                <b>Next assessment due: 3 Apr 2020</b>
              </Typography>
            </CardContent>
            <Link
              to={`wellbeingAssessment/${id}`}
              style={{ textDecoration: 'none' }}
            >
              {' '}
              <CardActions>
                <Button
                  className={classes.greenButton}
                  variant='container'
                  size='medium'
                >
                  Start Wellbeing Assessment
                </Button>
              </CardActions>
            </Link>
          </Card>
          <Card className={classes.services}>
            <CardContent>
              <Typography variant='h6' component='h2'>
                <b>Current services referred to:</b>
              </Typography>
              <Typography color='textPrimary'>
                <ul className={classes.list}>
                  {Array.isArray(singleClient.referredServices)
                    ? singleClient.referredServices.map(service => (
                        <li> {service.services_name} </li>
                      ))
                    : singleClient.referredServices}
                </ul>
              </Typography>
            </CardContent>
            <CardActions>
              <Button
                className={classes.pinkButton}
                variant='container'
                size='medium'
              >
                Start Services Referral
              </Button>
            </CardActions>
          </Card>
        </div>
        <Switch>
          <Route
            path={`${match.path}/wellbeingAssessment/:id`}
            path='/wellbeingAssessment/:id'
            render={() => <WellbeingAssessment />}
          />
        </Switch>
      </ThemeProvider>
    );
  }
};

export default ClientProfile;
