import React from 'react';
import firebase from '../../firebase';

export default function Login() {
  function handleChange(e) {
    const { name, value } = e.target;
    // this.setState({
    //   [name]: value,
    // });
  }
  function configureCaptcha() {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
      'sign-in-button',
      {
        size: 'invisible',
        callback: (response) => {
          // reCAPTCHA solved, allow signInWithPhoneNumber.
          onSignInSubmit();
          console.log('recaptcha verified');
        },
        defaultCountry: 'IN',
      }
    );
  }
  function onSignInSubmit(e) {
    e.preventDefault();
    configureCaptcha();
    const phoneNumber = '+91' + this.state.mobile;
    console.log(phoneNumber);
    const appVerifier = window.recaptchaVerifier;
    firebase
      .auth()
      .signInWithPhoneNumber(phoneNumber, appVerifier)
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
    const code = this.state.otp;
    console.log(code);
    window.confirmationResult
      .confirm(code)
      .then((result) => {
        // User signed in successfully.
        const user = result.user;
        console.log(JSON.stringify(user));
        alert('User is verified');
        // ...
      })
      .catch((error) => {
        // User couldn't sign in (bad verification code?)
        // ...
      });
  }

  return (
    <div>
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
        <button type="submit">Submit</button>
      </form>

      <h2>Enter OTP</h2>
      <form onSubmit={onSubmitOTP}>
        <input
          type="number"
          name="otp"
          placeholder="OTP Number"
          required
          onChange={handleChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}