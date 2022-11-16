import React from 'react';
import "./form.css";
const Form = ({ getEmail, getPass, submitForm }) => {

  return (
    <div className='center-form'>
      <form method="get" id="login-form" className="login-form" autoComplete="off" role="main" onSubmit={submitForm}>
        <h1 className="a11y-hidden">Login Form</h1>
        <div>
          <label className="label-email">
            <input type="email" className="text" name="email" placeholder="Email" required onChange={getEmail} />
            <span className="required">Email</span>
          </label>
        </div>
        <input type="checkbox" name="show-password" className="show-password a11y-hidden" id="show-password" />
        <label className="label-show-password" htmlFor="show-password">
          <span>Show Password</span>
        </label>
        <div>
          <label className="label-password">
            <input type="text" className="text" name="password" placeholder="Password" required onChange={getPass} />
            <span className="required">Password</span>
          </label>
        </div>
        <input type="submit" value="Log In" />
        <div className="email">
          <a href="#">Forgot password?</a>
        </div>
        <figure aria-hidden="true">
          <div className="person-body"></div>
          <div className="neck skin"></div>
          <div className="head skin">
            <div className="eyes"></div>
            <div className="mouth"></div>
          </div>
          <div className="hair"></div>
          <div className="ears"></div>
          <div className="shirt-1"></div>
          <div className="shirt-2"></div>
        </figure>
      </form>
    </div>

  );
}

export default Form;
