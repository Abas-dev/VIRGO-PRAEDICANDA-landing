import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTASection from '../components/CTASection';

const Careers = () => {
  return (
    <div className="careers-page">
      <Navbar />
      
      {/* Hero */}
      <div className="about-hero">
        <div className="hero-label">Join Our Team</div>
        <h1 className="hero-title">Careers at VPIS</h1>
        <p className="hero-tagline">Be part of a team that's raising lights for the world</p>
      </div>

      <div className="page">
        {/* Why Join Us */}
        <div className="careers-intro">
          <p className="section-label">Why Work With Us</p>
          <h2 className="section-heading">Join the VPIS Family</h2>
          <p>
            At Virgo Praedicanda International School, we're more than just a school—we're a 
            community of passionate educators dedicated to inspiring and nurturing excellent 
            children for global impact.
          </p>
          <p>
            We're looking for talented, committed professionals who share our vision of academic 
            excellence rooted in Christian character and faith.
          </p>
        </div>

        {/* What We Offer */}
        <div className="benefits-section">
          <h3>What We Offer</h3>
          <div className="benefits-grid">
            <div className="benefit-card">
              <h4>Professional Development</h4>
              <p>Continuous training and growth opportunities for all staff members</p>
            </div>
            <div className="benefit-card">
              <h4>Collaborative Environment</h4>
              <p>Work with a dedicated team of professionals who are passionate about education</p>
            </div>
            <div className="benefit-card">
              <h4>Competitive Compensation</h4>
              <p>Attractive salary packages and benefits for qualified candidates</p>
            </div>
            <div className="benefit-card">
              <h4>Meaningful Impact</h4>
              <p>Make a real difference in the lives of children and their families</p>
            </div>
          </div>
        </div>

        {/* Current Opportunities */}
        <div className="opportunities-section">
          <p className="section-label">Open Positions</p>
          <h2 className="section-heading">Current Opportunities</h2>
          
          <div className="opportunities-notice">
            <p>
              We are always looking for passionate, qualified educators and support staff to 
              join our team. If you're interested in joining VPIS, we'd love to hear from you.
            </p>
            <p>
              <strong>Teaching positions we typically recruit for include:</strong>
            </p>
            <ul className="prose-list">
              <li>Early Years / Nursery Teachers</li>
              <li>Primary School Teachers</li>
              <li>Secondary School Subject Teachers (Sciences, Mathematics, English, etc.)</li>
              <li>ICT / Computer Science Teachers</li>
              <li>Music & Arts Teachers</li>
              <li>Physical Education Teachers</li>
            </ul>
            <p>
              <strong>Support staff positions include:</strong>
            </p>
            <ul className="prose-list">
              <li>Administrative Staff</li>
              <li>Library Staff</li>
              <li>Laboratory Technicians</li>
              <li>Maintenance Staff</li>
              <li>Security Personnel</li>
            </ul>
          </div>
        </div>

        {/* How to Apply */}
        <div className="apply-section">
          <p className="section-label">Apply Now</p>
          <h2 className="section-heading">How to Apply</h2>
          
          <div className="resources-cta">
            <h3>Submit Your Application</h3>
            <p>
              To express your interest in joining the VPIS team, send your CV and cover letter to our recruitment email:
              <br /><a href="mailto:Virgopraedicandaintschool@gmail.com" style={{color:'#fff', display:'block', marginTop:'0.5rem', fontWeight:'600'}}>Virgopraedicandaintschool@gmail.com</a>
            </p>
            <div className="cta-buttons">
              <a href="tel:+2349132554783" className="btn-primary">
                Call +234 913 255 4783
              </a>
              <a
                href="https://wa.me/2349132554783?text=Hello!%20I%27m%20interested%20in%20career%20opportunities%20at%20VPIS."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </div>

      <CTASection
        heading="Join the VPIS Family"
        subtext="Send us your CV and cover letter — we'd love to hear from you."
        applyLabel="Apply Now"
        tourLabel="Book a School Tour"
      />
      <Footer />
    </div>
  );
};

export default Careers;