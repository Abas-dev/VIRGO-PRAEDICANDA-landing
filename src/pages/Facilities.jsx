import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Facilities = () => {
  const facilitiesList = [
    {
      title: "Health Bay",
      description:
        "Professional medical care and health monitoring for all students with qualified nursing staff.",
    },
    {
      title: "Science Laboratory",
      description:
        "Fully equipped modern science lab for hands-on experiments and practical learning in physics, chemistry, and biology.",
    },
    {
      title: "ICT Laboratory",
      description:
        "Advanced computer lab with high-speed internet and latest technology for digital literacy and programming skills.",
    },
    {
      title: "Language Laboratory",
      description:
        "Interactive language learning environment with audio-visual equipment for enhanced communication skills.",
    },
    {
      title: "Montessori Lab",
      description:
        "Specially designed Montessori learning environment with hands-on materials for early childhood development and self-directed learning.",
    },
    {
      title: "Music Studio & Art Studio",
      description:
        "Creative spaces for artistic expression, music lessons, and developing talents in the performing and visual arts.",
    },
    {
      title: "E-Library",
      description:
        "Digital library with extensive collection of books, research materials, and online resources for academic excellence.",
    },
    {
      title: "Swimming Pool",
      description:
        "Safe and supervised swimming facility for recreational activities, swimming lessons, and aquatic sports.",
    },
    {
      title: "Playground, Slides & Trampolines",
      description:
        "Age-appropriate outdoor play equipment and recreational facilities for physical development and fun.",
    },
  ];

  const campuses = [
    {
      name: "Campus 1 (Woji)",
      image: "/assets/images/woji.jpeg",
      address: "No 9 Marina Close, Woji, Port Harcourt, Rivers State, Nigeria",
      levels:
        "Creche, Nursery & Primary — Secondary school commenced this academic year",
      knownFor:
        "Home of the original VPIS campus and the Early Years / Bloomers & Angels classrooms",
    },
    {
      name: "Campus 2 (Chinda)",
      image: "/assets/images/chinda.jpeg",
      address: "No 100 Chinda, Ada George, Port Harcourt, Rivers State, Nigeria",
      levels: "Primary and Secondary Education",
      knownFor:
        "Advanced facilities and comprehensive secondary education programs",
    },
  ];

  return (
    <div className="facilities-page">
      <Navbar />

      {/* Hero */}
      <div className="facilities-hero">
        <div className="hero-label">Our Environment</div>
        <h1 className="hero-title">Facilities</h1>
        <p className="hero-tagline">
          A stimulating, child-friendly environment designed to support both
          academic excellence and holistic development
        </p>
      </div>

      <div className="page">
        {/* Facilities Grid */}
        <div className="facilities-section" id="facilities">
          <p className="section-label">Explore Our Grounds</p>
          <h2 className="section-heading">What's On Campus</h2>
          <p className="section-intro">
            State-of-the-art facilities to enhance learning and development
          </p>

          <div className="facilities-grid">
            {facilitiesList.map((facility, index) => (
              <div key={index} className="facility-card">
                <h3>{facility.title}</h3>
                <p>{facility.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Campuses */}
        <div className="campuses-section" id="campuses">
          <p className="section-label">Two Campuses, One Standard</p>
          <h2 className="section-heading">Our Campuses</h2>

          <div className="campuses-grid">
            {campuses.map((campus, index) => (
              <div key={index} className="campus-card">
                <div className="campus-image">
                  <img
                    src={campus.image}
                    alt={`${campus.name} building`}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
                <div className="campus-content">
                  <h3>{campus.name}</h3>
                  <div className="campus-detail">
                    <h4>Address</h4>
                    <p>{campus.address}</p>
                  </div>
                  <div className="campus-detail">
                    <h4>Levels Offered</h4>
                    <p>{campus.levels}</p>
                  </div>
                  <div className="campus-detail">
                    <h4>Known For</h4>
                    <p>{campus.knownFor}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="cta-section" id="visit">
          <p className="section-label">See It Yourself</p>
          <h2 className="section-heading">Plan a Visit</h2>

          <div className="cta-card">
            <h3>Visit Our Campus</h3>
            <p>
              Experience our world-class facilities firsthand. Schedule a tour
              to see how we create the perfect learning environment for your
              child.
            </p>
            <div className="cta-buttons">
              <a href="tel:+2349132554783" className="cta-btn primary">
                Schedule a Tour
              </a>
              <Link to="/admissions" className="cta-btn secondary">
                Learn About Admissions
              </Link>
            </div>
          </div>
        </div>
      </div>

      <footer className="page-footer">
        <p>
          &copy; {new Date().getFullYear()} Virgo Praedicanda International
          School. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default Facilities;
