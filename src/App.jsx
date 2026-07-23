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
            <li><a href="/about.html" target="_blank" rel="noreferrer">About</a></li>
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
        {/* Header */}
        <div className="drawer-header">
          <div className="drawer-brand">
            <img src="/assets/images/logo.png" className="drawer-logo" alt="logo" />
            <span className="drawer-brand-name">Virgo Praedicanda Int'l Schools</span>
          </div>
          <button className="drawer-close-btn" onClick={() => setMenuOpen(false)} aria-label="Close menu">✕</button>
        </div>

        {/* Nav links */}
        <ul className="drawer-links">
          <li>
            <a href="/about.html" target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>About</a>
          </li>
          <li><a href="#testimonials" onClick={() => setMenuOpen(false)}>Testimonials</a></li>
          <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
          <li>
            <a href="/gallery.html" target="_blank" rel="noreferrer" onClick={() => setMenuOpen(false)}>Gallery</a>
          </li>
        </ul>

        {/* CTA buttons */}
        <div className="drawer-actions">
          <a className="drawer-btn drawer-btn-primary" href="tel:+234 913 255 4783">Call Us</a>
          <a className="drawer-btn drawer-btn-outline" href="#contact" onClick={() => setMenuOpen(false)}>Visit portal</a>
        </div>
      </div>
    </header>
  );
};

/* ── Hero Carousel — 4 images ─────────────────────── */
const heroCarouselImages = [
  { src: "/assets/images/primary.jpeg" },
  { src: "/assets/images/class photo_3.jpeg" },
  { src: "/assets/images/students.jpeg" },
  { src: "/assets/images/students_3.jpeg" },
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
    <div className="container hero-stacked">
      {/* Text block — title + description */}
      <div className="hero-stacked-text" data-aos="fade-up">
        <p className="hero-tagline">Building Global Champions</p>
        <h1 className="hero-title">VIRGO PRAEDICANDA INTERNATIONAL SCHOOL</h1>
        <p className="hero-description">
          We develop young men and women with active and creative minds, a sense
          of compassion, courage, and a strong Christian character, ready to
          thrive in a rapidly changing world.
        </p>
      </div>

      {/* Carousel — order-2 on mobile */}
      <div className="hero-stacked-carousel hero-carousel-order" data-aos="fade-up" data-aos-delay="200">
        <HeroCarousel />
      </div>
    </div>
  </section>
);

/* ── About — accordion style matching design image ───────────────────────────────── */
const vmvItems = [
  {
    key: "vision",
    title: "Our Vision",
    content:
      "Our vision is to raise children with strong, personable character equipped with knowledge that can compete globally. We inspire and nurture excellent children for global impact — developing confident, compassionate leaders who are rooted in faith and ready to thrive in a rapidly changing world.",
    image: "/assets/images/students_2.jpeg",
  },
  {
    key: "mission",
    title: "Our Mission",
    content:
      "Our mission is to develop young men and women with active and creative minds, a sense of compassion for others, and the courage to act on their beliefs and dreams. We are committed to providing a world-class education that integrates academic rigour with Christian values, equipping every learner with the knowledge, skills, and character needed to make a meaningful difference in society.",
    image: "/assets/images/outdoor.jpeg",
  },
  {
    key: "values",
    title: "Our Core Values",
    content:
      "Everything we do at Virgo Praedicanda is shaped by our core values: Academic Excellence, Christian Character, Faith in God, Love & Compassion, Discipline, and Independence. These principles are woven into every lesson, every interaction, and every opportunity we provide — ensuring that our students grow not just in knowledge, but in wisdom, integrity, and purpose.",
    image: "/assets/images/kids.jpeg",
  },
];

const About = () => {
  const [open, setOpen] = useState("vision");

  const active = vmvItems.find((i) => i.key === open);

  return (
    <section className="section" id="about">
      <div className="container">
        <div className="about-layout">
          {/* Left — heading + summary + accordion */}
          <div className="about-left" data-aos="fade-right">
            <h2 className="about-heading">About us</h2>
            <p className="about-summary">
              The founding of Virgo Praedicanda International School was
              motivated by the desire to provide top-notch instruction. Our bond
              is our word, or what we pledge to our parents. The school is the
              pinnacle of achievement, teamwork, intelligence, discipline, and
              devotion.
            </p>

            <div className="vmv-accordion">
              {vmvItems.map((item) => {
                const isOpen = open === item.key;
                return (
                  <div className="vmv-acc-item" key={item.key}>
                    <button
                      className={`vmv-acc-header${isOpen ? " active" : ""}`}
                      onClick={() => setOpen(isOpen ? null : item.key)}
                      aria-expanded={isOpen}
                    >
                      <span>{item.title}</span>
                      <span className="vmv-acc-icon">{isOpen ? "‹" : "›"}</span>
                    </button>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right — image + active description below */}
          <div className="about-right" data-aos="fade-left" data-aos-delay="150">
            <div className="about-acc-img-desktop">
              <img
                src={active ? active.image : "/assets/images/students.jpeg"}
                alt={active ? active.title : "About"}
              />
            </div>
            {active && (
              <p className="about-acc-desc">{active.content}</p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};



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
    { src: "/assets/images/class photo_3.jpeg" },
    { src: "/assets/images/creative art.jpeg" },
    { src: "/assets/images/excursion 1.jpeg" },
    { src: "/assets/images/excursion 2.jpeg" },
    { src: "/assets/images/excursion 3.jpeg" },
    { src: "/assets/images/excursion 4.jpeg" },
    { src: "/assets/images/graduates.jpeg" },
    { src: "/assets/images/students_3.jpeg" },
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

/* ── Contact ────────── */
const Contact = () => (
  <section className="contact-section" id="contact">
    <div className="container">
      <h2 className="contact-heading" data-aos="fade-up">Contact Us</h2>
      <div className="contact-card" data-aos="fade-up" data-aos-delay="100">

        {/* Left — building photo */}
        <div className="contact-img-wrap">
          <img src="/assets/images/building.jpeg" alt="School building" />
        </div>

        {/* Right — info panel */}
        <div className="contact-panel">

          <div className="contact-item">
            <div className="contact-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <div>
              <h4>Address</h4>
              <p>New Road, Relief | Victory Estate,<br />Elelenwo, Port Harcourt, Rivers State,<br />Nigeria</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.29 6.29l1.17-.96a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
            </div>
            <div>
              <h4>Phone</h4>
              <p>+234 913 255 4783</p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                <polyline points="22,6 12,13 2,6"/>
              </svg>
            </div>
            <div>
              <h4>Email</h4>
              <p>info@schools.com</p>
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
