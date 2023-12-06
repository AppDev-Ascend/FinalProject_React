import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CreateAssessment from './pages/CreateAssessment';
import AddLessonPage from './pages/AddLessonPage';
import AddAssessmentSettingsPage from './pages/AddAssessmentSettingsPage';
import HomePage from './pages/HomePage';
import DashboardPage from './pages/DashboardPage';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header/>
      {/* <main>
        <Link to="/">Home</Link>
        <Link to="/login-registration">Login/Registration</Link>
        <Link to="/create-assessment">Create Assessment</Link>
        <Link to="/add-lesson">Add Lesson</Link>
        <Link to="/add-assessment-settings">Add Assessment Settings</Link>
        <Link to="/view-assessments">View Assessments</Link>
      </main> */}
      <div>
        <Routes>
          {/* <Route path="/" exact element={<HomePage />} /> */}
          <Route path="/" element={<HomePage />} />
          <Route path="/create-assessment" element={<CreateAssessment />} />
          <Route path="/add-lesson" element={<AddLessonPage />} />
          <Route path="/add-assessment-settings" element={<AddAssessmentSettingsPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;