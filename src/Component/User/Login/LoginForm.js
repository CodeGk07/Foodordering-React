import React, { useState } from "react";
import style from "./LoginForm.module.css";

const LoginForm = (props) => {
  const [enteredEmail, setEnteredEmail] = useState("");
  const [validEmail, setValidEmail] = useState();
  const [enteredPassword, setEnteredPassword] = useState("");
  const [validPassword, setValidPassword] = useState();
  const [formValid, setFormValid] = useState();

  const emailHandler = (event) => {
    setEnteredEmail(event.target.value);
    console.log(event.target.value);
    setFormValid(
      event.target.value.includes("@") && enteredPassword.length > 6
    );
  };

  const passwordHandler = (event) => {
    setEnteredPassword(event.target.value);
    console.log(event.target.value);
    setFormValid(
      event.target.value.trim().length > 6 && enteredEmail.includes("@")
    );
  };

  const validateEmail = () => {
    setValidEmail(enteredEmail.includes("@"));
  };

  const validatePassword = () => {
    setValidPassword(enteredPassword.trim().length > 6);
  };

  const loginHandler = (event) => {
    event.preventDefault();
    console.log("You logged In");

    setEnteredPassword("");
    setEnteredEmail("");
  };


  return (
    <div className={style.container}>
      <h2 className={style.header}>Lets Get Started</h2>
      <form>
        <div className={style.lcon}>
          <label className={style.elabel} htmlFor="mail">
            Email
          </label>
          <input
            className={`${style.einput} ${
              validEmail === false ? style.valid : ""
            }`}
            value={enteredEmail}
            onChange={emailHandler}
            onBlur={validateEmail}
            type="email"
          />
        </div>
        <div className={style.pcon}>
          <label className={style.plabel} htmlFor="password">
            Password
          </label>
          <input
            className={`${style.pinput} ${
              validPassword === false ? style.valid : ""
            }`}
            value={enteredPassword}
            onChange={passwordHandler}
            onBlur={validatePassword}
            type="password"
          />
        </div>
        <div className={style.bcon}>
          <button className={`${style.login} ${style.button}`} disabled={!formValid} onClick={loginHandler}>
            Login
          </button>
          <button className={style.signin} onClick={props.oncloseForm}>
            Cancel
          </button>
        </div>
        <div className={style.ccon}>
          <a href="" className={style.acccount}>
            Create a New Account
          </a>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
