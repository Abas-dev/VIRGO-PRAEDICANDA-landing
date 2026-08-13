import Navbar from '../components/Navbar';

const PrivacyPolicy = () => {
  return (
    <div className="legal-page">
      <Navbar />
      
      {/* Hero */}
      <div className="about-hero">
        <div className="hero-label">Legal Information</div>
        <h1 className="hero-title">Privacy Policy</h1>
        <p className="hero-tagline">How we protect your information</p>
      </div>

      <div className="page">
        <div className="legal-content">
          <p className="legal-intro">
            <strong>Effective Date:</strong> January 2026
          </p>
          
          <p>
            Virgo Praedicanda International School ("VPIS", "we", "us", or "our") is committed 
            to protecting the privacy and security of personal information provided to us by 
            students, parents, guardians, staff, and website visitors.
          </p>

          <h2>1. Information We Collect</h2>
          <p>We may collect and process the following types of personal information:</p>
          <ul className="prose-list">
            <li><strong>Student Information:</strong> Names, dates of birth, contact details, academic records, health information, photographs, and emergency contact information</li>
            <li><strong>Parent/Guardian Information:</strong> Names, contact details, addresses, and payment information</li>
            <li><strong>Staff Information:</strong> Employment records, qualifications, and contact details</li>
            <li><strong>Website Visitors:</strong> IP addresses, browser information, and usage data</li>
          </ul>

          <h2>2. How We Use Your Information</h2>
          <p>We use personal information for the following purposes:</p>
          <ul className="prose-list">
            <li>Providing educational services and pastoral care</li>
            <li>Managing admissions, enrollment, and academic records</li>
            <li>Communicating with parents/guardians about school activities and student progress</li>
            <li>Processing payments and financial transactions</li>
            <li>Ensuring health, safety, and security of students and staff</li>
            <li>Complying with legal and regulatory requirements</li>
            <li>Improving our website and services</li>
          </ul>

          <h2>3. Data Security</h2>
          <p>
            We implement appropriate technical and organizational measures to protect personal 
            information against unauthorized access, alteration, disclosure, or destruction. 
            However, no data transmission over the internet can be guaranteed to be completely secure.
          </p>

          <h2>4. Data Sharing and Disclosure</h2>
          <p>We may share personal information with:</p>
          <ul className="prose-list">
            <li>Educational authorities and examination boards (Cambridge International, Pearson Edexcel, WAEC)</li>
            <li>Government agencies as required by law</li>
            <li>Third-party service providers who assist in school operations (with appropriate safeguards)</li>
            <li>Medical professionals in case of emergencies</li>
          </ul>
          <p>
            We do not sell, rent, or trade personal information to third parties for marketing purposes.
          </p>

          <h2>5. Data Retention</h2>
          <p>
            We retain personal information for as long as necessary to fulfill the purposes for 
            which it was collected and to comply with legal obligations. Student academic records 
            are retained in accordance with educational regulations.
          </p>

          <h2>6. Your Rights</h2>
          <p>You have the right to:</p>
          <ul className="prose-list">
            <li>Access personal information we hold about you or your child</li>
            <li>Request correction of inaccurate or incomplete information</li>
            <li>Request deletion of information (subject to legal requirements)</li>
            <li>Object to processing of your information in certain circumstances</li>
            <li>Withdraw consent where processing is based on consent</li>
          </ul>

          <h2>7. Children's Privacy</h2>
          <p>
            We are committed to protecting the privacy of children. We collect information about 
            students only for legitimate educational purposes and with appropriate parental consent. 
            We do not knowingly collect information from children for commercial purposes.
          </p>

          <h2>8. Cookies and Website Analytics</h2>
          <p>
            Our website may use cookies to improve user experience and analyze website traffic. 
            You can control cookie settings through your browser preferences.
          </p>

          <h2>9. Changes to This Policy</h2>
          <p>
            We may update this Privacy Policy from time to time. The updated policy will be posted 
            on our website with the effective date. We encourage you to review this policy periodically.
          </p>

          <h2>10. Contact Us</h2>
          <p>
            If you have questions about this Privacy Policy or wish to exercise your data protection 
            rights, please contact us:
          </p>
          <div className="contact-details">
            <p>
              <strong>Virgo Praedicanda International School</strong><br />
              Email: <a href="mailto:Virgopraedicandaintschool@gmail.com">Virgopraedicandaintschool@gmail.com</a><br />
              Phone: <a href="tel:+2349132554783">+234 913 255 4783</a>
            </p>
          </div>

          <div className="legal-note">
            <p>
              <em>
                Note: This Privacy Policy is a general framework. VPIS reserves the right to update 
                and refine this document to ensure full compliance with applicable data protection laws.
              </em>
            </p>
          </div>
        </div>
      </div>

      <footer className="page-footer">
        <p>&copy; {new Date().getFullYear()} Virgo Praedicanda International School. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PrivacyPolicy;
