import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import Cv from './pages/Cv';
import UiUx from './pages/UiUx';
import Blog from './pages/Blog';
import Contact from './pages/Contact';

export default function App() {
  return (
    <Router>
      <div className="bg-black text-white font-mono min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow px-6 py-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cv" element={<Cv />} />
            <Route path="/ui/ux" element={<UiUx />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
