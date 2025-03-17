import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Landing from './pages/Landing';
import NotFound from './pages/NotFound';
import GalaNightPage from './pages/GalaNight';
import CoordinatorsPage from './pages/CoordinatorsPage';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="*" element={<NotFound />} />
        <Route path="galanight" element={<GalaNightPage />} />
        <Route path="coordinators" element={<CoordinatorsPage />} />
      </Routes>
    </Router>
  );
};

export default App;