import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTASection from '../components/CTASection';

const Academics = () => {
  const subjects = [
    'Literacy', 'Numeracy', 'Science', 'Bible Knowledge', 'General Knowledge',
    'Computing', 'Music', 'Vocational/Technical Education', 'Creative Arts',
    'Critical Thinking', 'Handwriting', 'History', 'PSHE', 'Diction',
    'Verbal Reasoning', 'Quantitative Reasoning', 'Geography',
    'Chemistry', 'Physics', 'Government', 'ICT', 'Economics', 'Commerce',
    'Physical and Health Education', 'Biology', 'Basic Technology'
  ];

  const trainingAreas = [
    'Morning Aerobics',
    'Security Education', 
    'Financial Literacy',
    'Character Building',
    'Moral Instruction',
    'Sex Education',
    'Anti-Bullying',
    'French',
    'Spanish'
  ];

  return (
    <div className="academics-page">
      <Navbar />
      
      {/* Hero */}
      <div className="academics-hero">
        <div className="hero-label">Academic Excellence</div>
        <h1 className="hero-title">Academics</h1>
        <p className="hero-tagline">Comprehensive Education for Global Champions</p>
      </div>

      <div className="page">
        {/* Curriculum Overview */}
        <div className="curriculum-overview">
          <div className="curriculum-overview-header">
            <p className="section-label">Excellence in Education</p>
            <h2 className="section-heading">Excellence in Learning, Rooted in Purpose</h2>
            <p className="curriculum-intro-text">
              At Virgo Praedicanda International School, we provide a robust hybrided-curriculum model that
              prepares students for success in Nigeria and around the world.
            </p>
          </div>

          <div className="curriculum-levels">

            <div className="curriculum-card curriculum-card--primary">
              <div className="curriculum-card-icon curriculum-card-icon--primary">01</div>
              <div className="curriculum-card-body">
                <span className="curriculum-card-tag">Primary School</span>
                <h3 className="curriculum-card-title">British Pearson Edexcel iPrimary Curriculum,
                  <br/>
                   Cambridge Curriculum,
                   <br/>
                    Singapore Mathematics Curriculum and
                    <br/>
                     the Nigerian based Curriculum</h3>
                <p className="curriculum-card-desc">
                  Our primary school follows the several Curriculums, providing
                  a strong foundation in literacy, numeracy, and critical thinking.
                </p>
              </div>
            </div>

            <div className="curriculum-card curriculum-card--secondary">
              <div className="curriculum-card-icon curriculum-card-icon--secondary">02</div>
              <div className="curriculum-card-body">
                <span className="curriculum-card-tag">Secondary School</span>
                <h3 className="curriculum-card-title">Cambridge International</h3>
                <ul className="curriculum-card-list">
                  <li><strong>Key Stage 3:</strong> Cambridge Checkpoint</li>
                  <li><strong>Key Stage 4:</strong> Cambridge IGCSE</li>
                </ul>
                <p className="curriculum-card-desc">
                  Globally recognised qualifications that open doors worldwide.
                </p>
              </div>
            </div>

            <div className="curriculum-card curriculum-card--exams">
              <div className="curriculum-card-icon curriculum-card-icon--exams">03</div>
              <div className="curriculum-card-body">
                <span className="curriculum-card-tag">Global Pathway Exams</span>
                <h3 className="curriculum-card-title">WAEC · SAT · IELTS</h3>
                <p className="curriculum-card-desc">
                  We prepare and register students for WAEC, SAT, and IELTS — opening doors to
                  universities in Nigeria, the UK, US, Canada, and beyond.
                </p>
              </div>
            </div>

            <div className="curriculum-card curriculum-card--sixth">
              <div className="curriculum-card-icon curriculum-card-icon--sixth">04</div>
              <div className="curriculum-card-body">
                <span className="curriculum-card-tag curriculum-card-tag--soon">Coming Soon</span>
                <h3 className="curriculum-card-title">Sixth Form College</h3>
                <p className="curriculum-card-desc">
                  A proposed Sixth Form College in partnership with leading UK institutions —
                  seamless A-Level pathways and direct university placement.
                </p>
              </div>
            </div>

          </div>

          {/* Beyond the Classroom */}
          <div className="beyond-classroom">
            <div className="beyond-classroom-text">
              <p className="section-label">Holistic Development</p>
              <h3 className="beyond-classroom-title">Beyond the Classroom</h3>
              <p className="beyond-classroom-desc">
                Our comprehensive education extends far beyond textbooks. We develop the whole child —
                intellectually, morally, physically, and spiritually.
              </p>
            </div>
            <ul className="beyond-classroom-list">
              <li>Leadership training and character development</li>
              <li>Public speaking and debate</li>
              <li>STEM education and coding</li>
              <li>Sports, music, and creative arts</li>
              <li>Chapel services and spiritual formation</li>
            </ul>
          </div>
        </div>

        {/* Subjects We Offer */}
        <div className="subjects-section" id="subjects">
          <p className="section-label">Our Curriculum</p>
          <h2 className="section-heading">Subjects We Offer</h2>

          <div className="subjects-grid">
            {subjects.map((subject, index) => (
              <div key={index} className="subject-card">
                <h4>{subject}</h4>
              </div>
            ))}
          </div>
        </div>

        {/* Training & Character Development */}
        <div className="training-section" id="training">
          <p className="section-label">Beyond Academics</p>
          <h2 className="section-heading">Training & Character Development</h2>

          <ul className="training-list">
            {trainingAreas.map((area, index) => (
              <li key={index}>{area}</li>
            ))}
          </ul>
        </div>

        {/* Examination & Assessment */}
        <div className="assessment-section" id="assessment">
          <p className="section-label">Evaluation Excellence</p>
          <h2 className="section-heading">Examination & Assessment</h2>

          <div className="assessment-card">
            <h3>Comprehensive Assessment System</h3>
            <p>
              A comprehensive assessment system combining
              <strong> Formative Assessment</strong> (continuous monitoring and
              feedback), <strong> Summative Assessment</strong> (written exams,
              projects, presentations), and
              <strong> Computer-Based Testing (CBT)</strong> for selected exams —
              building the same digital-exam confidence students will need for
              international and national examinations.
            </p>
          </div>
        </div>
      </div>

      <CTASection
        heading="Begin Your Journey at VPIS"
        subtext="Limited spaces available for the 2026/2027 Academic Session."
      />
      <Footer />
    </div>
  );
};

export default Academics;
