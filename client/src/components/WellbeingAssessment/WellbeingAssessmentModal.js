import React from 'react';
import '../LoginPage/loginmodal.css';
import { ReactComponent as Success } from '../../assets/success.svg';
import { ReactComponent as LogoSvg } from '../../assets/logo.svg';

const WellbeingAssessmentModal = ({ handleClose, show }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';
  // let { id } = useParams();
  return (
    <>
      <div className={showHideClassName}>
        <div className='registerSucessDiv'>
          <section className='modal-main'>
            <div>
              <form className='formFlex'>
                <div className='heading'>
                  <LogoSvg className='logo' />
                </div>
                <div className='center'>
                  <Success className='registerSuccessSvg' />
                  <p>Wellbeing assessment completed!</p>
                </div>

                <div className='btn'>
                  <button className='inputs' onClick={handleClose}>
                    CLOSE
                  </button>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </>
  );
};

export default WellbeingAssessmentModal;
