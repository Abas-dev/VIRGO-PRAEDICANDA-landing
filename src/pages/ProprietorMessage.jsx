import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const ProprietorMessage = () => {
  return (
    <div className="proprietor-message-page">
      <Navbar />
      
      {/* Hero */}
      <div className="about-hero">
        <div className="hero-label">Leadership Vision</div>
        <h1 className="hero-title">Message from the Proprietor</h1>
        <p className="hero-tagline">Dr. C.V. Dimmwobi</p>
      </div>

      <div className="page">
        {/* Proprietor Photo and Bio */}
        <div className="proprietor-header" data-aos="fade-up">
          <div className="proprietor-photo">
            <img 
              src="/assets/images/management/school_photo_6.jpg" 
              alt="Dr. C.V. Dimmwobi, Proprietor" 
              loading="lazy" 
              decoding="async"
            />
          </div>
          <div className="proprietor-intro">
            <h2>Dr. C.V. Dimmwobi</h2>
            <p className="proprietor-title">Proprietor | Visionary Educator | Cambridge and Harvard Alumna</p>
            <p className="proprietor-subtitle">Raising Lights for the World Through Faith and Excellence</p>
          </div>
        </div>

        {/* Message Content */}
        <div className="message-content" data-aos="fade-up" data-aos-delay="100">
          <h3>Welcome to Virgo Praedicanda International School</h3>
          
          <p>
            At VPIS, we believe that every child is a gift from God and a solution to the world. 
            Our mandate is clear: <em>to inspire and nurture excellent children for global impact</em>.
          </p>

          <p>
            Education, to us, is not just about passing examinations. It is about forming young men 
            and women with active and creative minds, a heart of compassion, strong character, and 
            the courage to act on their convictions. That is why our foundation rests on 
            <strong> Academic Excellence, Faith in God, Love, Discipline, and Initiative</strong>.
          </p>

          <p>
            To deliver on this mandate, we have adopted a robust dual-curriculum model. Our Primary 
            School runs the British Pearson Edexcel iPrimary curriculum. In Secondary School, we are 
            a Cambridge International School offering Cambridge Checkpoint and IGCSE. We also ensure 
            our students have every advantage by preparing them for WAEC, SAT, and IELTS. This means 
            our graduates can confidently gain admission into top universities in Nigeria and around 
            the world.
          </p>

          <div className="message-highlight">
            <p>
              Recently, I had the privilege of meeting with the Cambridge team to discuss our proposed 
              Sixth Form College. It was a moment of vision and partnership as we work to open new doors 
              for our students to access A-Levels and seamless pathways to global universities. I also 
              spent time in reflection at Cambridge, giving thanks to God for His faithfulness and for 
              the doors He continues to open for our school.
            </p>
          </div>

          <p>
            Our goal at VPIS is simple: to raise leaders who are brilliant in the classroom, strong in 
            character, rooted in faith, and ready to transform society. We are committed to providing 
            an environment where your child will be discovered, developed, and deployed for greatness.
          </p>

          <p className="message-closing">
            Thank you for trusting us with your most precious gift. Together, let us raise a generation 
            of lights for the world.
          </p>

          <div className="message-signature">
            <p><strong>Dr. C.V. Dimmwobi</strong></p>
            <p><em>Proprietor, Virgo Praedicanda International School</em></p>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default ProprietorMessage;
