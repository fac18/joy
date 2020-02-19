// login page

import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from "../../svgs/joy-logo.svg";
import './loginmodal.css';


const LoginModal = ({ handleClose, show }) => {
    const [login, setLogin] = React.useState({
        username: "",
        password: ""
    });
    // const [welcome, setWelcome] = React.useState("display-none")

    // const user = {
    //   username: "joy",
    //   password: "joy"
    // }

    const showHideClassName = show ? "modal display-block" : "modal display-none";
    // const handleSubmit = () => <Link to='/dashboard' /> 
    // alter handle submit to display paragraph(or div) with a welcome message and link to redirect to the dashboard

    return (
        <>
        {/* <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button> */}
      {/* <p className={welcome}>Welcome back {login.username}</p> */}
      <div className={showHideClassName}>
          <section className="modal-main">
          <div>
           
            <h2>Welcome to  <Logo /></h2>
            <form className="formFlex">
                <label>
                <input className="inputs"
                    type="text"
                    id="username"
                    name="username"
                    // required
                    defaultValue={login.username}
                    placeholder="Username"
                ></input>
                </label>
                <label>
                <input className="inputs"
                    type="password"
                    id="password"
                    name="password"
                    // required
                    defaultValue={login.password}
                    placeholder="Password"
                ></input>
                </label>
                <label>
                <button className="inputs color" type="submit" value="Submit" onChange={event => setLogin(event.target.value)}><Link to='/dashboard' > Log in</ Link></button>
                </label>
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
  
export default LoginModal