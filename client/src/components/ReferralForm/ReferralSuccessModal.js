import React from 'react';
import { ReactComponent as LogoSvg } from '../../assets/logo.svg'
import { ReactComponent as RegisterSuccess } from '../../assets/success.svg';
import '../LoginPage/loginmodal.css';


const Success = ({ handleClose, show }) => {
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
        </div>
        <div className="center">
  <RegisterSuccess className="registerSuccessSvg"/>
</div>

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