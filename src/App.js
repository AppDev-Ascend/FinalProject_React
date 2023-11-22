import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import CreateAssessment from './pages/CreateAssessment';
import Header from './components/Header';

function App() {

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

function NavigationButton() {
  const navigate = useNavigate();

  const navigateToCreateAssessment = () => {
    navigate('/create-assessment');
  };

  return <button onClick={navigateToCreateAssessment}>Create New Assessment</button>;
}
export default App;