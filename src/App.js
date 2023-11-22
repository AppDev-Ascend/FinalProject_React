import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import CreateAssessment from './pages/CreateAssessment';
import Header from './components/Header';

function App() {
  const navigate = useNavigate();

  const navigateToCreateAssessment = () => {
    navigate('/create-assessment');
  };

  return (
    <Router>
      <div>
        <Header />
        <button onClick={navigateToCreateAssessment}>Create New Assessment</button>
        <Routes> {/* Change Switch to Routes */}
          <Route path="/create-assessment" element={<CreateAssessment />} /> {/* Change component to element */}
          {/* Add more routes as needed */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;