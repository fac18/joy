import React from 'react';
import '../LoginPage/loginmodal.css';


const WellbeingAssessmentModal = ({ handleClose, show }) => {
    const showHideClassName = show ? "modal display-block" : "modal display-none";

    return (
        <>
      <div className={showHideClassName}>
          <section className="modal-main">
          <div>
           
            <form className="formFlex">
             
                <h2></h2>
             
                <div className="btn">
              <button  className="inputs" onClick={handleClose}>Close</button>
              </div>
            </form>
        </div>
          </section>
      </div>
      </>
    );
}
  
export default WellbeingAssessmentModal