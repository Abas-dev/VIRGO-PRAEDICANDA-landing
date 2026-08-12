import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { WhatsAppWidget } from './components/whatsapp-widget/index.jsx';
import Navbar from './components/Navbar.jsx';

// Import all pages
import HomePage from './App.jsx';
import About from './pages/About.jsx';
import Academics from './pages/Academics.jsx';
import Management from './pages/Management.jsx';
import VPISPictures from './pages/VPISPictures.jsx';
import Admissions from './pages/Admissions.jsx';
import Facilities from './pages/Facilities.jsx';
import ProprietorMessage from './pages/ProprietorMessage.jsx';
import FAQ from './pages/FAQ.jsx';

/* Scroll to top (or to hash target) on route change, and re-collect
   AOS elements so animations work after client-side navigation. */
const ScrollManager = () => {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const target = document.querySelector(hash);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        window.scrollTo(0, 0);
      }
    } else {
      window.scrollTo(0, 0);
    }
    // Newly mounted pages need AOS to re-scan the DOM
    AOS.refreshHard();
  }, [pathname, hash]);

  return null;
};

/* 404 fallback for unknown URLs */
const NotFound = () => (
  <div className="about-page">
    <Navbar />
    <div className="about-hero">
      <div className="hero-label">Error 404</div>
      <h1 className="hero-title">Page Not Found</h1>
      <p className="hero-tagline">
        Sorry, the page you are looking for does not exist or has been moved.
      </p>
    </div>
    <div className="page" style={{ textAlign: 'center', padding: '2rem 1rem' }}>
      <Link to="/" className="back-link">&larr; Back to Home</Link>
    </div>
    <footer className="page-footer">
      <p>&copy; {new Date().getFullYear()} Virgo Praedicanda International School. All rights reserved.</p>
    </footer>
  </div>
);

const AppRouter = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 100 });
  }, []);

  return (
    <Router>
      <div className="app">
        <ScrollManager />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/management" element={<Management />} />
          <Route path="/proprietor-message" element={<ProprietorMessage />} />
          <Route path="/vpis-pictures" element={<VPISPictures />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/facilities" element={<Facilities />} />
          <Route path="/faq" element={<FAQ />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        {/* WhatsApp Widget on all pages */}
        <WhatsAppWidget
          phoneNumber="2349132554783"
          companyName="VPIS Admissions"
          message="Hello! 👋🏼 How can we help you with information about Virgo Praedicanda International School?"
          replyTimeText="Typically replies within a few hours"
          sendButtonText="Send Message"
          inputPlaceHolder="Type your message here..."
          position="right"
        />
      </div>
    </Router>
  );
};

export default AppRouter;
