import Navbar from '../components/Navbar';

const Fees = () => {
  return (
    <div className="fees-page">
      <Navbar />
      
      {/* Hero */}
      <div className="about-hero">
        <div className="hero-label">Tuition Information</div>
        <h1 className="hero-title">Fees & Payment</h1>
        <p className="hero-tagline">Investment in your child's future</p>
      </div>

      <div className="page">
        {/* Intro */}
        <div className="fees-intro">
          <p className="section-label">Tuition Structure</p>
          <h2 className="section-heading">School Fees</h2>
          <p>
            At Virgo Praedicanda International School, we provide world-class education that 
            prepares students for global success. Our fee structure is designed to reflect the 
            quality of education and facilities we provide while remaining accessible to families 
            who share our vision.
          </p>
        </div>

        {/* Fee Information Card */}
        <div className="fees-info-card">
          <div className="fees-notice">
            <svg className="notice-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"/>
              <line x1="12" y1="16" x2="12" y2="12"/>
              <line x1="12" y1="8" x2="12.01" y2="8"/>
            </svg>
            <div className="notice-content">
              <h3>Fees Depend on Class Level</h3>
              <p>
                Our tuition fees vary based on the class level of your child, from Creche through 
                Secondary School. Each level is priced to reflect the specific resources, curriculum, 
                and support provided.
              </p>
            </div>
          </div>

          <div className="fees-contact-info">
            <h4>For Current Fee Structure</h4>
            <p>
              Please contact our admissions office directly for detailed information about:
            </p>
            <ul className="prose-list">
              <li>Current tuition fees for each class level</li>
              <li>Payment plans and installment options</li>
              <li>Additional fees (uniforms, books, activities)</li>
              <li>Scholarship opportunities for outstanding students</li>
              <li>Sibling discounts (where applicable)</li>
            </ul>
          </div>
        </div>

        {/* What's Included */}
        <div className="fees-included-section">
          <p className="section-label">Value for Investment</p>
          <h2 className="section-heading">What's Included</h2>
          <p>
            VPIS tuition provides comprehensive education and access to world-class facilities:
          </p>

          <div className="included-grid">
            <div className="included-card">
              <h4>Dual Curriculum</h4>
              <p>Pearson Edexcel iPrimary and Cambridge International programs</p>
            </div>
            <div className="included-card">
              <h4>Examination Preparation</h4>
              <p>WAEC, SAT, and IELTS preparation and registration</p>
            </div>
            <div className="included-card">
              <h4>Expert Faculty</h4>
              <p>Highly qualified and experienced teachers</p>
            </div>
            <div className="included-card">
              <h4>Modern Facilities</h4>
              <p>Science labs, ICT lab, library, Montessori lab, and more</p>
            </div>
            <div className="included-card">
              <h4>Character Development</h4>
              <p>Chapel services, leadership training, and moral education</p>
            </div>
            <div className="included-card">
              <h4>Co-Curricular Activities</h4>
              <p>Sports, music, arts, clubs, and enrichment programs</p>
            </div>
          </div>
        </div>

        {/* Payment Options */}
        <div className="payment-section">
          <p className="section-label">Flexible Options</p>
          <h2 className="section-heading">Payment Plans</h2>
          <p>
            We understand that families have different financial situations. Our admissions office 
            can discuss payment plans and options that work for your family.
          </p>
          <p>
            <strong>Contact us to learn more about:</strong>
          </p>
          <ul className="prose-list">
            <li>Termly payment plans</li>
            <li>Annual payment options</li>
            <li>Academic scholarships for excellence</li>
            <li>Early payment benefits</li>
          </ul>
        </div>

        {/* Contact CTA */}
        <div className="fees-cta">
          <h3>Ready to Learn More?</h3>
          <p>
            Contact our admissions office for the current fee schedule and to discuss payment 
            options for your family.
          </p>
          <div className="cta-buttons">
            <a href="tel:+2349132554783" className="btn-primary">
              Call +234 913 255 4783
            </a>
            <a 
              href="https://wa.me/2349132554783?text=Hello!%20I%27d%20like%20to%20inquire%20about%20school%20fees." 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              WhatsApp Us
            </a>
          </div>
          <div className="cta-note">
            <p>
              You can also email us at: 
              <a href="mailto:Virgopraedicandaintschool@gmail.com">Virgopraedicandaintschool@gmail.com</a>
            </p>
          </div>
        </div>
      </div>

      <footer className="page-footer">
        <p>&copy; {new Date().getFullYear()} Virgo Praedicanda International School. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Fees;
