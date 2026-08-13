import { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { WhatsAppWidget } from './components/whatsapp-widget/index.jsx';
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';

// Import all pages
import HomePage from './App.jsx';
import About from './pages/About.jsx';
import Academics from './pages/Academics.jsx';
import Management from './pages/Management.jsx';
import VPISPictures from './pages/VPISPictures.jsx';
import Admissions from './pages/Admissions.jsx';
import Facilities from './pages/Facilities.jsx';
import ProprietorMessage from './pages/ProprietorMessage.jsx';
import Careers from './pages/Careers.jsx';
import Resources from './pages/Resources.jsx';
import Blog from './pages/Blog.jsx';
import Fees from './pages/Fees.jsx';
import Accreditations from './pages/Accreditations.jsx';
import PrivacyPolicy from './pages/PrivacyPolicy.jsx';
import TermsOfUse from './pages/TermsOfUse.jsx';
import SafeguardingPolicy from './pages/SafeguardingPolicy.jsx';

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
    <Footer />
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
          <Route path="/careers" element={<Careers />} />
          <Route path="/resources" element={<Resources />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/news" element={<Blog />} />
          <Route path="/fees" element={<Fees />} />
          <Route path="/accreditations" element={<Accreditations />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-use" element={<TermsOfUse />} />
          <Route path="/safeguarding-policy" element={<SafeguardingPolicy />} />
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
