import React, { useState } from 'react';
import Header from '../components/Header';

const LoginRegistrationPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    console.log('Before toggle:', isLogin);
    setIsLogin(!isLogin);
    console.log('After toggle:', !isLogin);
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // handle form submission here
  };

  return (
    <div>
      <Header/>
      <main className="content-container">
        <div className="content-left">
        </div>
        <div className="content-right">
          {isLogin ? (
            <div className="login-container">
              <h1 align="center"> Sign In </h1>
              <p align="center"> Welcome back! Ready to make assessments with us? <br/> It's so good to have you back for more. </p>
              <br/>

              <form className="navbar-searchbar">
                <label> Email/Username </label>
                <input className="form-textbox" type="text" name="search" size="55"/> <br/><br/>
                <label> Password </label>
                <input className="form-textbox" type="text" name="search" size="55"/>
                <br/><hr/>
                <p align="center"> Don't have an account yet? <button onClick={toggleForm}>Sign up for free.</button> </p>
                <button className="generic-button" type="submit"> Sign In </button>
              </form>
            </div>
          ) : (
            <div className="register-container">
              <h1 align="center"> Sign Up </h1>
              <p align="center"> Creating an account is very simple!<br/>Start working with us now! </p>

              <form className="navbar-searchbar">
                <label> Email </label>
                <input className="form-textbox" type="text" placeholder="johndoe123@domain.com" name="search" size="55"/> <br/><br/>
                <label> Username </label>
                <input className="form-textbox" type="text" placeholder="John Doe" name="search" size="55"/> <br/><br/>
                <label> Password </label>
                <input className="form-textbox" type="text" placeholder="Enter your password." name="search" size="55"/> <br/><br/>
                <label> Re-enter Password </label>
                <input className="form-textbox" type="text" placeholder="Re-enter password to confirm password." name="search" size="55"/>
                <br/><hr/>
                <p align="center"> By signing up to our services, you agree to our Terms of Service and Privacy Policy. </p>
                <button className="generic-button" type="submit"> Sign Up Now! </button>
              </form>
            </div>
          )}
        </div>
      </main>
    </div>
  )
}

export default LoginRegistrationPage