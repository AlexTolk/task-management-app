import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import AdminPanel from './pages/AdminPanel';
import ActiveSprint from './pages/ActiveSprint';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sprint" element={<ActiveSprint />} />
          <Route path='/admin' element={<AdminPanel />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
