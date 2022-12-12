import React from 'react';
import './Login.css';
import { app, auth } from '../../firebase';
import { useNavigate } from 'react-router-dom';
import {
  getAuth,
  signInWithPhoneNumber,
  RecaptchaVerifier,
} from 'firebase/auth';

export default function Login() {
  let navigate = useNavigate();
  function handleChange(e) {
    const { name, value } = e.target;
    // this.setState({
    //   [name]: value,
    // });
  }
  function configureCaptcha() {
    auth.languageCode = 'in';
    window.recaptchaVerifier = new RecaptchaVerifier(
      'sign-in-button',
      {
        size: 'invisible',
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          onSignInSubmit();
        },
      },
      auth
    );
  }

  function onSignInSubmit(e) {
    e.preventDefault();
    configureCaptcha();
    //const phoneNumber = '+91' + state.mobile;
    const phoneNumber = '+918971044793';
    console.log(phoneNumber);
    const appVerifier = window.recaptchaVerifier;

    signInWithPhoneNumber(auth, phoneNumber, appVerifier)
      .then((confirmationResult) => {
        // SMS sent. Prompt user to type the code from the message, then sign the
        // user in with confirmationResult.confirm(code).
        window.confirmationResult = confirmationResult;
        console.log('OTP has been sent');
        // ...
      })
      .catch((error) => {
        // Error; SMS not sent
        // ...
        console.log('SMS not sent');
      });
  }
  function onSubmitOTP(e) {
    e.preventDefault();
    //const code = this.state.otp;
    const code = '123456';
    console.log(code);
    confirmationResult
      .confirm(code)
      .then((result) => {
        // User signed in successfully.
        const user = result.user;
        navigate('/dashboard');
        console.log('logged in');
      })
      .catch((error) => {
        // User couldn't sign in (bad verification code?)
      });
  }

  return (
    <div class="auth-container">
      <div class="container auth-form">
        <h2>Login Form</h2>
        <form onSubmit={onSignInSubmit}>
          <div id="sign-in-button"></div>
          <input
            type="number"
            name="mobile"
            placeholder="Mobile number"
            required
            onChange={handleChange}
          />
          <button type="submit">Send OTP</button>
        </form>

        <h6>Enter OTP</h6>
        <form onSubmit={onSubmitOTP}>
          <input
            type="number"
            name="otp"
            placeholder="OTP Number"
            required
            onChange={handleChange}
          />
          <button type="submit">Log In</button>
        </form>
      </div>
    </div>
  );
}
