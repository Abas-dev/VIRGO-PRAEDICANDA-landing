import { useState } from 'react';
import Navbar from '../components/Navbar';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Documents data - school documents and resources
  const documents = [
    {
      id: 1,
      title: "School Prospectus 2026-2027",
      date: "January 2026",
      category: "Admissions",
      type: "PDF Document",
      icon: "document",
      description: "Comprehensive guide to VPIS programs, facilities, curriculum, and academic offerings for the 2026/2027 academic session.",
      downloadUrl: "/assets/files/VPIS PROSPECTUS 2026-2027 ACADEMIC SESSION (1).pdf",
      size: "PDF",
      featured: true
    },
    {
      id: 2,
      title: "Admission Form",
      date: "Current",
      category: "Admissions",
      type: "PDF Form",
      icon: "form",
      description: "Download and complete this form to begin your application to Virgo Praedicanda International School. Submit to our admissions office.",
      downloadUrl: "/assets/files/admission form.pdf",
      size: "PDF",
      featured: true
    },
    {
      id: 3,
      title: "Year Book 2026",
      date: "December 2025",
      category: "Publications",
      type: "PDF Document",
      icon: "book",
      description: "Annual publication celebrating student achievements, memorable events, competitions, and school milestones from the 2026 academic year.",
      downloadUrl: "/assets/files/YEAR BOOK 2026..pdf",
      size: "PDF",
      featured: true
    },
    {
      id: 4,
      title: "Fee Schedule 2026/2027",
      date: "Coming Soon",
      category: "Finance",
      type: "PDF Document",
      icon: "document",
      description: "Detailed tuition and fee structure for all classes from Creche through Secondary School for the 2026/2027 session.",
      downloadUrl: null,
      size: "PDF",
      featured: false
    },
    {
      id: 5,
      title: "Academic Calendar 2026/2027",
      date: "Coming Soon",
      category: "Academics",
      type: "PDF Document",
      icon: "calendar",
      description: "Important dates, term schedules, holidays, examination periods, and school events for the academic year.",
      downloadUrl: null,
      size: "PDF",
      featured: false
    },
    {
      id: 6,
      title: "Parent Handbook",
      date: "Coming Soon",
      category: "Guidelines",
      type: "PDF Document",
      icon: "book",
      description: "Essential information for parents about school policies, procedures, expectations, communication channels, and guidelines.",
      downloadUrl: null,
      size: "PDF",
      featured: false
    }
  ];

  const categories = ['all', 'Admissions', 'Academics', 'Publications', 'Finance', 'Guidelines'];

  const filteredDocuments = selectedCategory === 'all' 
    ? documents 
    : documents.filter(doc => doc.category === selectedCategory);

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
    <div className="blog-page">
      <Navbar />
      
      {/* Hero */}
      <div className="about-hero">
        <div className="hero-label">Document Center</div>
        <h1 className="hero-title">Resources & Downloads</h1>
        <p className="hero-tagline">Access important school documents and resources</p>
      </div>

      <div className="page">
        {/* Intro */}
        <div className="blog-intro">
          <p>
            Download important documents, forms, publications, and resources for students, 
            parents, and prospective families. All essential VPIS documents in one place.
          </p>
        </div>

        {/* Category Filter */}
        <div className="blog-categories">
          {categories.map((category) => (
            <button
              key={category}
              className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category)}
            >
              {category === 'all' ? 'All Documents' : category}
            </button>
          ))}
        </div>

        {/* Documents Grid */}
        <div className="documents-grid">
          {filteredDocuments.map((doc) => (
            <div key={doc.id} className={`document-card ${!doc.downloadUrl ? 'coming-soon' : ''}`}>
              <div className="document-icon">
                {renderIcon(doc.icon)}
              </div>
              <div className="document-content">
                <div className="document-meta">
                  <span className="document-category">{doc.category}</span>
                  <span className="document-date">{doc.date}</span>
                </div>
                <h3>{doc.title}</h3>
                <p className="document-type">{doc.type}</p>
                <p className="document-description">{doc.description}</p>
              </div>
              <div className="document-action">
                {doc.downloadUrl ? (
                  <a 
                    href={doc.downloadUrl} 
                    download 
                    className="btn-download-doc"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                      <polyline points="7 10 12 15 17 10"/>
                      <line x1="12" y1="15" x2="12" y2="3"/>
                    </svg>
                    Download {doc.size}
                  </a>
                ) : (
                  <span className="btn-coming-soon-doc">Coming Soon</span>
                )}
              </div>
            </div>
          ))}
        </div>

        {filteredDocuments.length === 0 && (
          <div className="no-posts">
            <p>No documents found in this category yet. Check back soon!</p>
          </div>
        )}

        {/* Contact CTA */}
        <div className="blog-cta">
          <h3>Need More Information?</h3>
          <p>
            Can't find what you're looking for? Contact our admissions office for assistance 
            or additional documents.
          </p>
          <div className="cta-buttons">
            <a href="tel:+2349132554783" className="btn-primary">Call +234 913 255 4783</a>
            <a 
              href="https://wa.me/2349132554783?text=Hello!%20I%20need%20information%20about%20VPIS%20documents." 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn-secondary"
            >
              WhatsApp Us
            </a>
          </div>
        </div>
      </div>

      <footer className="page-footer">
        <p>&copy; {new Date().getFullYear()} Virgo Praedicanda International School. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Blog;
