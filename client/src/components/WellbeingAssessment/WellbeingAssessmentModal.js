import React from 'react';
import '../LoginPage/loginmodal.css';
import { ReactComponent as LogoSvg } from '../../assets/logo.svg';

const WellbeingAssessmentModal = ({ handleClose, show }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <>
      <div className={showHideClassName}>
        <section className="modal-main">
          <div>
            <form className="formFlex">
              <div className="heading">
              <LogoSvg className="logo"/>
              <h2 >UCLA three-item scale</h2>
              </div>
              <h3>Choose an adequate score to each response : </h3>
              <li>1 equals to “hardly ever or never”</li>
              <li>2 equals to “some of the time”</li>
              <li>3 equals to “often”</li>
              <br />
              <p>
                The lowest possible score on the loneliness scale
                is 3 <br />(indicating less frequent loneliness)
                <br /><br />
                The highest possible score is 9 <br />(indicating more frequent loneliness).
              </p>

              <div className="btn">
                <button className="inputs" onClick={handleClose}>
                  CLOSE
                </button>
              </div>
            </form>
          </div>
        </section>
      </div>
    </>
  );
};

export default WellbeingAssessmentModal;
