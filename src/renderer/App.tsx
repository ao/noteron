import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Wrapper from './components/Wrapper';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Wrapper />} />
      </Routes>
    </Router>
  );
}
