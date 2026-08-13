import Navbar from '../components/Navbar';

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
          <p className="section-label">Excellence in Education</p>
          <h2 className="section-heading">Excellence in Learning, Rooted in Purpose</h2>
          
          <div className="curriculum-intro">
            <p>
              At Virgo Praedicanda International School, we provide a robust dual-curriculum model that 
              prepares students for success in Nigeria and around the world.
            </p>
          </div>

          <div className="curriculum-levels">
            <div className="curriculum-card">
              <h3>Primary School</h3>
              <p><strong>Pearson Edexcel iPrimary Curriculum</strong></p>
              <p>
                Our primary school follows the British Pearson Edexcel iPrimary Curriculum, providing 
                a strong foundation in literacy, numeracy, and critical thinking.
              </p>
            </div>

            <div className="curriculum-card">
              <h3>Secondary School</h3>
              <p><strong>Cambridge International</strong></p>
              <p>
                <strong>Key Stage 3:</strong> Cambridge Checkpoint
                <br />
                <strong>Key Stage 4:</strong> Cambridge IGCSE
              </p>
              <p>
                Our secondary school curriculum prepares students for globally recognized qualifications.
              </p>
            </div>

            <div className="curriculum-card">
              <h3>Global Pathway Exams</h3>
              <p><strong>WAEC, SAT, IELTS</strong></p>
              <p>
                We prepare students for West African Examinations Council (WAEC), SAT, and IELTS, 
                opening doors to universities in Nigeria, UK, US, Canada, and beyond.
              </p>
            </div>

            <div className="curriculum-card">
              <h3>Sixth Form College</h3>
              <p><strong>Coming Soon</strong></p>
              <p>
                We are advancing discussions for a proposed Sixth Form College in partnership with 
                leading UK institutions, providing A-Level pathways and seamless university placement.
              </p>
            </div>
          </div>

          <div className="beyond-classroom">
            <h3>Beyond the Classroom</h3>
            <p>Our comprehensive education includes:</p>
            <ul className="prose-list">
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

      <footer className="page-footer">
        <p>
          &copy; {new Date().getFullYear()} Virgo Praedicanda International School. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Academics;
