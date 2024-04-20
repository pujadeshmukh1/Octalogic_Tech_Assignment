
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; // Import Routes
import Administrator from './Components/Administrator';
import Login from './Components/Login';
import AdminstratorOverview from './Components/AdminstratorOverview';
import Home from './Components/Home';
import Coures from './Components/Coures';
function App() {
  return (
    <Router>
      <Routes> {/* Wrap Route components with Routes */}
        <Route exact path="/" element={<Administrator />} />
        <Route exact path="/login" element={<Login />} />
        <Route path="/administrator" element={<AdminstratorOverview/>} />
        <Route path="/home" element={<Home />} />
        <Route path="/coures" element={<Coures />} />
      </Routes>
    </Router>
  );
}

export default App;
