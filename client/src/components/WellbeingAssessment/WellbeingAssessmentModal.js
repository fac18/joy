import React from 'react';
import '../LoginPage/loginmodal.css';

const WellbeingAssessmentModal = ({ handleClose, show }) => {
  const showHideClassName = show ? 'modal display-block' : 'modal display-none';

  return (
    <>
      <div className={showHideClassName}>
        <section className="modal-main">
          <div>
            <form className="formFlex">
              <h2>UCLA three-item scale</h2>
              <h3>Choose an adequate score to each response : </h3>
              <li>1 equals to “hardly ever or never”</li>
              <li>2 equals to “some of the time”</li>
              <li>3 equals to “often”</li>
              <p>
                The lowest possible total combined score on the loneliness scale
                is 3 (indicating less frequent loneliness) <br />
                and the highest is 9 (indicating more frequent loneliness).{' '}
              </p>

              <div className="btn">
                <button className="inputs" onClick={handleClose}>
                  Close
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
