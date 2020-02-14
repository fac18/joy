import React, { useEffect } from 'react';
import { ReactComponent as LogoSvg } from '../../svgs/logo.svg';
import { ReactComponent as LandingPageSvg } from '../../svgs/landing-page.svg';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles';
import theme from '../../theme';

const useStyles = makeStyles({
  logo: {
    paddingTop: '5vh',
    height: '70px'
  }
});

const LandingPage = () => {
  const classes = useStyles();
  return (
    <>
      <ThemeProvider theme={theme}>
        <div className='App'>
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
