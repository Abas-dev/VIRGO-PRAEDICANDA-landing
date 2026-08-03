import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { WhatsAppWidget } from './components/whatsapp-widget/index.jsx';

// Import all pages
import HomePage from './App.jsx';
import About from './pages/About.jsx';
import Academics from './pages/Academics.jsx';
import Management from './pages/Management.jsx';
import VPISPictures from './pages/VPISPictures.jsx';
import Admissions from './pages/Admissions.jsx';
import Facilities from './pages/Facilities.jsx';

const AppRouter = () => {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/academics" element={<Academics />} />
          <Route path="/management" element={<Management />} />
          <Route path="/vpis-pictures" element={<VPISPictures />} />
          <Route path="/admissions" element={<Admissions />} />
          <Route path="/facilities" element={<Facilities />} />
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