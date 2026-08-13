import Navbar from '../components/Navbar';

const Accreditations = () => {
  return (
    <div className="accreditations-page">
      <Navbar />
      
      {/* Hero */}
      <div className="about-hero">
        <div className="hero-label">Recognition & Partnerships</div>
        <h1 className="hero-title">Accreditations & Partnerships</h1>
        <p className="hero-tagline">Globally recognized, locally trusted</p>
      </div>

      <div className="page">
        {/* Intro */}
        <div className="accreditations-intro">
          <p className="section-label">Our Credentials</p>
          <h2 className="section-heading">Global Recognition, Academic Excellence</h2>
          <p>
            Virgo Praedicanda International School partners with leading international educational 
            organizations to deliver world-class curriculum and qualifications recognized by 
            universities and employers worldwide.
          </p>
        </div>

        {/* Cambridge International */}
        <div className="accreditation-card cambridge">
          <div className="accreditation-logo">
            <img src="/assets/images/cambridge.png" alt="Cambridge Assessment International Education" loading="lazy" decoding="async" />
          </div>
          <div className="accreditation-content">
            <h3>Cambridge International School</h3>
            <p>
              VPIS is a Cambridge International School, offering Cambridge Checkpoint and 
              Cambridge IGCSE qualifications for secondary students.
            </p>
            <p>
              <strong>What this means:</strong>
            </p>
            <ul className="prose-list">
              <li>Globally recognized curriculum and qualifications</li>
              <li>Rigorous academic standards that prepare students for university</li>
              <li>Pathways to A-Levels and universities worldwide</li>
              <li>Regular quality assurance and school inspections</li>
              <li>Access to Cambridge resources, training, and support</li>
            </ul>
            <p>
              Cambridge qualifications are accepted by universities in the UK, US, Canada, 
              Australia, and over 160 countries worldwide.
            </p>
          </div>
        </div>

        {/* Pearson Edexcel */}
        <div className="accreditation-card pearson">
          <div className="accreditation-logo">
            <img src="/assets/images/pearson.png" alt="Pearson Edexcel" loading="lazy" decoding="async" />
          </div>
          <div className="accreditation-content">
            <h3>Pearson Edexcel iPrimary</h3>
            <p>
              Our primary school follows the Pearson Edexcel iPrimary Curriculum, a British-based 
              international primary program.
            </p>
            <p>
              <strong>What this means:</strong>
            </p>
            <ul className="prose-list">
              <li>High-quality British education standards for primary students</li>
              <li>Strong foundation in literacy, numeracy, and critical thinking</li>
              <li>Seamless progression to secondary curriculum</li>
              <li>International recognition and portability</li>
              <li>Regular assessments to track student progress</li>
            </ul>
          </div>
        </div>

        {/* WAEC */}
        <div className="accreditation-card waec">
          <div className="accreditation-content">
            <h3>West African Examinations Council (WAEC)</h3>
            <p>
              VPIS prepares students for the West African Senior School Certificate Examination 
              (WASSCE), the standard qualification for university admission in Nigeria and 
              West Africa.
            </p>
            <p>
              <strong>What this means:</strong>
            </p>
            <ul className="prose-list">
              <li>Nigerian and West African university admission eligibility</li>
              <li>Recognized by Nigerian National Universities Commission (NUC)</li>
              <li>Dual qualification pathway alongside Cambridge IGCSE</li>
              <li>Comprehensive preparation and registration support</li>
            </ul>
          </div>
        </div>

        {/* NERDC */}
        <div className="accreditation-card nerdc">
          <div className="accreditation-content">
            <h3>Nigerian Educational Research and Development Council (NERDC)</h3>
            <p>
              VPIS operates in accordance with Nigerian educational standards and curriculum 
              guidelines established by NERDC.
            </p>
            <p>
              <strong>What this means:</strong>
            </p>
            <ul className="prose-list">
              <li>Compliance with Nigerian education regulations</li>
              <li>Integration of Nigerian curriculum elements with international programs</li>
              <li>Recognition by Nigerian educational authorities</li>
              <li>Cultural relevance alongside global perspectives</li>
            </ul>
          </div>
        </div>

        {/* SAT & IELTS */}
        <div className="exam-prep-section">
          <p className="section-label">Global Pathway Exams</p>
          <h2 className="section-heading">SAT & IELTS Preparation</h2>
          
          <div className="exam-cards">
            <div className="exam-card">
              <h3>SAT (Scholastic Assessment Test)</h3>
              <p>
                VPIS prepares students for the SAT, required by most U.S. universities and 
                increasingly accepted by international universities.
              </p>
              <p><strong>Opens doors to:</strong></p>
              <ul className="prose-list">
                <li>Universities in the United States</li>
                <li>Scholarship opportunities</li>
                <li>International undergraduate programs</li>
              </ul>
            </div>

            <div className="exam-card">
              <h3>IELTS (International English Language Testing System)</h3>
              <p>
                We prepare students for IELTS, the world's most popular English language 
                proficiency test for study, work, and migration.
              </p>
              <p><strong>Opens doors to:</strong></p>
              <ul className="prose-list">
                <li>Universities in the UK, Australia, Canada, and beyond</li>
                <li>English-taught programs worldwide</li>
                <li>Immigration and professional registration</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Sixth Form Partnership */}
        <div className="partnership-section">
          <p className="section-label">Future Partnerships</p>
          <h2 className="section-heading">Proposed Sixth Form College</h2>
          
          <div className="partnership-card">
            <div className="partnership-badge">Coming Soon</div>
            <h3>UK Sixth Form Partnership</h3>
            <p>
              VPIS is in advanced discussions with leading UK institutions to establish a 
              Sixth Form College offering A-Level qualifications.
            </p>
            <p>
              <strong>This partnership will provide:</strong>
            </p>
            <ul className="prose-list">
              <li>Cambridge International A-Level programs</li>
              <li>Direct pathways to UK universities</li>
              <li>UCAS application support and university counseling</li>
              <li>UK-standard teaching and assessment</li>
              <li>Opportunities for student exchanges and UK visits</li>
            </ul>
            <p className="partnership-note">
              <em>
                Note: The Sixth Form College is currently in the planning and partnership 
                development stage. Full details will be announced once agreements are finalized.
              </em>
            </p>
          </div>
        </div>

        {/* The VPIS Advantage */}
        <div className="advantage-section">
          <h3>The VPIS Advantage</h3>
          <p>
            Our multi-qualification approach means VPIS graduates have multiple pathways to 
            university and career success:
          </p>
          <div className="pathway-grid">
            <div className="pathway-card">
              <h4>🇳🇬 Nigeria</h4>
              <p>WAEC for Nigerian universities</p>
            </div>
            <div className="pathway-card">
              <h4>🇬🇧 United Kingdom</h4>
              <p>Cambridge IGCSE + IELTS</p>
            </div>
            <div className="pathway-card">
              <h4>🇺🇸 United States</h4>
              <p>Cambridge IGCSE + SAT</p>
            </div>
            <div className="pathway-card">
              <h4>🇨🇦 Canada</h4>
              <p>Cambridge IGCSE + IELTS</p>
            </div>
            <div className="pathway-card">
              <h4>🌍 Global</h4>
              <p>Multiple qualification options</p>
            </div>
          </div>
        </div>
      </div>

      <footer className="page-footer">
        <p>&copy; {new Date().getFullYear()} Virgo Praedicanda International School. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Accreditations;
