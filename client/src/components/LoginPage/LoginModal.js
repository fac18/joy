// login page

import React from "react";
// import { ReactComponent as Logo } from "../../assets/logo.svg";
import "./loginmodal.css";
import { Link } from "react-router-dom";

const LoginModal = ({ handleClose, show }) => {
  const [login, setLogin] = React.useState({
    username: "",
    password: ""
  });
  const [welcome, setWelcome] = React.useState("display-none");

  const user = {
    username: "joy",
    password: "joy"
  };

  const showHideClassName = show ? "modal display-block" : "modal display-none";
  const handleSubmit = () => {
    login.username === user.username &&
      login.password === user.password &&
      setWelcome("display-block");
  };
  // alter handle submit to display paragraph(or div) with a welcome message and link to redirect to the dashboard

  return (
    <>
      {/* <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button> */}
      <p className={welcome}>Welcome back {login.username}</p>
      <div className={showHideClassName}>
        <section className="modal-main">
          <div>
            <h2>{/* Welcome to <Logo /> */}</h2>
            <form className="formFlex" onSubmit={handleSubmit}>
              <label>
                <input
                  className="inputs"
                  type="text"
                  id="username"
                  name="username"
                  // required
                  defaultValue={login.username}
                  placeholder="Username"
                ></input>
              </label>
              <label>
                <input
                  className="inputs"
                  type="password"
                  id="password"
                  name="password"
                  // required
                  defaultValue={login.password}
                  placeholder="Password"
                ></input>
              </label>
              <label>
                <Link to="/dashboard">
                  <button
                    className="inputs color"
                    type="submit"
                    value="Submit"
                    onChange={event => setLogin(event.target.value)}
                  >
                    Log in
                  </button>
                </Link>
              </label>
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

export default LoginModal;
