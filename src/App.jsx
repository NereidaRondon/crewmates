import './app.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import CrewmateForm from './components/CrewmateForm'; // Home page
import CrewmateList from './components/CrewmateList'; // All Crew page
import EditCrewmate from './components/EditCrewmate'; // Edit page
import CrewmateDetail from './components/CrewmateDetail'; // Detail page

function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path='/' element={<CrewmateForm />} /> {/* Home page */}
        <Route path='/all-crew' element={<CrewmateList />} /> {/* All Crew page */}
        <Route path='/edit/:id' element={<EditCrewmate />} /> {/* Edit page */}
        <Route path='/crewmate/:id' element={<CrewmateDetail />} /> {/* Detail page */}
      </Routes>
    </Router>
  );
}

export default App;
