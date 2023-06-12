import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/home';
import Cesar from './pages/cesar';
import Footer from '../src/components/footer';
import DarkModeToggle from "./components/DarkModeToggle";
import Compteur from "./pages/compteur";

function App() {
  return (
    <>
    <DarkModeToggle />
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cesar" element={<Cesar />} />
        <Route path="/compteur" element={<Compteur />} />
      </Routes>
    </Router>
    <Footer />
    </>
  );
}

export default App;
