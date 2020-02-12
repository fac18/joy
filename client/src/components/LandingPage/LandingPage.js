import React from 'react';
import { ReactComponent as LogoSvg } from '../../svgs/logo.svg';
import { ReactComponent as LandingPageSvg } from '../../svgs/landing-page.svg';
import { Link } from 'react-router-dom';

const LandingPage = () => {
  return (
    <div className='App'>
      {/* <LogoSvg /> */}
      <h1>Joy Efficacy Tool</h1>
      <Link to='/dashboard'>
        <LandingPageSvg />
      </Link>
    </div>
  );
};

export default LandingPage;
