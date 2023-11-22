import { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import CreateAssessment from './pages/CreateAssessment';
import Header from './components/Header';


axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

const client = axios.create({
  baseUrl: "http://localhost:8000/api",
})

function App() {

  const [currentUser, setCurrentUser] = useState();
  const [registrationToggle, setRegistrationToggle] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  if (currentUser) {
    return (
      <Router>
        <div>
          <Header currentUser/>
          <NavigationButton />
          <Routes>
            <Route path="/create-assessment" element={<CreateAssessment />} />
          </Routes>
        </div>
      </Router>
    );
  } else {
    return (
      <Router>
        <div>
          <Header />
          <NavigationButton />
          <Routes>
            <Route path="/create-assessment" element={<CreateAssessment />} />
          </Routes>
        </div>
      </Router>
    );
  }
}

function NavigationButton() {
  const navigate = useNavigate();

  const navigateToCreateAssessment = () => {
    navigate('/create-assessment');
  };

  return <button onClick={navigateToCreateAssessment}>Create New Assessment</button>;
}
export default App;