import React from 'react';
import { ReactComponent as LogoSvg } from '../../assets/logo.svg';
import { ReactComponent as LandingPageSvg } from '../../assets/landing-page.svg';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../theme';
import LoginModal from '../LoginPage/LoginModal';

const useStyles = makeStyles({
  logo: {
    paddingTop: '5vh',
    height: '70px'
  }
});

const LandingPage = () => {
  const [show, setShow] = React.useState(false);
  const showModal = () => setShow(true);
  const hideModal = () => setShow(false);

  const classes = useStyles();
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className='App'>
          <LoginModal show={show} handleClose={hideModal}>
            <p>Modal</p>
            <p>Data</p>
          </LoginModal>
          <nav>
            <ul className='homePageNav'>
              {/* <li>
            <Link className="list" to="/About">ABOUT US</Link>
          </li> */}
              <li className='list' onClick={showModal}>
                LOGIN
              </li>
              {/* <li>
            <Link className="signUp list" to="/SignUp">SIGN UP</Link>
          </li> */}
            </ul>
          </nav>{' '}
          <LogoSvg className={classes.logo} />
          <h1>Efficacy Tool</h1>
          <Link to='/dashboard'>
            <LandingPageSvg />
          </Link>
        </div>
      </ThemeProvider>
    </>
  );
};

export default LandingPage;
