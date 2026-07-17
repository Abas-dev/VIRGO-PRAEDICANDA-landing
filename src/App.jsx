import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header-wrapper">
      <nav className="navbar-container">
        <div className="container navbar-inner">
          <div className="navbar-brand">
            <img
              src="/assets/images/logo.png"
              className="header-logo-img"
            />
            <div>
              <span className="brand-title">VIRGO PRAEDICANDA</span>
              <span className="brand-subtitle">INTERNATIONAL SCHOOL</span>
            </div>
          </div>

          <ul className="nav-links">
            <li><a href="#about">About</a></li>
            <li><a href="#testimonials">Testimonials</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li>
              <a href="/gallery.html" target="_blank" rel="noreferrer">Gallery</a>
            </li>
          </ul>

          <div className="nav-actions">
            <a className="btn btn-outline-nav" href="#contact">Visit Portal</a>
          </div>

          <button className="hamburger-btn" onClick={() => setMenuOpen(true)} aria-label="Open menu">
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </nav>

      {/* Mobile drawer overlay */}
      {menuOpen && (
        <div className="mobile-overlay" onClick={() => setMenuOpen(false)} />
      )}

      {/* Mobile drawer panel */}
      <div className={`mobile-drawer ${menuOpen ? "drawer-open" : ""}`}>
        <div className="drawer-header">
          <div className="drawer-brand">
            <img src="/assets/images/logo.png" className="drawer-logo" alt="logo" />
            <span className="drawer-brand-name">Virgo Praedicanda Int'l School</span>
          </div>
          <button className="drawer-close-btn" onClick={() => setMenuOpen(false)} aria-label="Close menu">✕</button>
        </div>

        <ul className="drawer-links">
          <li><a href="#about"        onClick={() => setMenuOpen(false)}>About</a></li>
          <li><a href="#testimonials" onClick={() => setMenuOpen(false)}>Testimonials</a></li>
          <li><a href="#contact"      onClick={() => setMenuOpen(false)}>Contact</a></li>
          <li>
            <a href="/gallery.html" target="_blank" rel="noreferrer"
               onClick={() => setMenuOpen(false)}>Gallery</a>
          </li>
        </ul>

        <div className="drawer-actions">
          <a className="drawer-btn drawer-btn-primary" href="tel:+2348000000000">Call Us</a>
          <a className="drawer-btn drawer-btn-outline" href="#contact" onClick={() => setMenuOpen(false)}>Visit portal</a>
        </div>
      </div>
    </header>
  );
};

/* ── Hero Carousel — 4 images ─────────────────────── */
const heroCarouselImages = [
  { src: "/assets/images/students_3.jpeg" },
  { src: "/assets/images/class photo.jpeg" },
  { src: "/assets/images/kids_2.jpeg" },
  { src: "/assets/images/outdoor.jpeg" },
];

const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);
  const total = heroCarouselImages.length;

  useEffect(() => {
    const timer = setInterval(() => setCurrent((p) => (p + 1) % total), 3500);
    return () => clearInterval(timer);
  }, [total]);

  return (
    <div className="hero-carousel" data-aos="fade-left" data-aos-delay="400">
      <div className="hero-carousel-track">
        {heroCarouselImages.map((img, i) => (
          <div key={i} className={`hero-carousel-slide${i === current ? " active" : ""}`}>
            <img src={img.src} />
          </div>
        ))}
      </div>
      <div className="hero-carousel-dots">
        {heroCarouselImages.map((_, i) => (
          <button
            key={i}
            className={`hero-carousel-dot${i === current ? " active" : ""}`}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

const Hero = () => (
  <section className="hero-modern" id="home">
    <div className="container hero-grid">
      <div className="hero-modern-text" data-aos="fade-right">
        <h4 className="hero-subtitle">VIRGO PRAEDICANDA INTERNATIONAL SCHOOL</h4>
        <h1 className="hero-title" data-aos="fade-up" data-aos-delay="100">
          Inspire and nurture excellent children for global impact.
        </h1>
        <p className="hero-description" data-aos="fade-up" data-aos-delay="200">
          We develop young men and women with active and creative minds, a sense
          of compassion, courage, and a strong Christian character.
        </p>
        <div className="hero-actions" data-aos="fade-up" data-aos-delay="300">
          <a className="btn btn-primary" href="#about">About the School</a>
          <a className="btn btn-outline" href="/about.html" target="_blank" rel="noreferrer">See More</a>
        </div>
      </div>
      <HeroCarousel />
    </div>
  </section>
);

/* ── About — image: students.jpeg ───────────────────────────────── */
const About = () => (
  <section className="section" id="about">
    <div className="container">
      <div className="section-title" data-aos="fade-up">
        <p>Who We Are</p>
        <h2>VIRGO PRAEDICANDA INTERNATIONAL SCHOOL</h2>
      </div>

      <div className="about-layout">
        <div className="about-image-wrapper" data-aos="fade-right">
          <img src="/assets/images/students.jpeg" />
        </div>

        <div data-aos="fade-left" data-aos-delay="150">
          <p className="about-summary">
            Virgo Praedicanda International School inspires and nurtures
            excellent children for global impact. Our students grow in faith,
            discipline, independence and academic excellence.
          </p>

          <div className="vmv-stack">
            <div className="vmv-card vmv-vision">
              <span className="vmv-icon vmv-icon-vision" aria-hidden="true"></span>
              <div>
                <h3>Our Vision</h3>
                <p>To inspire and nurture excellent children for global impact.</p>
              </div>
            </div>
            <div className="vmv-card vmv-mission">
              <span className="vmv-icon vmv-icon-mission" aria-hidden="true"></span>
              <div>
                <h3>Our Mission</h3>
                <p>
                  To develop young men and women with active and creative minds,
                  compassion for others, and the courage to act on their beliefs.
                </p>
              </div>
            </div>
            <div className="vmv-card vmv-values">
              <span className="vmv-icon vmv-icon-values" aria-hidden="true"></span>
              <div>
                <h3>Core Values</h3>
                <p>
                  Academic Excellence &middot; Christian Character &middot; Faith in God &middot;
                  Love &amp; Compassion &middot; Discipline &middot; Independence
                </p>
              </div>
            </div>
          </div>

          <div style={{ marginTop: "1.75rem" }}>
            <a className="btn btn-primary" href="/about.html" target="_blank" rel="noreferrer">
              See More
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
);



const Testimonials = () => {
  const feedback = [
    {
      quote: "VIRGO PRAEDICANDA INTERNATIONAL SCHOOL is a really wonderful school which indeed builds global champions and ensures a child is competitive. Your kid can never go there and remain dumb but they will make the child the best both morally and academically.",
      name: "ABIED Books HUB",
      initials: "A",
    },
    {
      quote: "For the period of time my son has spent in VIRGO PRAEDICANDA INTERNATIONAL SCHOOL there has been a lot of progress in his Academics. Therefore, I consider VIRGO PRAEDICANDA INTERNATIONAL SCHOOL as one of the best schools in Portharcourt.",
      name: "Pat Enosareba",
      initials: "P",
    },
    {
      quote: "This is a school every well meaning Nigerians and foreigners should attend due to its high standard and quality delivery. You get more value both in character and learning. A trial will convince you.",
      name: "Mr. N. Ikechukwu",
      initials: "M",
    },
    {
      quote: "VIRGO PRAEDICANDA INTERNATIONAL SCHOOL, from the short time I have spent knowing it, is a school with class. It's exciting to see and experience the high standards upheld in VIRGO PRAEDICANDA INTERNATIONAL SCHOOL, from leadership to staff to every child in the school, nothing is taken for granted, excellence is the watch word here.",
      name: "Tobor Chunu",
      initials: "T",
    },
    {
      quote: "They offer sound academic services. An amazing school for every child.",
      name: "Mr. David B",
      initials: "D",
    },
    {
      quote: "The school is amazing, my son won two awards because of their teachers. VIRGO PRAEDICANDA INTERNATIONAL SCHOOL is the best school in the world.",
      name: "Amarachi Alabraba",
      initials: "A",
    },
  ];
  return (
    <section className="section testimonials-section" id="testimonials">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <p>Why Parents Choose Us</p>
          <h2>Why Parents Choose VIRGO PRAEDICANDA INTERNATIONAL SCHOOL</h2>
        </div>
        <div className="testimonial-grid-open">
          {feedback.map((item, i) => (
            <div className="testimonial-open-card" key={i} data-aos="fade-up" data-aos-delay={50 + i * 80}>
              <p className="testimonial-open-quote">&ldquo;{item.quote}&rdquo;</p>
              <div className="testimonial-open-author">
                <div className="testimonial-author-circle">{item.initials}</div>
                <span>{item.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

/* ── Gallery──────────────────────────────── */
const Gallery = () => {
  const photos = [
    { src: "/assets/images/kids_2.jpeg" },
    { src: "/assets/images/class-photo-3.jpeg" },
    { src: "/assets/images/creative-art.jpeg" },
    { src: "/assets/images/excursion-1.jpeg" },
    { src: "/assets/images/excursion-2.jpeg" },
    { src: "/assets/images/excursion-3.jpeg" },
    { src: "/assets/images/excursion-4.jpeg" },
    { src: "/assets/images/whatsapp-2026-07-15.jpeg" },
    { src: "/assets/images/students-3.jpeg" },
    { src: "/assets/images/students_2.jpeg" },
  ];
  const [showAll, setShowAll] = useState(false);
  const [lightbox, setLightbox] = useState(null);
  const scrollRef = React.useRef(null);

  return (
    <section className="section" id="gallery" style={{ background: "var(--bg-color)" }}>
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <p>Campus Life</p>
          <h2>Photo Gallery</h2>
        </div>

        {!showAll ? (
          <>
            <div className="gallery-carousel-wrapper">
              <div className="gallery-carousel" ref={scrollRef}>
                {photos.map((photo, i) => (
                  <div key={i} className="gallery-carousel-item" onClick={() => setLightbox(i)}>
                    <img src={photo.src} />
                  </div>
                ))}
              </div>
            </div>
            <div style={{ textAlign: "center", marginTop: "2rem" }}>
              <button className="btn btn-outline" onClick={() => setShowAll(true)}>View All Photos</button>
            </div>
          </>
        ) : (
          <>
            <div className="gallery-grid">
              {photos.map((photo, i) => (
                <div key={i} className="gallery-item" onClick={() => setLightbox(i)}>
                  <img src={photo.src} />
                  <div className="gallery-overlay"><span>View</span></div>
                </div>
              ))}
            </div>
            <div style={{ textAlign: "center", marginTop: "2rem" }}>
              <button className="btn btn-outline" onClick={() => setShowAll(false)}>Show Less</button>
            </div>
          </>
        )}
      </div>

      {lightbox !== null && (
        <div className="lightbox" onClick={() => setLightbox(null)}>
          <button className="lightbox-close" onClick={() => setLightbox(null)}>&times;</button>
          <button className="lightbox-arrow lightbox-prev" onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + photos.length) % photos.length); }}>&#10094;</button>
          <img src={photos[lightbox].src} onClick={(e) => e.stopPropagation()} />
          <button className="lightbox-arrow lightbox-next" onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % photos.length); }}>&#10095;</button>
        </div>
      )}
    </section>
  );
};

/* ── Contact — image: graduates.jpeg freed from elsewhere ────────── */
const Contact = () => (
  <section className="contact-section" id="contact">
    <div className="container">
      <div className="section-title" data-aos="fade-up">
        <p>Contact Us</p>
        <h2>Get in Touch</h2>
      </div>
      <div className="contact-card" data-aos="fade-up" data-aos-delay="100">
        <img src="/assets/images/building.jpeg" />
        <div className="contact-panel">
          <h2>Reach Virgo Praedicanda</h2>
          <div className="contact-item">
            <div className="contact-icon contact-icon-location"></div>
            <div>
              <h4>Address</h4>
              <p>No. 9 Marina Close, Woji,<br />Port Harcourt, Rivers State, Nigeria</p>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon contact-icon-phone"></div>
            <div>
              <h4>Phone</h4>
              <p>+234 809 484 9278<br />+234 812 266 8724</p>
            </div>
          </div>
          <div className="contact-item">
            <div className="contact-icon contact-icon-email"></div>
            <div>
              <h4>Email</h4>
              <p>info@ashmerlynintlschool.com.ng</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ── School Brand Banner — before footer ─────────────────────────── */
const SchoolBrand = () => (
  <section className="school-brand-section">
    <div className="school-brand-inner">
      <img src="/assets/images/logo.png" className="school-brand-logo" alt="Virgo Praedicanda logo" />
      <h2 className="school-brand-name">VIRGO PRAEDICANDA INTERNATIONAL SCHOOL</h2>
      <p className="school-brand-tagline">Making Excellence A Habit.</p>
      <p className="school-brand-desc">
        An independent Christian school committed to inspiring and nurturing
        excellent children for global impact — developing young men and women
        with active minds, compassion, and strong character.
      </p>
    </div>
  </section>
);

const Footer = () => (
  <footer className="site-footer-bar">
    <p>&copy; {new Date().getFullYear()} VIRGO PRAEDICANDA INTERNATIONAL SCHOOL. All rights reserved.</p>
  </footer>
);

function App() {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, offset: 100 });
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Testimonials />
      <Contact />
      <SchoolBrand />
      <Footer />
    </>
  );
}

export default App;
