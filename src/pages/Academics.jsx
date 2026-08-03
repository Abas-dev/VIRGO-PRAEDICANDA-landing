import Navbar from '../components/Navbar';

const Academics = () => {
  const subjects = [
    'Literacy', 'Numeracy', 'Science', 'Bible Knowledge', 'General Knowledge',
    'Computing', 'Music', 'Vocational/Technical Education', 'Creative Arts',
    'Critical Thinking', 'Handwriting', 'History', 'PSHE', 'Diction',
    'Verbal Reasoning', 'Quantitative Reasoning', 'Geography'
  ];

  const trainingAreas = [
    'Morning Aerobics',
    'Security Education', 
    'Financial Literacy',
    'Character Building',
    'Moral Instruction'
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
              building the same digital-exam confidence pupils will need at WAEC,
              NECO and JAMB level.
            </p>
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

export default Academics;
