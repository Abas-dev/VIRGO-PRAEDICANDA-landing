import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

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
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-page">
      <Navbar />
      
      {/* Hero */}
      <div className="about-hero">
        <div className="hero-label">Have Questions?</div>
        <h1 className="hero-title">Frequently Asked Questions</h1>
        <p className="hero-tagline">Find answers to common questions about VPIS</p>
      </div>

      <div className="page">
        <div className="faq-intro">
          <p>
            We've compiled answers to the most frequently asked questions about Virgo Praedicanda 
            International School. If you don't find what you're looking for, please don't hesitate 
            to contact us directly.
          </p>
        </div>

        <div className="faq-list">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
            >
              <button 
                className="faq-question"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
              >
                <span>{faq.question}</span>
                <span className="faq-icon">{openIndex === index ? '−' : '+'}</span>
              </button>
              <div className="faq-answer">
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Contact CTA */}
        <div className="resources-cta">
          <h3>Still Have Questions?</h3>
          <p>Our admissions team is here to help you with any additional questions.</p>
          <div className="cta-buttons">
            <a href="tel:+2349132554783" className="btn-primary">Call +234 913 255 4783</a>
            <a
              href="https://wa.me/2349132554783?text=Hello!%20I%20have%20a%20question%20about%20VPIS."
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              Chat on WhatsApp
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default FAQ;
