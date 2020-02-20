// login page

import React from 'react';
import { Link , withRouter} from 'react-router-dom';
import { ReactComponent as Logo } from "../../svgs/joy-logo.svg";
import './loginmodal.css';
// import e from 'express';


const LoginModal = ({ handleClose, show, history }) => {
  console.log(history)
    const [password, setPassword] = React.useState('');
    const [username, setUsername] = React.useState('');
    // const [welcome, setWelcome] = React.useState("display-none")

  const user = {
    username: "joy",
    password: "joy"
  };

    const showHideClassName = show ? "modal display-block" : "modal display-none";
  const handleSubmit = (e) => {
      e.preventDefault();

      if(user.username === username && user.password === password) {
      history.push('/dashboard');
      alert('Welcome to Joy');

      }

      // <Link to='/dashboard' />
    } 
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
            <h2>{/* Welcome to <Logo /> */}</h2>
            <form className="formFlex" onSubmit={handleSubmit}>
                <label>
                <input className="inputs"
                    type="text"
                    id="username"
                    name="username"
                    // required
                    defaultValue={username}
                    onChange={event => setUsername(event.target.value)}
                    placeholder="Username"
                ></input>
                </label>
                <label>
                <input className="inputs"
                    type="password"
                    id="password"
                    name="password"
                    // required
                    defaultValue={password}
                    onChange={event => setPassword(event.target.value)}
                    placeholder="Password"
                ></input>
                </label>
                <label>
                <button className="inputs color" type="submit" value="Submit"> Log in </button>
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
  
export default withRouter(LoginModal)
