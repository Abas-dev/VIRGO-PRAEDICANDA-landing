import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const Resources = () => {
  // Resource data structure - easy to update when real documents are available
  const resources = [
    {
      title: "School Prospectus 2026-2027",
      description: "Comprehensive guide to VPIS programs, facilities, and academic offerings for 2026/2027 academic session.",
      type: "PDF Document",
      icon: "document",
      available: true,
      downloadUrl: "/assets/files/VPIS PROSPECTUS 2026-2027 ACADEMIC SESSION (1).pdf",
      date: "2026",
      size: "PDF"
    },
    {
      title: "Admission Form",
      description: "Download and complete this form to begin your application to VPIS. Submit to our admissions office.",
      type: "PDF Document",
      icon: "form",
      available: true,
      downloadUrl: "/assets/files/admission form.pdf",
      date: "Current",
      size: "PDF"
    },
    {
      title: "Year Book 2026",
      description: "Annual publication celebrating achievements, events, and memories from the 2026 academic year.",
      type: "PDF Document",
      icon: "book",
      available: true,
      downloadUrl: "/assets/files/YEAR BOOK 2026..pdf",
      date: "2026",
      size: "PDF"
    },
    {
      title: "Fee Schedule 2026/2027",
      description: "Detailed tuition and fee structure for all classes from Creche through Secondary School.",
      type: "PDF Document",
      icon: "document",
      available: false,
      downloadUrl: null,
      date: "Coming Soon",
      size: "PDF"
    },
    {
      title: "Academic Calendar 2026/2027",
      description: "Important dates, term schedules, holidays, and school events for the academic year.",
      type: "PDF Document",
      icon: "calendar",
      available: false,
      downloadUrl: null,
      date: "Coming Soon",
      size: "PDF"
    },
    {
      title: "Parent Handbook",
      description: "Essential information for parents about school policies, procedures, expectations, and guidelines.",
      type: "PDF Document",
      icon: "book",
      available: false,
      downloadUrl: null,
      date: "Coming Soon",
      size: "PDF"
    }
  ];

  // News/Blog posts data - add real news here
  const newsItems = [
    {
      id: 1,
      title: "Applications Open for 2026/2027 Academic Session",
      date: "January 2026",
      category: "Admissions",
      excerpt: "We are now accepting applications for the 2026/2027 academic session. Limited spaces available across all levels from Creche to Secondary School.",
      image: "/assets/images/students.jpeg",
      featured: true
    },
    {
      id: 2,
      title: "Cambridge Partnership Discussions Progress",
      date: "December 2025",
      category: "News",
      excerpt: "Our Proprietor met with Cambridge International to discuss the proposed Sixth Form College, opening new pathways for A-Level programs and UK university placement.",
      image: "/assets/images/building.jpeg",
      featured: true
    },
    {
      id: 3,
      title: "VPIS Year Book 2026 Now Available",
      date: "December 2025",
      category: "Publications",
      excerpt: "Download the VPIS Year Book 2026 celebrating our students' achievements, memorable events, and school milestones from the academic year.",
      image: "/assets/images/graduates.jpeg",
      featured: false
    }
  ];

  const renderIcon = (iconType) => {
    switch(iconType) {
      case 'document':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
          </svg>
        );
      case 'form':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
            <line x1="16" y1="13" x2="8" y2="13"/>
            <line x1="16" y1="17" x2="8" y2="17"/>
            <polyline points="10 9 9 9 8 9"/>
          </svg>
        );
      case 'book':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/>
            <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/>
          </svg>
        );
      case 'calendar':
        return (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
            <line x1="16" y1="2" x2="16" y2="6"/>
            <line x1="8" y1="2" x2="8" y2="6"/>
            <line x1="3" y1="10" x2="21" y2="10"/>
          </svg>
        );
      default:
        return null;
    }
  };

  return (
    <div className="resources-page">
      <Navbar />
      
      {/* Hero */}
      <div className="about-hero">
        <div className="hero-label">Resources & Downloads</div>
        <h1 className="hero-title">Resources</h1>
        <p className="hero-tagline">Access important documents and information about VPIS</p>
      </div>

      <div className="page">
        {/* Intro */}
        <div className="resources-intro">
          <p className="section-label">Document Center</p>
          <h2 className="section-heading">Downloads & Resources</h2>
          <p>
            Find essential documents, forms, and information about Virgo Praedicanda International School. 
            Download what you need or contact us if you require additional information.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="resources-grid">
          {resources.map((resource, index) => (
            <div key={index} className={`resource-card ${!resource.available ? 'coming-soon' : ''}`}>
              <div className="resource-icon">
                {renderIcon(resource.icon)}
              </div>
              <div className="resource-content">
                <h3>{resource.title}</h3>
                <p className="resource-description">{resource.description}</p>
                <div className="resource-meta">
                  <span className="resource-type">{resource.type}</span>
                  <span className="resource-date">{resource.date}</span>
                </div>
              </div>
              <div className="resource-action">
                {resource.available ? (
                  <a 
                    href={resource.downloadUrl} 
                    download 
                    className="btn-download"
                  >
                    Download
                  </a>
                ) : (
                  <span className="btn-coming-soon">Coming Soon</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* News Section */}
        <div className="news-section">
          <p className="section-label">Latest Updates</p>
          <h2 className="section-heading">School News & Announcements</h2>
          
          <div className="news-grid">
            {newsItems.map((item) => (
              <div key={item.id} className={`news-card ${item.featured ? 'featured' : ''}`}>
                <div className="news-image">
                  <img src={item.image} alt={item.title} loading="lazy" decoding="async" />
                  <span className="news-category">{item.category}</span>
                </div>
                <div className="news-content">
                  <p className="news-date">{item.date}</p>
                  <h3>{item.title}</h3>
                  <p className="news-excerpt">{item.excerpt}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="news-note">
            <p>
              <strong>Stay Connected:</strong> For the latest news and announcements, 
              follow us on social media or contact the school directly. More news 
              articles and updates will be published here regularly.
            </p>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="resources-cta">
          <h3>Need More Information?</h3>
          <p>Can't find what you're looking for? Contact our admissions office for assistance.</p>
          <div className="cta-buttons">
            <a href="tel:+2349132554783" className="btn-primary">Call Us</a>
            <a 
              href="https://wa.me/2349132554783?text=Hello!%20I%20need%20information%20about%20VPIS." 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Resources;
