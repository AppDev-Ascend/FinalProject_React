import { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Link, Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import CreateAssessment from './pages/CreateAssessment';
import HomePage from './pages/HomePage';
import AddLessonPage from './pages/AddLessonPage';
import AddAssessmentSettingsPage from './pages/AddAssessmentSettingsPage';
import LoginRegistrationPage from './pages/LoginRegistrationPage';
import ViewAssessmentsPage from './pages/ViewAssessmentsPage';
import Header from './components/Header';

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';
axios.defaults.withCredentials = true;

// HTML code for the login, registration, home, dashboard, navbar 

const client = axios.create({
  baseUrl: "http://localhost:8000/api",
})

function App() {

  const [currentUser, setCurrentUser] = useState();
  const [registrationToggle, setRegistrationToggle] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  return (
    <Router>
      <Header currentUser/>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/login-registration">Login/Registration</Link>
        <Link to="/create-assessment">Create Assessment</Link>
        <Link to="/add-lesson">Add Lesson</Link>
        <Link to="/add-assessment-settings">Add Assessment Settings</Link>
        <Link to="/view-assessments">View Assessments</Link>
      </nav>
      <div>
        <Routes>
          <Route path="/" exact element={<HomePage />} />
          <Route path="/login-registration" element={<LoginRegistrationPage currentUser/>} />
          <Route path="/create-assessment" element={<CreateAssessment />} />
          <Route path="/add-lesson" element={<AddLessonPage />} />
          <Route path="/add-assessment-settings" element={<AddAssessmentSettingsPage />} />
          <Route path="/view-assessments" element={<ViewAssessmentsPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;