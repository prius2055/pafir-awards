import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Nominate from './pages/Nominate';
import ConfirmationPage from './pages/ConfirmationPage';
import SuccessPage from './pages/SuccessPage';
import Admin from './pages/admin/Admin';

import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nominate" element={<Nominate />} />
        <Route path="/confirmation" element={<ConfirmationPage />} />
        <Route path="/success" element={<SuccessPage />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;

