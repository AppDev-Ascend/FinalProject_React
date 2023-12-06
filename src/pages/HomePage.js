import React, { useState } from 'react';
import Header from '../components/Header';
import { useNavigate } from 'react-router-dom';

const HomePage = ({client}) => {
  const [currentUser, setCurrentUser] = useState();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [toggleLogin, setToggleLogin] = useState(true);
  const navigate = useNavigate();
  
  const toggleForm = () => {
    console.log('Before toggle:', toggleLogin);
    setToggleLogin(!toggleLogin);
    console.log('After toggle:', !toggleLogin);
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
          'X-CSRFToken': csrfToken,
        },
      }
    )
      .then(function (response) {
        client.post(
          "/login",
          {
            email: email,
            password: password
          },
          {
            headers: {
              'X-CSRFToken': csrfToken,
            },
            withCredentials: true,
          }
        )
        .then(function (response) {
          const user = response.data;
          console.log(user);  // Logs the user data
          setCurrentUser({
            user_id: response.data.user_id,
            username: response.data.username,
          });
  
          // Store user details in local storage
          localStorage.setItem('currentUser', JSON.stringify({
            user_id: response.data.user_id,
            username: response.data.username,
          }));
  
          navigate('/dashboard');
        })
        .catch(function (error) {
          console.error('Error during login:', error);
        });
      })
      .catch(function (error) {
        console.error('Error during registration:', error);
      });
  }
  
  function submitLogin(e) {
    e.preventDefault();
    client.post(
      "/login",
      {
        email: email,
        password: password
      },
      {
        headers: {
          'X-CSRFToken': csrfToken,
        },
        withCredentials: true,
      })
    .then(function (response) {
      const user = response.data;
      console.log(user);  // Logs the user data
      setCurrentUser({
        user_id: response.data.user_id,
        username: response.data.username,
      });
  
      // Store user details in local storage
      localStorage.setItem('currentUser', JSON.stringify({
        user_id: response.data.user_id,
        username: response.data.username,
      }));
  
      navigate('/dashboard');
    })
    .catch(function (error) {
      console.error('Error during login:', error);
    });
  }

  return (
    <div>
      <Header currentUser={currentUser}/>
      <main className="content-container">
        <div className="content-left">
        </div>
        <div className="content-right">
          {toggleLogin ? (
            <div className="login-container">
              <h1 align="center"> Sign In </h1>
              <p align="center"> Welcome back! Ready to make assessments with us? <br/> It's so good to have you back for more. </p>
              <br/>

              <form className="navbar-searchbar">
                <label> Email </label>
                <input 
                  className="form-textbox" 
                  type="text" 
                  name="username" 
                  size="55"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                /> 
                <br/><br/>
                <label> Password </label>
                <input 
                  className="form-textbox" 
                  type="password"
                  name="password" 
                  size="55"
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
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

export default HomePage