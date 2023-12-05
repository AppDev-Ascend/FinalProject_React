import React, { useState } from 'react';
import Header from '../components/Header';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

axios.defaults.withCredentials = true;

const LoginRegistrationPage = () => {
  const [currentUser, setCurrentUser] = useState();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();

  const client = axios.create({
    baseURL: 'http://localhost:8000/api',
  });
  
  const toggleForm = () => {
    console.log('Before toggle:', isLogin);
    setIsLogin(!isLogin);
    console.log('After toggle:', !isLogin);
  };

  // Function to get the value of a cookie by name

  function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            // Does this cookie string begin with the name we want?
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
  }
    
  const csrfToken = getCookie('csrftoken'); 

  function submitRegistration(e) {
    e.preventDefault();

    client.post(
        '/register', 
        {
          email: email,
          username: username,
          password: password
        },
        {
          headers: {
            'X-CSRFToken': csrfToken
          }
        }
      )
    .then(response => {
        console.log(response);
    })
    .catch(error => {
        console.error(error);
    });

    // client.post(
    //   '/register',
    //   {
    //     email: email,
    //     username: username,
    //     password: password
    //   },
    //   {
    //     headers: {
    //       'X-CSRFToken': csrfToken,
    //     },
    //   }
    // )
    //   .then(function (response) {
    //     // Registration successful, proceed with login
    //     client.post(
    //       "/login",
    //       {
    //         email: email,
    //         password: password
    //       },
    //       {
    //         headers: {
    //           'X-CSRFToken': csrfToken,
    //         },
    //       }
    //     )
    //       .then(function (response) {
    //         // Login successful, update current user and navigate
    //         setCurrentUser(true);
    //         navigate('/viewassessmentspage');
    //       })
    //       .catch(function (error) {
    //         console.error('Error during login:', error);
    //       });
    //   })
    //   .catch(function (error) {
    //     console.error('Error during registration:', error);
    //   });
  }

  function submitLogin(e) {
    e.preventDefault();
    client.post(
      '/login',
      {
        email: email,
        password: password,
      }
    ).then(function(response) {
      setCurrentUser(true);
    });
  }

  // function submitLogout(e) {
  //   e.preventDefault();
  //   client.post(
  //     '/logout',
  //     {withCredentials: true}
  //   ).then(function(response) {
  //     setCurrentUser(false);
  //   });
  // }

  return (
    <div>
      <Header currentUser={currentUser}/>
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
                <button onClick={submitLogin} className="generic-button" type="submit"> Sign In </button>
              </form>
            </div>
          ) : (
            <div className="register-container">
              <h1 align="center"> Sign Up </h1>
              <p align="center"> Creating an account is very simple!<br/>Start working with us now! </p>

              <form className="navbar-searchbar" onSubmit={submitRegistration}>
                <label> Email </label>
                <input className="form-textbox" type="text" placeholder="johndoe123@domain.com" value={email} onChange={e => setEmail(e.target.value)} size="55"/> <br/><br/>
                <label> Username </label>
                <input className="form-textbox" type="text" placeholder="John Doe" value={username} onChange={e => setUsername(e.target.value)} size="55"/> <br/><br/>
                <label> Password </label>
                <input className="form-textbox" type="password" placeholder="Enter your password." value={password} onChange={e => setPassword(e.target.value)} size="55"/> <br/><br/>
                <label> Re-enter Password </label>
                <input className="form-textbox" type="password" placeholder="Re-enter password to confirm password." name="search" size="55"/>
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