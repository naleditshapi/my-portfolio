// src/App.tsx
import { useState, lazy, Suspense } from 'react';
import { HashRouter, Routes, Route } from 'react-router-dom';
import { ContentProvider } from './context/ContentContext';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Admin from './Admin';

// Eagerly loaded — Navbar and Footer appear on every page,
// so they must be ready instantly. Never lazy load layout components.

// Lazily loaded — each page becomes its own separate JS chunk.
// Vite sees the dynamic import() and splits the bundle automatically.
const Home = lazy(() => import('./pages/Home'));
const About = lazy(() => import('./pages/About'));
const Projects = lazy(() => import('./pages/Projects'));
const Blog = lazy(() => import('./pages/Blog'));
const BlogPost = lazy(() => import('./pages/BlogPost'));
const Contact = lazy(() => import('./pages/Contact'));

// A simple loading fallback shown while a page chunk downloads.
// In Step 5 we can make this a proper skeleton screen.
function PageLoader() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="flex flex-col items-center gap-3">
        <div className="w-8 h-8 rounded-full border-2 border-burgundy-200 border-t-burgundy-800 animate-spin" />
        <span className="text-sm text-gray-400">Loading…</span>
      </div>
    </div>
  );
}

function PortfolioApp() {
  const [adminOpen, setAdminOpen] = useState(false);

  return (
    <div className="font-sans text-gray-800 min-h-screen flex flex-col">
      <Navbar onAdminTrigger={() => setAdminOpen(true)} />
      <main className="flex-1">
        {/*
          Suspense wraps all routes. When a lazy chunk is downloading,
          React shows <PageLoader /> instead of a blank screen.
          The boundary is at the route level — the Navbar stays visible.
        */}
        <Suspense fallback={<PageLoader />}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Home />} />
          </Routes>
        </Suspense>
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