import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-container">
        {/* About Section */}
        <div className="footer-section">
          <div className="footer-brand">
            <img src="/assets/images/logo.png" alt="VPIS Logo" className="footer-logo" />
            <h3>Virgo Praedicanda International School</h3>
            <p className="footer-tagline">Raising Lights for the World</p>
          </div>
          <p className="footer-description">
            An independent Christian school committed to inspiring and nurturing 
            excellent children for global impact through academic excellence, 
            Christian character, and faith in God.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/academics">Academics</Link></li>
            <li><Link to="/admissions">Admissions</Link></li>
            <li><Link to="/facilities">Facilities</Link></li>
            <li><Link to="/management">Leadership Team</Link></li>
            <li><Link to="/proprietor-message">Proprietor's Message</Link></li>
          </ul>
        </div>

        {/* Resources */}
        <div className="footer-section">
          <h4>Resources</h4>
          <ul className="footer-links">
            <li><Link to="/vpis-pictures">Gallery</Link></li>
            <li><Link to="/blog">News & Blog</Link></li>
            <li><Link to="/resources">Downloads & Resources</Link></li>
            <li><Link to="/careers">Careers</Link></li>
            <li><Link to="/fees">Fees & Payment</Link></li>
            <li><Link to="/accreditations">Accreditations</Link></li>
            <li><a href="/#faq">FAQ</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h4>Contact Us</h4>
          <div className="footer-contact">
            <p>
              <strong>Campus 1 (Woji):</strong><br />
              No 9 Marina Close, Woji<br />
              Port Harcourt, Rivers State, Nigeria
            </p>
            <p>
              <strong>Campus 2 (Chinda):</strong><br />
              No 100 Chinda, Ada George<br />
              Port Harcourt, Rivers State, Nigeria
            </p>
            <p>
              <strong>Phone:</strong> <a href="tel:+2349132554783">+234 913 255 4783</a>
            </p>
            <p>
              <strong>Email:</strong><br />
              <a href="mailto:Virgopraedicandaintschool@gmail.com">Virgopraedicandaintschool@gmail.com</a>
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-bottom-container">
          <p>&copy; {new Date().getFullYear()} Virgo Praedicanda International School. All rights reserved.</p>
          <div className="footer-legal-links">
            <Link to="/privacy-policy">Privacy Policy</Link>
            <span className="separator">|</span>
            <Link to="/terms-of-use">Terms of Use</Link>
            <span className="separator">|</span>
            <Link to="/safeguarding-policy">Child Safeguarding</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
