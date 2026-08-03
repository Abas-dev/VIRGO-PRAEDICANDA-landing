import { useState } from 'react';
import Navbar from '../components/Navbar';

const About = () => {
  const [activeTab, setActiveTab] = useState('vision');
  
  const tabData = {
    vision: {
      image: "/assets/images/students_2.jpeg",
      alt: "Our Vision",
      desc: "Our vision is to raise children with strong, personable character equipped with knowledge that can compete globally. We inspire and nurture excellent children for global impact — developing confident, compassionate leaders who are rooted in faith and ready to thrive in a rapidly changing world."
    },
    mission: {
      image: "/assets/images/outdoor.jpeg",
      alt: "Our Mission",
      desc: "Our mission is to develop young men and women with active and creative minds, a sense of compassion for others, and the courage to act on their beliefs and dreams. We are committed to providing a world-class education that integrates academic rigour with Christian values, equipping every learner with the knowledge, skills, and character needed to make a meaningful difference in society."
    },
    values: {
      image: "/assets/images/kids.jpeg",
      alt: "Our Core Values",
      desc: "Everything we do at Virgo Praedicanda is shaped by our core values: Academic Excellence, Christian Character, Faith in God, Love & Compassion, Discipline, and Independence. These principles are woven into every lesson, every interaction, and every opportunity we provide — ensuring that our students grow not just in knowledge, but in wisdom, integrity, and purpose."
    }
  };

  const selectTab = (key) => {
    setActiveTab(key);
  };

  return (
    <div className="about-page">
      <Navbar />
      
      {/* Hero */}
      <div className="about-hero">
        <div className="hero-label">About the School</div>
        <h1 className="hero-title">Virgo Praedicanda International School</h1>
        <p className="hero-tagline">Making Excellence A Habit.</p>
      </div>

      <div className="page">
        {/* About us accordion (mirrors homepage layout) */}
        <div className="about-acc-section">
          <div className="about-acc-layout">

            {/* Left: heading + summary + accordion */}
            <div className="about-acc-left">
              <h2 className="about-acc-heading">About us</h2>
              <p className="about-acc-summary">
                The founding of Virgo Praedicanda International School was motivated by
                the desire to provide top-notch instruction. Our bond is our word, or what
                we pledge to our parents. The school is the pinnacle of achievement,
                teamwork, intelligence, discipline, and devotion.
              </p>

              <div className="vmv-accordion">
                <div className="vmv-acc-item">
                  <button 
                    className={`vmv-acc-btn ${activeTab === 'vision' ? 'active' : ''}`} 
                    onClick={() => selectTab('vision')}
                  >
                    <span>Our Vision</span>
                    <span className="vmv-acc-icon">{activeTab === 'vision' ? '‹' : '›'}</span>
                  </button>
                </div>

                <div className="vmv-acc-item">
                  <button 
                    className={`vmv-acc-btn ${activeTab === 'mission' ? 'active' : ''}`} 
                    onClick={() => selectTab('mission')}
                  >
                    <span>Our Mission</span>
                    <span className="vmv-acc-icon">{activeTab === 'mission' ? '‹' : '›'}</span>
                  </button>
                </div>

                <div className="vmv-acc-item">
                  <button 
                    className={`vmv-acc-btn ${activeTab === 'values' ? 'active' : ''}`} 
                    onClick={() => selectTab('values')}
                  >
                    <span>Our Core Values</span>
                    <span className="vmv-acc-icon">{activeTab === 'values' ? '‹' : '›'}</span>
                  </button>
                </div>
              </div>
            </div>

            {/* Right: image + description */}
            <div className="about-acc-right">
              <div className="about-acc-img">
                <img src={tabData[activeTab].image} alt={tabData[activeTab].alt} />
              </div>
              <p className="about-acc-desc">
                {tabData[activeTab].desc}
              </p>
            </div>

          </div>
        </div>

        {/* About the School — split layout */}
        <div className="split-row">
          <div className="split-img">
            <img src="/assets/images/building.jpeg" alt="School building" />
          </div>
          <div className="split-text">
            <p className="section-label">Who We Are</p>
            <h2 className="section-heading">A School Built on Purpose</h2>
            <p>
              Established in 2018, Virgo Praedicanda International School (VPIS) is an independent, Christian, co-educational day school committed to providing outstanding education for children from six weeks of age through the secondary school level. Since inception, the school has remained dedicated to nurturing academic excellence while developing sound moral values, leadership qualities, creativity, and lifelong learning skills that prepare learners for success in an ever-changing global society.
            </p>
            <p>
              VPIS operates as a co-educational institution offering quality education from Early Years through Nursery, Primary, and Secondary School — integrating the English National Curriculum with the Nigerian Curriculum, and providing a standard of education comparable to leading schools in the United Kingdom, the United States, and Singapore.
            </p>
            <ul className="prose-list">
              <li>Education from Early Years, Nursery, Primary through Secondary School.</li>
              <li>Standards comparable to leading schools in the UK, USA, and Singapore.</li>
              <li>English National Curriculum integrated with the Nigerian Curriculum.</li>
              <li>A safe, inclusive, nurturing environment rooted in Christian values.</li>
              <li>Located at Woji Campus 1 — No. 9 Marina Close, Chinda.</li>
            </ul>
          </div>
        </div>

        {/* School Levels */}
        <p className="section-label">What We Offer</p>
        <h2 className="section-heading">Our School Levels</h2>
        <div className="levels-grid">
          <div className="level-card">
            <div className="level-num">01</div>
            <h4>Early Years &amp; Nursery</h4>
            <p>Children are introduced to learning through engaging, play-based experiences that build confidence, curiosity, communication, and foundational literacy and numeracy skills.</p>
          </div>
          <div className="level-card">
            <div className="level-num">02</div>
            <h4>Primary School</h4>
            <p>Pupils gain strong academic foundations while nurturing creativity, critical thinking, collaboration, and problem-solving, supported by technology, arts, sports, and co-curricular programmes.</p>
          </div>
          <div className="level-card">
            <div className="level-num">03</div>
            <h4>Secondary School</h4>
            <p>Students are prepared for higher education and future careers through rigorous academics, leadership development, digital literacy, research, entrepreneurship, and character education.</p>
          </div>
        </div>

        {/* Excellence — split reverse */}
        <div className="split-row reverse">
          <div className="split-img">
            <img src="/assets/images/kids.jpeg" alt="Students learning" />
          </div>
          <div className="split-text">
            <p className="section-label">Beyond the Classroom</p>
            <h2 className="section-heading">Excellence in Every Aspect</h2>
            <p>
              At VPIS, excellence is reflected in every part of school life. Through highly qualified
              teachers, innovative instruction, and a learner-centred approach, every student is
              inspired to pursue excellence with integrity, compassion, and service.
            </p>
            <p>Beyond academics, we develop talents through:</p>
            <ul className="prose-list">
              <li>Sports, music, public speaking, and ballet</li>
              <li>Coding, STEM education, and digital literacy</li>
              <li>Leadership programmes, clubs, and competitions</li>
              <li>Community service and enriching co-curricular activities</li>
            </ul>
          </div>
        </div>

        {/* Core Values */}
        <div className="values-section">
          <p className="section-label">What Guides Us</p>
          <h2 className="section-heading">Our Core Values</h2>
          <div className="values-grid">
            <div className="value-pill">Academic Excellence</div>
            <div className="value-pill">Christian Character</div>
            <div className="value-pill">Faith in God</div>
            <div className="value-pill">Love &amp; Compassion</div>
            <div className="value-pill">Discipline</div>
            <div className="value-pill">Independence &amp; Initiative</div>
          </div>
        </div>

        {/* Motto */}
        <div className="motto-banner">
          <p>&ldquo;Making Excellence A Habit.&rdquo;</p>
          <small>VIRGO PRAEDICANDA INTERNATIONAL SCHOOL</small>
        </div>

      </div>

      <footer className="page-footer">
        <p>&copy; {new Date().getFullYear()} Virgo Praedicanda International School. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default About;