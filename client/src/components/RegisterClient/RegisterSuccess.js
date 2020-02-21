import React from 'react';
import { ReactComponent as RegisterSuccess } from '../../assets/RegisterSuccess.svg';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import '../LoginPage/loginmodal.css';


const useStyles = makeStyles({
pinkButton: {
    background: '#E71F67',
    color: 'white',
    '&:hover': {
      backgroundColor: '#a11548',
    }
}
})

// const handleClick = () => {

// }
const Success = () => {
  const classes = useStyles();

  return (
    <div className='registerSucessDiv'>
    <RegisterSuccess className="registerSuccessSvg"/>
    <Button
    className={classes.pinkButton}
    variant="container"
    size="large"
    type="button"
    // onClick={handleClick}
  >
      Search for a client
  </Button>
  </div>
  )
}

export default Success;