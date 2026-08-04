import { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import OurAchievements from "./components/OurAchievements.jsx";

/* ── Hero Carousel Data ─────────────────────────────────────────────────── */
const heroCarouselImages = [
  {
    src: "/assets/images/building.jpeg",
    alt: "Primary school students in uniform",
    subtitle: "Welcome to Virgo Praedicanda International School",
    title: "Making Excellence A Habit",
    description:
      "We nurture confident, disciplined and academically excellent students prepared for global opportunities.",
  },
  {
    src: "/assets/images/competitions/science/school_photo_54.jpg",
    alt: "Students during class activities",
    subtitle: "A Place Where Learning Never Stops",
    title: "Building Future Leaders",
    description:
      "Combining the Nigerian, British, American and Singaporean curriculum to help every child reach their full potential.",
  },
  {
    src: "/assets/images/art/school_photo_70.jpg",
    alt: "Students engaging in collaborative learning",
    subtitle: "Academic Excellence",
    title: "Inspiring Young Minds",
    description:
      "Creating an environment where children grow intellectually, morally and socially.",
  },
  {
    src: "./assets/images/skill/school_photo_12.jpg",
    alt: "Smiling students on campus",
    subtitle: "Quality Education",
    title: "Every Child Matters",
    description:
      "Empowering children with knowledge, confidence and strong values for lifelong success.",
  },
];

/* ── Hero Carousel Component ────────────────────────────────────────────── */
const HeroCarousel = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % heroCarouselImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const goToPrev = () => {
    setCurrent((prev) => (prev - 1 + heroCarouselImages.length) % heroCarouselImages.length);
  };

  const goToNext = () => {
    setCurrent((prev) => (prev + 1) % heroCarouselImages.length);
  };

  return (
    <div className="hero-carousel" data-aos="fade-up" data-aos-delay="200">
      {heroCarouselImages.map((slide, index) => (
        <div
          key={index}
          className={`hero-slide ${index === current ? "active" : ""}`}
          style={{ backgroundImage: `url(${slide.src})` }}
        >
          <div className="hero-overlay" />

          <div className="hero-content">
            <p>{slide.subtitle}</p>
            <h2>{slide.title}</h2>
            <span>{slide.description}</span>

            <div className="hero-buttons">
              <a
                href="https://portal.schoolpaddi.com"
                className="hero-btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Portal
              </a>
            </div>
          </div>
        </div>
      ))}

      {/* Hero Manual Arrows */}
      <button className="hero-arrow hero-prev" onClick={goToPrev} aria-label="Previous slide">
        &#10094;
      </button>
      <button className="hero-arrow hero-next" onClick={goToNext} aria-label="Next slide">
        &#10095;
      </button>

      {/* Hero Dots */}
      <div className="hero-carousel-dots">
        {heroCarouselImages.map((_, index) => (
          <button
            key={index}
            className={`hero-carousel-dot ${current === index ? "active" : ""}`}
            onClick={() => setCurrent(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

/* ── Quality Education Section ──────────────────────────────────────────── */
const QualityEducation = () => (
  <section className="quality-education-section">
    <div className="container">
      <div className="quality-education-layout" data-aos="fade-up">
        <div className="quality-education-content">
          <h3 className="quality-education-title">
            Quality Education That Shapes the Future
          </h3>
          <p className="quality-education-text">
            At Virgo Praedicanda Schools, we aim to train every child to be
            distinct and confidently face the future. We believe education is
            not only academics but in morals, sports, presentations, confidence
            and every other area of life.
          </p>
          <p className="quality-education-text">
            We use a mix of British, Nigerian, American, and Singaporean curricula to ensure that all
            our students are able to compete successfully both at national and
            international standards.
          </p>
        </div>
        <div className="quality-education-image">
          <img
            src="/assets/images/excursion/school_photo_66.jpg"
            alt="Students on educational excursion"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </div>
  </section>
);

/* ── Academic Excellence Section ───────────────────────────────────────── */
const academicImages = [
  "/assets/images/school_photo_1.jpg",
  "/assets/images/school_photo_2.jpeg",
  "/assets/images/school_photo_3.jpeg",
];

const AcademicExcellence = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % academicImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="academic-excellence-section">
      <div className="container">
        <div className="academic-excellence-layout" data-aos="fade-up">
          <div className="academic-excellence-content">
            <h2 className="academic-excellence-title">
              Excellence In Academics And Life
            </h2>
            <p className="academic-excellence-text">
              With <strong>8 years</strong> of experience, Virgo Praedicanda
              Schools, one of the best schools in Port Harcourt, is committed to
              academic excellence and the nurturing of responsible, courteous,
              and happy students.
            </p>
          </div>
          <div className="academic-excellence-carousel">
            <div className="academic-carousel-track">
              {academicImages.map((src, i) => (
                <div
                  key={i}
                  className={`academic-carousel-slide ${i === currentImage ? "active" : ""}`}
                >
                  <img
                    src={src}
                    alt={`Academic excellence showcase ${i + 1}`}
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

/* ── Testimonials Section ───────────────────────────────────────────────── */
const feedbackData = [
  {
    quote:
      "VIRGO PRAEDICANDA INTERNATIONAL SCHOOL is a really wonderful school which indeed builds global champions and ensures a child is competitive. Your kid can never go there and remain dumb but they will make the child the best both morally and academically.",
    name: "ABIED Books HUB",
    initials: "A",
  },
  {
    quote:
      "For the period of time my son has spent in VIRGO PRAEDICANDA INTERNATIONAL SCHOOL there has been a lot of progress in his Academics. Therefore, I consider VIRGO PRAEDICANDA INTERNATIONAL SCHOOL as one of the best schools in Portharcourt.",
    name: "Pat Enosareba",
    initials: "P",
  },
  {
    quote:
      "This is a school every well meaning Nigerians and foreigners should attend due to its high standard and quality delivery. You get more value both in character and learning. A trial will convince you.",
    name: "Mr. N. Ikechukwu",
    initials: "M",
  },
  {
    quote:
      "VIRGO PRAEDICANDA INTERNATIONAL SCHOOL, from the short time I have spent knowing it, is a school with class. It's exciting to see and experience the high standards upheld in VIRGO PRAEDICANDA INTERNATIONAL SCHOOL, from leadership to staff to every child in the school, nothing is taken for granted, excellence is the watch word here.",
    name: "Tobor Chunu",
    initials: "T",
  },
  {
    quote:
      "They offer sound academic services. An amazing school for every child.",
    name: "Mr. David B",
    initials: "D",
  },
  {
    quote:
      "The school is amazing, my son won two awards because of their teachers. VIRGO PRAEDICANDA INTERNATIONAL SCHOOL is the best school in the world.",
    name: "Amarachi Alabraba",
    initials: "A",
  },
];

const Testimonials = () => (
  <section className="section testimonials-section" id="testimonials">
    <div className="container">
      <div className="section-title" data-aos="fade-up">
        <h2>Why Parents Choose VIRGO PRAEDICANDA INTERNATIONAL SCHOOL</h2>
      </div>
      <div className="testimonial-grid-open">
        {feedbackData.map((item, i) => (
          <div
            className="testimonial-open-card"
            key={i}
            data-aos="fade-up"
            data-aos-delay={50 + i * 80}
          >
            <p className="testimonial-open-quote">
              &ldquo;{item.quote}&rdquo;
            </p>
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

/* ── VPIS Gallery ───────────────────────────────────────────────────────── */
const galleryImages = [
  "/assets/images/farm/school_photo_78.jpg",
  "/assets/images/art/school_photo_69.jpg",
  "/assets/images/excursion/excursion 1.jpeg",
  "/assets/images/interhouse/school_photo_35.jpg",
  "/assets/images/home_econs/school_photo_45.jpg",
  "/assets/images/literacy/financial/school_photo_22.jpg",
  "/assets/images/competitions/science/school_photo_54.jpg",
  "/assets/images/literacy/book_day/school_photo_17.jpg",
  "/assets/images/literacy/dental/school_photo_23.jpg",
];

const VPISGallery = () => (
  <section className="vpis-gallery-section" id="gallery">
    <div className="container">
      <div className="section-title" data-aos="fade-up">
        <p>Campus Life</p>
        <h2>VPIS Gallery</h2>
      </div>

      <div className="gallery-grid-3x3">
        {galleryImages.map((src, i) => (
          <div
            key={i}
            className="gallery-item-simple"
            data-aos="fade-up"
            data-aos-delay={i * 100}
          >
            <img
              src={src}
              alt={`Campus activities gallery image ${i + 1}`}
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);

/* ── Contact Section ────────────────────────────────────────────────────── */
const Contact = () => (
  <section className="contact-section" id="contact">
    <div className="container">
      <h2 className="contact-heading" data-aos="fade-up">
        Contact Us
      </h2>
      <div className="contact-card" data-aos="fade-up" data-aos-delay="100">
        <div className="contact-img-wrap">
          <img
            src="/assets/images/building.jpeg"
            alt="Virgo Praedicanda school building exterior"
            loading="lazy"
            decoding="async"
          />
        </div>

        <div className="contact-panel">
          <div className="contact-item">
            <div className="contact-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0 1 18 0z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
            </div>
            <div>
              <h4>Address</h4>
              <p>
               Woji Campus- No. 9, Marina Close
                <br />
                Woji, Port Harcourt, Rivers State,
                <br />
                Nigeria.
              </p>
               <br />
              <p>
               Chinda Campus- No. 100 Ada George Road
                <br />
                Chinda, Port Harcourt, Rivers  State 
                <br />
                Nigeria.
              </p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.38 2 2 0 0 1 3.6 1.21h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.82a16 16 0 0 0 6.29 6.29l1.17-.96a2 2 0 0 1 2.11-.45c.9.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
              </svg>
            </div>
            <div>
              <h4>Phone</h4>
              <p>
                <a href="tel:+2349132554783">+234 913 255 4783</a>
              </p>
            </div>
          </div>

          <div className="contact-item">
            <div className="contact-icon">
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <div>
              <h4>Email</h4>
              <p>
                <a href="mailto:info@schools.com">info@schools.com</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

/* ── School Brand Banner ────────────────────────────────────────────────── */
const SchoolBrand = () => (
  <section className="school-brand-section">
    <div className="school-brand-inner">
      <img
        src="/assets/images/logo.png"
        className="school-brand-logo"
        alt="Virgo Praedicanda official school logo"
        loading="lazy"
        decoding="async"
      />
      <h2 className="school-brand-name">
        VIRGO PRAEDICANDA INTERNATIONAL SCHOOL
      </h2>
      <p className="school-brand-tagline">Making Excellence A Habit.</p>
      <p className="school-brand-desc">
        An independent Christian school committed to inspiring and nurturing
        excellent children for global impact — developing young men and women
        with active minds, compassion, and strong character.
      </p>
    </div>
  </section>
);

/* ── Footer ─────────────────────────────────────────────────────────────── */
const Footer = () => (
  <footer className="site-footer-bar">
    <p>
      &copy; {new Date().getFullYear()} VIRGO PRAEDICANDA INTERNATIONAL SCHOOL.
      All rights reserved.
    </p>
  </footer>
);

/* ── Recent Competitions Section ────────────────────────────────────────── */
const competitionImages = [
  "/assets/images/competitions/science/school_photo_54.jpg",
  "/assets/images/competitions/science/school_photo_55.jpg",
  "/assets/images/competitions/bee/school_photo_52.jpg",
  "/assets/images/competitions/bee/school_photo_53.jpg",
];

const RecentCompetitions = () => {
  const [currentCompetition, setCurrentCompetition] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentCompetition((prev) => (prev + 1) % competitionImages.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const goToPrevCompetition = () => {
    setCurrentCompetition(
      (prev) => (prev - 1 + competitionImages.length) % competitionImages.length
    );
  };

  const goToNextCompetition = () => {
    setCurrentCompetition((prev) => (prev + 1) % competitionImages.length);
  };

  return (
    <section className="recent-competitions-section" id="competitions">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <h2>Recent Competitions</h2>
          <p>Celebrating our students' achievements and excellence</p>
        </div>

        <div
          className="competitions-carousel"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="competitions-track">
            {competitionImages.map((src, i) => (
              <div
                key={i}
                className={`competition-slide ${i === currentCompetition ? "active" : ""}`}
              >
                <img
                  src={src}
                  alt={`Competition highlight ${i + 1}`}
                  loading="lazy"
                  decoding="async"
                />
              </div>
            ))}
          </div>

          <button
            className="competition-arrow competition-prev"
            onClick={goToPrevCompetition}
            aria-label="Previous competition"
          >
            &#10094;
          </button>
          <button
            className="competition-arrow competition-next"
            onClick={goToNextCompetition}
            aria-label="Next competition"
          >
            &#10095;
          </button>

          <div className="competition-dots">
            {competitionImages.map((_, i) => (
              <button
                key={i}
                className={`competition-dot ${i === currentCompetition ? "active" : ""}`}
                onClick={() => setCurrentCompetition(i)}
                aria-label={`Go to competition ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

/* ── App Component ──────────────────────────────────────────────────────── */
function App() {
  return (
    <>
      <Navbar />
      <HeroCarousel />
      <AcademicExcellence />
      <QualityEducation />
      <RecentCompetitions />
      <OurAchievements />
      <Testimonials />
      <Contact />
      <VPISGallery />
      <SchoolBrand />
      <Footer />
    </>
  );
}

export default App;
