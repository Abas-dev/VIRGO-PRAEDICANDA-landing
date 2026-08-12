import Navbar from '../components/Navbar';

const Admissions = () => {
  const admissionSteps = [
    {
      number: "01",
      title: "Enquire",
      description: "Enquire via phone or WhatsApp for a prospectus and school tour."
    },
    {
      number: "02", 
      title: "Schedule a Visit",
      description: "Schedule a visit — see the Science Lab, ICT Lab and classrooms in person."
    },
    {
      number: "03",
      title: "Complete Registration", 
      description: "Complete registration and an age-appropriate assessment where applicable."
    },
    {
      number: "04",
      title: "Receive Confirmation",
      description: "Receive confirmation and welcome pack ahead of resumption."
    }
  ];

  const classLevels = [
    {
      title: "Creche",
      ageRange: "From six weeks of age",
      description: "Nurturing care and early development in a safe, loving environment for our youngest learners."
    },
    {
      title: "Nursery",
      ageRange: "The Angels · Pacesetters", 
      description: "Foundation learning through play-based activities that develop social, emotional, and cognitive skills."
    },
    {
      title: "Primary",
      ageRange: "Pearls, Sapphire, Topaz, Ruby, Diamond",
      description: "Comprehensive education building strong academic foundations with character development."
    },
    {
      title: "Secondary",
      ageRange: "Chinda Campus · now also at Woji",
      description: "Advanced learning preparing students for local and international examinations."
    }
  ];

  return (
    <div className="admissions-page">
      <Navbar />
      
      {/* Hero */}
      <div className="admissions-hero">
        <div className="hero-label">Join Our Community</div>
        <h1 className="hero-title">Admissions</h1>
        <p className="hero-tagline">Join our community of future global leaders</p>
      </div>

      <div className="page">
        {/* Admissions Process */}
        <div className="process-section" id="process">
          <p className="section-label">How to Apply</p>
          <h2 className="section-heading">Admissions Process</h2>
          <p className="section-intro">
            Follow these simple steps to join our school community
          </p>

          <div className="admissions-steps">
            {admissionSteps.map((step, index) => (
              <div key={index} className="admission-step">
                <div className="step-number">{step.number}</div>
                <div className="step-content">
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Classes and Age Groups */}
        <div className="classes-section" id="classes">
          <p className="section-label">Where They Belong</p>
          <h2 className="section-heading">Classes And Age Group</h2>
          <p className="section-intro">
            Quality education for every stage of your child's development
          </p>

          <div className="classes-grid">
            {classLevels.map((level, index) => (
              <div key={index} className="class-card">
                <h3>{level.title}</h3>
                <p className="age-range">{level.ageRange}</p>
                <p>{level.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Download Admission Form */}
        <div className="download-section" id="download">
          <p className="section-label">Application Materials</p>
          <h2 className="section-heading">Download Admission Form</h2>
          <p className="section-intro">
            Download our admission form to begin your application process
          </p>

          <div className="download-card">
            <div className="download-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                <polyline points="14 2 14 8 20 8"/>
                <line x1="12" y1="18" x2="12" y2="12"/>
                <line x1="9" y1="15" x2="12" y2="18"/>
                <line x1="15" y1="15" x2="12" y2="18"/>
              </svg>
            </div>
            <h3>VPIS Admission Form</h3>
            <p>Complete this form to apply for admission to Virgo Praedicanda International School</p>
            <a href="/assets/files/admission form.pdf" download className="download-btn">
              Download Admission Form (PDF)
            </a>
          </div>
        </div>

        {/* Contact for Admissions */}
        <div className="contact-section" id="contact">
          <p className="section-label">Get Started</p>
          <h2 className="section-heading">Begin Your Journey</h2>

          <div className="contact-card">
            <div className="contact-content">
              <h3>Ready to Join VPIS?</h3>
              <p>Contact our admissions team to begin your child's journey with us.</p>
              <div className="contact-methods">
                <a href="tel:+2349132554783" className="contact-btn primary">
                  Call +234 913 255 4783
                </a>
                <a href="https://wa.me/2349132554783" target="_blank" rel="noopener noreferrer" className="contact-btn secondary">
                  WhatsApp Us
                </a>
              </div>
            </div>
            <div className="contact-image">
              <img src="/assets/images/students.jpeg" alt="Happy students" loading="lazy" decoding="async" />
            </div>
          </div>
        </div>
      </div>

      <footer className="page-footer">
        <p>
          &copy; {new Date().getFullYear()} Virgo Praedicanda International School. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Admissions;