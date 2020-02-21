import React from 'react';
import { ReactComponent as LogoSvg } from '../../assets/logo.svg'
import { ReactComponent as RegisterSuccess } from '../../assets/RegisterSuccess.svg';
// import Button from '@material-ui/core/Button';
// import { makeStyles } from '@material-ui/core/styles';
import '../LoginPage/loginmodal.css';


// const useStyles = makeStyles({
// pinkButton: {
//     background: '#E71F67',
//     color: 'white',
//     '&:hover': {
//       backgroundColor: '#a11548',
//     }
// }
// })

// const handleClick = () => {

// }
const Success = ({ handleClose, show }) => {
  // const classes = useStyles();
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
<>
<div className={showHideClassName}>
<div className='registerSucessDiv'>
  <section className="modal-main">
    <div>
      <form className="formFlex">
        <div className="heading">
        <LogoSvg className="logo"/>
        <h2 >UCLA three-item scale</h2>
        </div>
  <RegisterSuccess className="registerSuccessSvg"/>


        <div className="btn">
          <button className="inputs" onClick={handleClose}>
            CLOSE
          </button>
        </div>
      </form>
    </div>
  </section>
</div>
</div>
</>
    
    )
  }
  

export default Success;