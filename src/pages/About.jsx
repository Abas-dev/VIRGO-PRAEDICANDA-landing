import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CTASection from '../components/CTASection';

const About = () => {
  const [activeTab, setActiveTab] = useState('vision');
  
  const tabData = {
    vision: {
      image: "/assets/images/students_2.jpeg",
      alt: "Our Vision",
      desc: "To inspire and nurture excellent children for global impact."
    },
    mission: {
      image: "/assets/images/outdoor.jpeg",
      alt: "Our Mission",
      desc: "To develop young men and women with active and creative minds, a sense of understanding and compassion for others, and the courage to act on their beliefs."
    },
    values: {
      image: "/assets/images/kids.jpeg",
      alt: "Our Core Values",
      desc: "Academic Excellence | Christian Character | Faith in God | Love & Compassion for Others | Discipline | Independence & Initiative"
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
        <p className="hero-tagline">Raising Lights for the World</p>
      </div>

      <div className="page">
        {/* About us accordion (mirrors homepage layout) */}
        <div className="about-acc-section">
          <div className="about-acc-layout">

            {/* Left: heading + summary + bottom row (accordion + image) */}
            <div className="about-acc-left">
              <h2 className="about-acc-heading">About Virgo Praedicanda International School</h2>
              <p className="about-acc-summary">
                Virgo Praedicanda International School is a leading co-educational institution in Port Harcourt, Nigeria, committed to academic excellence, character formation, and global leadership development. Our name, <em>Virgo Praedicanda</em> — "The Virgin to be Proclaimed" — reflects our vision of raising exceptional children who will shine as lights in the world. We provide a world-class education that blends rigorous academics with strong moral and spiritual foundations, preparing our students to lead and serve with distinction both in Nigeria and across the globe.
              </p>
              <p className="about-acc-summary">
                At VPIS, we deliver a hybrided-curriculum approach that gives our students the best of both worlds:<br />
                - <strong>Primary School:</strong> British Pearson Edexcel iPrimary Curriculum, Cambridge Curriculum, Singapore Mathematics Curriculum and the Nigerian based Curriculum<br />
                - <strong>Secondary School:</strong> Cambridge International School offering Cambridge Checkpoint and IGCSE
              </p>
              <p className="about-acc-summary">
                To ensure our students are fully prepared for opportunities at home and abroad, we also prepare them for and register them for West African Examinations Council (WAEC), SAT, and IELTS. This guarantees multiple pathways for university admission in Nigeria, the UK, US, Canada, and beyond.
              </p>
              <p className="about-acc-summary">
                With a dedicated faculty, state-of-the-art facilities, and a student-centered approach, every child at VPIS is discovered, developed, and deployed for greatness.
              </p>
              <p className="about-acc-summary">
                We are also advancing discussions for a proposed Sixth Form College in partnership with leading institutions in the UK, to provide our students with seamless pathways for A-Levels and university placement.
              </p>

              {/* Bottom row: accordion on left, image on right */}
              <div className="about-acc-bottom-row">
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

          </div>
        </div>

        {/* About the School — split layout */}
        <div className="split-row">
          <div className="split-img">
            <img src="/assets/images/woji.png" alt="School building" loading="lazy" decoding="async" />
          </div>
          <div className="split-text">
            <p className="section-label">Who We Are</p>
            <h2 className="section-heading">A School Built on Purpose</h2>
            <p>
              Virgo Praedicanda International School (VPIS) is a leading co-educational institution in Port Harcourt, Nigeria, committed to academic excellence, character formation, and global leadership development. Since our founding, we have remained dedicated to nurturing academic excellence while developing sound moral values, leadership qualities, creativity, and lifelong learning skills that prepare every learner for success in an ever-changing global society.
            </p>
            <p>
              At VPIS, we believe education is more than examinations. It is about forming the whole child — intellectually, morally, and spiritually — for leadership, service, and purpose.
            </p>
            <ul className="prose-list">
              <li>Dual-curriculum approach: Pearson Edexcel iPrimary and Cambridge International</li>
              <li>Preparation for WAEC, SAT, and IELTS examinations</li>
              <li>A safe, inclusive, nurturing environment rooted in Christian values</li>
              <li>Proposed Sixth Form College in partnership with UK institutions</li>
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
            <img src="/assets/images/kids.jpeg" alt="Students learning" loading="lazy" decoding="async" />
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
          <p>&ldquo;Raising Lights for the World&rdquo;</p>
          <small>VIRGO PRAEDICANDA INTERNATIONAL SCHOOL</small>
          <p style={{ marginTop: '1rem', fontSize: '0.95rem', fontStyle: 'italic' }}>
            To God be the Glory. Amen.
          </p>
        </div>

      </div>

      <Footer />
    </div>
  );
};

export default About;