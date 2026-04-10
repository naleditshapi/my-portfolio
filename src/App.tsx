import { useState } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { ContentProvider } from './ContentContext';
import Navbar from './Navbar';
import Footer from './components/Footer';
import Admin from './Admin';

import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Contact from './pages/Contact';

function PortfolioApp() {
  const [adminOpen, setAdminOpen] = useState(false);

  return (
    <div className="font-sans text-gray-800 min-h-screen flex flex-col">
      <Navbar onAdminTrigger={() => setAdminOpen(true)} />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
      {adminOpen && <Admin onClose={() => setAdminOpen(false)} />}
    </div>
  );
}

export default function App() {
  return (
    <ContentProvider>
      <HashRouter>
        <PortfolioApp />
      </HashRouter>
    </ContentProvider>
  );
}
