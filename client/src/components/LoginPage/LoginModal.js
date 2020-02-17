// login page

import React from 'react'
import { ReactComponent as Logo } from "../../svgs/joy-logo.svg";
import './loginmodal.css';


const LoginModal = ({ handleClose, show }) => {
    const [login, setLogin] = React.useState({
        username: "",
        password: ""
    });
    const [welcome, setWelcome] = React.useState("display-none")

    const user = {
      username: "joy",
      password: "joy"
    }

    const showHideClassName = show ? "modal display-block" : "modal display-none";
    const handleSubmit = () => { (login.username === user.username && login.password === user.password) && setWelcome("display-block") }

    return (
        <>
        {/* <Button variant="primary" onClick={handleShow}>
          Launch demo modal
        </Button> */}
      <p className={welcome}>Welcome back {login.username}</p>
      <div className={showHideClassName}>
          <section className="modal-main">
          <div>
           
            <h2>Welcome to  <Logo /></h2>
            <form className="formFlex" onSubmit={handleSubmit}>
                <label>
                <input className="inputs"
                    type="text"
                    id="username"
                    name="username"
                    required
                    defaultValue={login.username}
                    placeholder="Username"
                ></input>
                </label>
                <label>
                <input className="inputs"
                    type="password"
                    id="password"
                    name="password"
                    required
                    defaultValue={login.password}
                    placeholder="Password"
                ></input>
                </label>
                <label>
                <button  className="inputs color" type="submit" value="Submit" onChange={event => setLogin(event.target.value)}>Log in</button>
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