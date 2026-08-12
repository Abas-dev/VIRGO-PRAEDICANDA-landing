import { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import OurAchievements from "./components/OurAchievements.jsx";
import SchoolStats from "./components/SchoolStats.jsx";

/* ── Hero Carousel Data ─────────────────────────────────────────────────── */
const heroCarouselImages = [
  {
    src: "/assets/images/carousel3.png",
    alt: "Primary school students in uniform",
    subtitle: "Welcome to Virgo Praedicanda International School",
    title: "Making Excellence A Habit",
    description:
      "We nurture confident, disciplined and academically excellent students prepared for global opportunities.",
  },
  {
    src: "/assets/images/carousel2.png",
    alt: "Students during class activities",
    subtitle: "A Place Where Learning Never Stops",
    title: "Building Future Leaders",
    description:
      "Combining the Nigerian, British, American and Singaporean curriculum to help every child reach their full potential.",
  },
  {
    src: "/assets/images/carousel1.png",
    alt: "Students engaging in collaborative learning",
    subtitle: "Academic Excellence",
    title: "Inspiring Young Minds",
    description:
      "Creating an environment where children grow intellectually, morally and socially.",
  },
  {
    src: "./assets/images/carousel4.png",
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
                href="https://wa.me/2349132554783?text=Hello!%20I%27d%20like%20to%20book%20a%20school%20tour."
                className="hero-btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                Book a School Tour
              </a>
              <a
                href="/admissions#download"
                className="hero-btn-secondary"
              >
                Apply Now
              </a>
              <a
                href="/assets/files/VPIS PROSPECTUS 2026-2027 ACADEMIC SESSION (1).pdf"
                className="hero-btn-secondary"
                download
              >
                Download Prospectus
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

/* ── Accreditation Badges Section ──────────────────────────────────────── */
const accreditationBadges = [
  { src: "/assets/images/cambridge.png", alt: "Cambridge Assessment International Education" },
  { src: "/assets/images/pearson.png", alt: "Pearson Edexcel", mono: true },
  { src: "/assets/images/scholastic.png", alt: "Scholastic", mono: true },
];

const AccreditationBadges = () => (
  <section className="accreditation-section">
    <div className="container">
      <div className="accreditation-badge">
        {accreditationBadges.map((badge) => (
          <div className="accreditation-badge-chip" key={badge.src}>
            <img
              className={badge.mono ? "mono-logo" : undefined}
              src={badge.src}
              alt={badge.alt}
              loading="lazy"
              decoding="async"
            />
          </div>
        ))}
      </div>
    </div>
  </section>
);


/* ── Why VPIS Section ──────────────────────────────────────────────── */
const WhyVPIS = () => (
  <section className="why-vpis-section">
    <div className="container">
      <div className="why-vpis-layout" data-aos="fade-up">
        <div className="why-vpis-content">
          <p className="section-label">Why Choose Us</p>
          <h2 className="section-heading-left">Why VPIS</h2>
          <p className="why-vpis-lead">
            At Virgo Praedicanda International School, we don't just prepare students for exams. 
            We prepare them for life, leadership, and global impact.
          </p>
          <p className="why-vpis-highlight">
            Every child at VPIS is <strong>discovered, developed, and deployed for greatness</strong> through 
            academic excellence, Christian character, and faith in God.
          </p>
        </div>
        <div className="why-vpis-image">
          <img
            src="/assets/images/class photo.jpeg"
            alt="Students in classroom at VPIS"
            loading="lazy"
            decoding="async"
          />
        </div>
      </div>
    </div>
  </section>
);

/* ── Academic Advantage Section ─────────────────────────────────────────── */
const AcademicAdvantage = () => (
  <section className="academic-advantage-section">
    <div className="container">
      <div className="advantage-layout" data-aos="fade-up">
        <div className="advantage-image">
          <img
            src="/assets/images/competitions/bee/school_photo_52.jpg"
            alt="Students at academic competition"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="advantage-content">
          <p className="section-label">Excellence in Education</p>
          <h2 className="section-heading-left">Our Academic Advantage</h2>
          <h3 className="advantage-subtitle">The Dual-Pathway to Global Universities</h3>
          <ul className="advantage-list">
            <li>
              <svg className="list-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <span><strong>Primary:</strong> Pearson Edexcel iPrimary Curriculum</span>
            </li>
            <li>
              <svg className="list-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <span><strong>Secondary:</strong> Cambridge International - Checkpoint & IGCSE</span>
            </li>
            <li>
              <svg className="list-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <span><strong>Global Exams:</strong> WAEC, SAT, IELTS</span>
            </li>
            <li>
              <svg className="list-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
              <span><strong>Coming Soon:</strong> Sixth Form College with UK Partner</span>
            </li>
          </ul>
          <p className="advantage-conclusion">
            With VPIS, your child has access to top universities in Nigeria, UK, US, Canada, and beyond.
          </p>
          <a href="/academics" className="btn-advantage">Explore Our Curriculum</a>
        </div>
      </div>
    </div>
  </section>
);

/* ── Life at VPIS Section ───────────────────────────────────────────────── */
const LifeAtVPIS = () => (
  <section className="life-at-vpis-section">
    <div className="container">
      <div className="life-layout" data-aos="fade-up">
        <div className="life-image">
          <img
            src="/assets/images/interhouse/school_photo_35.jpg"
            alt="Students at campus activities"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="life-content">
          <p className="section-label">Campus Experience</p>
          <h2 className="section-heading-left">Life at VPIS</h2>
          <p className="life-lead">
            A nurturing environment where academics meet character.
          </p>
          <p className="life-description">
            Modern classrooms, science labs, library, sports, clubs, and spiritual formation.
          </p>
          <p className="life-emphasis">
            <em>Every child is known, loved, and challenged to excel.</em>
          </p>
          <a href="/vpis-pictures" className="btn-life">See Gallery</a>
        </div>
      </div>
    </div>
  </section>
);

/* ── Proprietor Message Preview ─────────────────────────────────────────── */
const ProprietorPreview = () => (
  <section className="proprietor-preview-section">
    <div className="container">
      <div className="section-title" data-aos="fade-up">
        <p>Leadership Vision</p>
        <h2>Message from Proprietoress</h2>
      </div>
      <div className="proprietor-preview-content" data-aos="fade-up" data-aos-delay="100">
        <blockquote className="proprietor-quote">
          "At VPIS, we believe every child is a gift from God and a solution to the world. 
          Our goal is to raise leaders who are brilliant, rooted in faith, and ready to transform society."
        </blockquote>
        <p className="proprietor-attribution">
          <strong>- Dr. C.V. Dimmwobi, Proprietoress</strong>
        </p>
        <a href="/proprietor-message" className="btn-proprietor">Read Full Message</a>
      </div>
    </div>
  </section>
);

/* ── Final CTA Section ──────────────────────────────────────────────────── */
const FinalCTA = () => (
  <section className="final-cta-section">
    <div className="container">
      <div className="final-cta-content" data-aos="fade-up">
        <h2>Give Your Child the VPIS Advantage</h2>
        <p>Limited spaces available for 2026/2027 Academic Session.</p>
        <div className="final-cta-buttons">
          <a href="/admissions#download" className="btn-cta-primary">Apply Now</a>
          <a 
            href="https://wa.me/2349132554783?text=Hello!%20I%27d%20like%20to%20learn%20more%20about%20VPIS." 
            target="_blank" 
            rel="noopener noreferrer"
            className="btn-cta-secondary"
          >
            Chat on WhatsApp
          </a>
        </div>
      </div>
    </div>
  </section>
);

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

      <div className="gallery-cta" data-aos="fade-up" data-aos-delay="200">
        <a href="/vpis-pictures" className="btn-gallery">See Full Gallery</a>
      </div>
    </div>
  </section>
);

/* ── FAQ Section ─────────────────────────────────────────────────────────── */
const FAQSection = () => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const faqs = [
    {
      question: "Do you take Muslim children?",
      answer: "Yes, we welcome children of all faiths. While we are a Christian school with Christian values and chapel services, we respect and accommodate students from all religious backgrounds."
    },
    {
      question: "Do you have school bus service?",
      answer: "No, we do not currently provide school bus service. Parents are responsible for transportation to and from school."
    },
    {
      question: "What is the school academic year?",
      answer: "Our academic year runs from September to July, following the standard Nigerian academic calendar."
    },
    {
      question: "What age groups do you admit?",
      answer: "We admit children from six weeks of age (Creche) through Secondary School, covering Early Years, Nursery, Primary, and Secondary education levels."
    },
    {
      question: "What curriculum do you follow?",
      answer: "We follow a dual-curriculum approach. For Primary, we use the British Pearson Edexcel iPrimary Curriculum. For Secondary, we are a Cambridge International School offering Cambridge Checkpoint and IGCSE. We also prepare students for WAEC, SAT, and IELTS examinations."
    },
    {
      question: "How can I apply for admission?",
      answer: "You can download our admission form from the Admissions page, complete it, and submit it to our admissions office. You can also contact us via WhatsApp or phone to schedule a tour and begin the application process."
    },
    {
      question: "Do you offer scholarships?",
      answer: "Yes, we offer academic excellence scholarships for outstanding students. Please contact our admissions office for more information on scholarship opportunities and eligibility criteria."
    },
    {
      question: "What are your school fees?",
      answer: "Our fees depend on the class level. Please contact our admissions office directly for the current fee schedule and payment plans for your child's class."
    },
    {
      question: "Do you have both day and boarding facilities?",
      answer: "We are currently a day school. Students attend classes during the day and return home in the evening."
    },
    {
      question: "What extracurricular activities do you offer?",
      answer: "We offer a wide range of activities including sports, music, art, coding, STEM clubs, debate, public speaking, ballet, and leadership programs. We also have chapel services and community service opportunities."
    }
  ];

  const toggleFAQ = (index) => {
    if (openIndexes.includes(index)) {
      setOpenIndexes(openIndexes.filter(i => i !== index));
    } else {
      setOpenIndexes([...openIndexes, index]);
    }
  };

  return (
    <section className="faq-section" id="faq">
      <div className="container">
        <div className="section-title" data-aos="fade-up">
          <p>Have Questions?</p>
          <h2>Frequently Asked Questions</h2>
        </div>

        <div className="faq-intro" data-aos="fade-up" data-aos-delay="100">
          <p>
            Find answers to common questions about Virgo Praedicanda International School. 
            If you need more information, please don't hesitate to contact us.
          </p>
        </div>

        <div className="faq-list" data-aos="fade-up" data-aos-delay="200">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndexes.includes(index) ? 'open' : ''}`}
            >
              <button 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndexes.includes(index)}
              >
                <span>{faq.question}</span>
                <span className="faq-icon">{openIndexes.includes(index) ? '−' : '+'}</span>
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

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
              <h4>Our Campuses</h4>
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
                <a href="mailto:Virgopraedicandaintschool@gmail.com">Virgopraedicandaintschool@gmail.com</a>
                <br />
                <a href="mailto:Virgopotensintentionalschool@gmail.com">Virgopotensintentionalschool@gmail.com</a>
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

/* ── Key Highlights Section ──────────────────────────────────────────────── */
const KeyHighlights = () => (
  <section className="key-highlights-section">
    <div className="container">
      <div className="section-title" data-aos="fade-up">
        <p>What Makes Us Different</p>
        <h2>Key Highlights</h2>
      </div>
      <div className="highlights-grid" data-aos="fade-up" data-aos-delay="100">
        <div className="highlight-card">
          <div className="highlight-icon-wrapper">
            <svg className="highlight-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 10v6M2 10l10-5 10 5-10 5z"/>
              <path d="M6 12v5c3 3 9 3 12 0v-5"/>
            </svg>
          </div>
          <h3>Dual Curriculum</h3>
          <p>
            Cambridge International and Pearson Edexcel programs preparing students for global opportunities
          </p>
        </div>
        <div className="highlight-card">
          <div className="highlight-icon-wrapper">
            <svg className="highlight-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5"/>
              <path d="M2 12l10 5 10-5"/>
            </svg>
          </div>
          <h3>Christian Values</h3>
          <p>
            Faith-based education building strong moral character and spiritual foundation
          </p>
        </div>
        <div className="highlight-card">
          <div className="highlight-icon-wrapper">
            <svg className="highlight-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/>
              <path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/>
              <path d="M4 22h16"/>
              <path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/>
              <path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/>
              <path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/>
            </svg>
          </div>
          <h3>Proven Excellence</h3>
          <p>
            98 medals won this year in academic competitions and inter-house sports
          </p>
        </div>
      </div>
    </div>
  </section>
);

/* ── Short About Section ──────────────────────────────────────────────── */
const ShortAbout = () => (
  <section className="short-about-section">
    <div className="container">
      <div className="short-about-layout" data-aos="fade-up">
        <div className="short-about-image">
          <img
            src="/assets/images/graduates.jpeg"
            alt="VPIS graduates"
            loading="lazy"
            decoding="async"
          />
        </div>
        <div className="short-about-content">
          <div className="section-title-left">
            <p style={{ color: 'var(--primary-light)', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '1px', fontSize: '1.1rem', marginBottom: '0.5rem' }}>About Us</p>
            <h2>Building Global Champions</h2>
          </div>
          <p>
            Virgo Praedicanda International School is an independent Christian school 
            committed to inspiring and nurturing excellent children for global impact.
          </p>
          <p>
            We develop young men and women with active minds, compassion, and strong 
            character through a blend of Nigerian, British, American, and Singaporean curricula.
          </p>
          <a href="/about" className="btn-read-more">Learn More About Us</a>
        </div>
      </div>
    </div>
  </section>
);

/* ── App Component ──────────────────────────────────────────────────────── */
function App() {
  return (
    <>
      <Navbar />
      <HeroCarousel />
      <AccreditationBadges />
      <KeyHighlights />
      <ShortAbout />
      <WhyVPIS />
      <AcademicAdvantage />
      <AcademicExcellence />
      <Testimonials />
      <ProprietorPreview />
      <OurAchievements />
      <SchoolStats />
      <VPISGallery />
      <FAQSection />
      <FinalCTA />
      <Contact />
      <SchoolBrand />
      <Footer />
    </>
  );
}

export default App;