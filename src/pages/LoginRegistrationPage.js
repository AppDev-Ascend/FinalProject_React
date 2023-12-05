import React from 'react'
import Header from '../components/Header'

const LoginRegistrationPage = (currentUser) => {
  return (
    <div>
      <Header currentUser/>
      <main class="content-container">
        <div class="content-left">
        </div>
        <div class="content-right">
          <div class="register-container">
              <h1 align="center"> Sign Up </h1>
              <p align="center"> Creating an account is very simple!<br/>Start working with us now! </p>

              <form class="navbar-searchbar">
                <label> Email </label>
                <input class="form-textbox" type="text" placeholder="johndoe123@domain.com" name="search" size="55"/> <br/><br/>
                <label> Username </label>
                <input class="form-textbox" type="text" placeholder="John Doe" name="search" size="55"/> <br/><br/>
                <label> Password </label>
                <input class="form-textbox" type="text" placeholder="Enter your password." name="search" size="55"/> <br/><br/><br/><br/>
                <label> Re-enter Password </label>
                <input class="form-textbox" type="text" placeholder="Re-enter password to confirm password." name="search" size="55"/>
              </form>

              <br/><hr/>
              <p align="center"> By signing up to our services, you agree to our Terms of Service and Privacy Policy. </p>
              <button class="generic-button" type="submit"> Sign Up Now! </button>
          </div>
          <div class="login-container">
            <h1 align="center"> Sign In </h1>
            <p align="center"> Welcome back! Ready to make assessments with us? <br/> It's so good to have you back for more. </p>
            <br/>

            <form class="navbar-searchbar">
              <label> Email/Username </label>
              <input class="form-textbox" type="text" name="search" size="55"/> <br/><br/>
              <label> Password </label>
              <input class="form-textbox" type="text" name="search" size="55"/>
            </form>

            <br/><hr/>
            <p align="center"> Don't have an account yet? <a href="www.youtube.com">Sign up for free.</a> </p>
            <button class="generic-button" type="submit"> Sign In </button>
          </div>
        </div>
      </main>
    </div>
  )
}

export default LoginRegistrationPage