import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTASection from '../components/CTASection';

const Admissions = () => {
  const admissionSteps = [
    {
      number: "01",
      title: "Enquiry",
      description: "Submit an enquiry form or visit our admissions office to get started."
    },
    {
      number: "02",
      title: "Application",
      description: "Complete the application form and pay the application fee."
    },
    {
      number: "03",
      title: "Assessment",
      description: "Attend an entrance assessment/interview for your child and parents."
    },
    {
      number: "04",
      title: "Offer",
      description: "Successful candidates receive an official admission letter."
    },
    {
      number: "05",
      title: "Acceptance",
      description: "Pay the acceptance and tuition fees to secure your child's place."
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

  const requiredDocuments = [
    "Birth Certificate",
    "Last 2 years' school report",
    "Passport photographs",
    "Medical report"
  ];

  return (
    <div className="admissions-page">
      <Navbar />

      {/* Hero */}
      <div className="admissions-hero">
        <div className="hero-label">Join Our Community</div>
        <h1 className="hero-title">Admissions</h1>
        <p className="hero-tagline">Join the VPIS Family</p>
      </div>

      <div className="page">
        {/* Intro */}
        <div className="admissions-intro-section">
          <p>
            Thank you for considering Virgo Praedicanda International School for your child.
            We welcome applications from families who share our commitment to excellence,
            character, and faith.
          </p>
        </div>

        {/* Who Can Apply */}
        <div className="eligibility-section" id="eligibility">
          <p className="section-label">Who Can Apply</p>
          <h2 className="section-heading">Where They Belong</h2>
          <p className="section-intro">
            We offer admission into Creche, Nursery, Primary, and Secondary School.
            Entry is based on assessment and availability of space.
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

        {/* Admissions Process */}
        <div className="process-section" id="process">
          <p className="section-label">How to Apply</p>
          <h2 className="section-heading">Admission Process</h2>
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

        {/* Required Documents */}
        <div className="documents-section" id="documents">
          <p className="section-label">Application Materials</p>
          <h2 className="section-heading">Required Documents</h2>
          <p className="section-intro">
            Please have the following documents ready when you apply
          </p>

          <ul className="documents-list">
            {requiredDocuments.map((doc, index) => (
              <li key={index} className="document-item">
                <span className="document-check">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </span>
                {doc}
              </li>
            ))}
          </ul>
        </div>

        {/* Tuition & Fees */}
        <div className="fees-section" id="fees">
          <p className="section-label">Investing In Your Child</p>
          <h2 className="section-heading">Tuition &amp; Fees</h2>
          <p className="section-intro">
            We offer transparent and value-driven fees. Fees cover tuition, exams, and core resources.
          </p>

          <div className="fees-card">
            <p>Contact admissions for the current fee schedule and payment plans.</p>
            <a href="tel:+2349132554783" className="contact-btn primary">
              Call +234 913 255 4783
            </a>
          </div>
        </div>

        {/* Scholarships */}
        <div className="scholarships-section" id="scholarships">
          <p className="section-label">Recognising Excellence</p>
          <h2 className="section-heading">Scholarships</h2>
          <p className="section-intro">
            Academic excellence scholarships are available for outstanding students
            and for indigent children through Christopher Dimnwobi memorial foundation.
          </p>
        </div>

        {/* Key Dates */}
        <div className="key-dates-section" id="key-dates">
          <p className="section-label">Mark Your Calendar</p>
          <h2 className="section-heading">Key Dates</h2>
          <div className="key-dates-card">
            <p>Applications for the 2026/2027 Session are now open.</p>
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
            <div className="admissions-cta-buttons">
              <a href="/assets/files/admission form.pdf" download className="download-btn">
                Download Application Form
              </a>
              <a href="/admissions" className="download-btn download-btn-outline">
                Apply Online
              </a>
              <a
                href="https://wa.me/2349132554783?text=Hello!%20I%27d%20like%20to%20book%20a%20school%20tour."
                className="download-btn download-btn-outline"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a Tour
              </a>
            </div>
          </div>
        </div>

        {/* Contact for Admissions */}
        <div className="contact-section" id="contact">
          <p className="section-label">Get Started</p>
          <h2 className="section-heading">Begin Your Journey</h2>

          <div className="contact-card">
            <div className="contact-content">
              <h3>Ready to Join VPIS?</h3>
              <p>Have questions? Chat with our admissions team to begin your child's journey with us.</p>
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

      <CTASection />
      <Footer />
    </div>
  );
};

export default Admissions;
