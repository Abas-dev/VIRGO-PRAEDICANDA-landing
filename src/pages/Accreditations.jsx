import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTASection from '../components/CTASection';

/* ── Accreditation Badges Section ──────────────────────────────────────── */
const accreditationBadges = [
  {
    src: "/assets/images/rivers.jpeg",
    alt: "Rivers State Ministry of Education",
    aos: "fade-right",
  },
  {
    src: "/assets/images/af.png",
    alt: "alliance Franciase",
    aos: "fade-down",
  },
];

const AccreditationBadges = () => (
  <section className="accreditation-section">
    <div className="container">
      <p
        className="accreditation-label"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        Also Accredited by:
      </p>
      <div
        className="accreditation-badge"
        data-aos="zoom-in"
        data-aos-delay="200"
      >
        {accreditationBadges.map((badge, i) => (
          <img
            key={badge.src}
            className={badge.mono ? "mono-logo" : undefined}
            src={badge.src}
            alt={badge.alt}
            loading="lazy"
            decoding="async"
            data-aos={badge.aos}
            data-aos-delay={300 + i * 100}
          />
        ))}
      </div>
    </div>
  </section>
);

const Accreditations = () => {
  const pathways = [
    { country: "Nigeria", credential: "WAEC — Nigerian & West African universities" },
    { country: "United Kingdom", credential: "Cambridge IGCSE + IELTS" },
    { country: "United States", credential: "Cambridge IGCSE + SAT" },
    { country: "Canada", credential: "Cambridge IGCSE + IELTS" },
    { country: "Global", credential: "Multiple qualification options" },
  ];

  return (
    <div className="accreditations-page">
      <Navbar />

      {/* Hero */}
      <div className="about-hero">
        <div className="hero-label">Recognition &amp; Partnerships</div>
        <h1 className="hero-title">Accreditations &amp; Partnerships</h1>
        <p className="hero-tagline">Globally recognised, locally trusted</p>
      </div>

      <div className="page">

        {/* Intro */}
        <div className="accreditations-intro">
          <p className="section-label">Our Credentials</p>
          <h2 className="section-heading">Global Recognition, Academic Excellence</h2>
          <p className="accreditations-intro-text">
            Virgo Praedicanda International School partners with leading international educational
            organisations to deliver world-class curriculum and qualifications recognised by
            universities and employers worldwide.
          </p>
        </div>


        {/* Accreditation cards */}
        <div className="accreditation-cards-grid">

          <div className="accreditation-detail-card">
            <div className="accreditation-detail-header accreditation-detail-header--cambridge">
              <div className="accreditation-detail-logo">
                <img src="/assets/images/cambridge.jpg" alt="Cambridge International" loading="lazy" decoding="async" />
              </div>
              <div>
                <span className="accreditation-detail-tag">Secondary School</span>
                <h3 className="accreditation-detail-title">Cambridge International School</h3>
              </div>
            </div>
            <p className="accreditation-detail-desc">
              VPIS is a Cambridge International School, offering Cambridge Checkpoint and Cambridge
              IGCSE qualifications — accepted by universities in the UK, US, Canada, Australia,
              and over 160 countries worldwide.
            </p>
            <ul className="accreditation-detail-list">
              <li>Globally recognised curriculum and qualifications</li>
              <li>Rigorous standards that prepare students for university</li>
              <li>Pathways to A-Levels and universities worldwide</li>
              <li>Regular quality assurance and school inspections</li>
            </ul>
          </div>

          <div className="accreditation-detail-card">
            <div className="accreditation-detail-header accreditation-detail-header--pearson">
              <div className="accreditation-detail-logo">
                <img src="/assets/images/pearson.jpg" alt="Pearson Edexcel" loading="lazy" decoding="async" />
              </div>
              <div>
                <span className="accreditation-detail-tag">Primary School</span>
                <h3 className="accreditation-detail-title">Pearson Edexcel iPrimary</h3>
              </div>
            </div>
            <p className="accreditation-detail-desc">
              Our primary school follows the Pearson Edexcel iPrimary Curriculum — a high-quality
              British international programme providing a strong academic foundation.
            </p>
            <ul className="accreditation-detail-list">
              <li>High-quality British education standards</li>
              <li>Strong foundation in literacy, numeracy, and critical thinking</li>
              <li>Seamless progression to the Cambridge secondary curriculum</li>
              <li>International recognition and portability</li>
            </ul>
          </div>

          <div className="accreditation-detail-card">
            <div className="accreditation-detail-header accreditation-detail-header--waec">
              <div className="accreditation-detail-logo">
                <img src="/assets/images/waec.jpg" alt="waec" loading="lazy" decoding="async" />
              </div>
              <div>
                <span className="accreditation-detail-tag">National Qualification</span>
                <h3 className="accreditation-detail-title">West African Examinations Council</h3>
              </div>
            </div>
            <p className="accreditation-detail-desc">
              VPIS prepares students for the WASSCE — the standard qualification for university
              admission in Nigeria and West Africa, recognised by the Nigerian NUC.
            </p>
            <ul className="accreditation-detail-list">
              <li>Nigerian and West African university admission eligibility</li>
              <li>Dual qualification pathway alongside Cambridge IGCSE</li>
              <li>Comprehensive preparation and registration support</li>
            </ul>
          </div>

          <div className="accreditation-detail-card">
            <div className="accreditation-detail-header accreditation-detail-header--nerdc">
              <div className="accreditation-detail-logo">
                <img src="/assets/images/nerdc.jpeg" alt="nerdc" loading="lazy" decoding="async" />
              </div>
              <div>
                <span className="accreditation-detail-tag">National Standards</span>
                <h3 className="accreditation-detail-title">Nigerian Educational Research &amp; Development Council</h3>
              </div>
            </div>
            <p className="accreditation-detail-desc">
              VPIS operates in full accordance with Nigerian educational standards and curriculum
              guidelines, ensuring cultural relevance alongside global perspectives.
            </p>
            <ul className="accreditation-detail-list">
              <li>Compliance with Nigerian education regulations</li>
              <li>Integration of Nigerian curriculum with international programmes</li>
              <li>Recognition by Nigerian educational authorities</li>
            </ul>
          </div>

        </div>

        <AccreditationBadges />

        {/* Global Pathway Exams */}
        <div className="exam-prep-section">
          <p className="section-label">Global Pathway Exams</p>
          <h2 className="section-heading">SAT &amp; IELTS Preparation</h2>
          <div className="exam-cards">
            <div className="exam-card">
              <h3>SAT — Scholastic Assessment Test</h3>
              <p>
                VPIS prepares students for the SAT, required by most US universities and increasingly
                accepted internationally.
              </p>
              <p className="exam-card-label">Opens doors to:</p>
              <ul className="accreditation-detail-list">
                <li>Universities in the United States</li>
                <li>Scholarship opportunities</li>
                <li>International undergraduate programmes</li>
              </ul>
            </div>
            <div className="exam-card">
              <h3>IELTS — International English Language Testing System</h3>
              <p>
                The world's most popular English proficiency test for study, work, and migration.
              </p>
              <p className="exam-card-label">Opens doors to:</p>
              <ul className="accreditation-detail-list">
                <li>Universities in the UK, Australia, Canada, and beyond</li>
                <li>English-taught programmes worldwide</li>
                <li>Immigration and professional registration</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sixth Form */}
        <div className="partnership-section">
          <p className="section-label">Future Partnerships</p>
          <h2 className="section-heading">Proposed Sixth Form College</h2>
          <div className="partnership-card">
            <span className="partnership-badge">Coming Soon</span>
            <h3>UK Sixth Form Partnership</h3>
            <p>
              VPIS is in advanced discussions with leading UK institutions to establish a Sixth
              Form College offering A-Level qualifications — providing seamless A-Level pathways
              and direct university placement.
            </p>
            <ul className="accreditation-detail-list">
              <li>Cambridge International A-Level programmes</li>
              <li>Direct pathways to UK universities</li>
              <li>UCAS application support and university counselling</li>
              <li>Student exchange and UK visit opportunities</li>
            </ul>
          </div>
        </div>

        {/* The VPIS Advantage */}
        <div className="advantage-section">
          <p className="section-label">The VPIS Advantage</p>
          <h2 className="section-heading">Your Pathway to the World</h2>
          <p className="accreditations-intro-text">
            Our multi-qualification approach means VPIS graduates have multiple routes to university
            and career success — locally and globally.
          </p>
          <div className="pathway-grid">
            {pathways.map((p, i) => (
              <div className="pathway-card" key={i}>
                <h4 className="pathway-card-country">{p.country}</h4>
                <p className="pathway-card-credential">{p.credential}</p>
              </div>
            ))}
          </div>
        </div>

      </div>

      <CTASection />
      <Footer />
    </div>
  );
};

export default Accreditations;