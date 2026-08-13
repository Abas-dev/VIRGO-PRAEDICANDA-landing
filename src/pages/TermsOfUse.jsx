import Navbar from '../components/Navbar';

const TermsOfUse = () => {
  return (
    <div className="legal-page">
      <Navbar />
      
      {/* Hero */}
      <div className="about-hero">
        <div className="hero-label">Legal Information</div>
        <h1 className="hero-title">Terms of Use</h1>
        <p className="hero-tagline">Website terms and conditions</p>
      </div>

      <div className="page">
        <div className="legal-content">
          <p className="legal-intro">
            <strong>Effective Date:</strong> January 2026
          </p>
          
          <p>
            Welcome to the Virgo Praedicanda International School website. By accessing and using 
            this website, you accept and agree to be bound by the following Terms of Use. If you 
            do not agree to these terms, please do not use this website.
          </p>

          <h2>1. Use of Website</h2>
          <p>
            This website is provided for informational purposes about Virgo Praedicanda International 
            School, its programs, admissions, and services. You may use this website for lawful 
            purposes only.
          </p>

          <h2>2. Intellectual Property</h2>
          <p>
            All content on this website, including text, images, logos, graphics, videos, and other 
            materials, is the property of Virgo Praedicanda International School or its content 
            suppliers and is protected by intellectual property laws.
          </p>
          <p>You may not:</p>
          <ul className="prose-list">
            <li>Reproduce, distribute, or modify website content without written permission</li>
            <li>Use VPIS logos, trademarks, or branding without authorization</li>
            <li>Copy or use photographs of students, staff, or facilities without permission</li>
            <li>Use website content for commercial purposes</li>
          </ul>

          <h2>3. User Conduct</h2>
          <p>When using our website, you agree not to:</p>
          <ul className="prose-list">
            <li>Violate any applicable laws or regulations</li>
            <li>Transmit harmful, offensive, or inappropriate content</li>
            <li>Attempt to gain unauthorized access to website systems</li>
            <li>Interfere with the proper functioning of the website</li>
            <li>Collect information about other users without consent</li>
            <li>Impersonate any person or entity</li>
          </ul>

          <h2>4. Information Accuracy</h2>
          <p>
            While we strive to provide accurate and up-to-date information, VPIS makes no warranties 
            or representations about the accuracy, completeness, or timeliness of website content. 
            Information about programs, fees, admissions, and policies is subject to change.
          </p>
          <p>
            For the most current information, please contact the school directly.
          </p>

          <h2>5. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites (such as Cambridge International, 
            Pearson Edexcel, or social media platforms). VPIS is not responsible for the content, 
            privacy practices, or terms of use of external websites. Accessing third-party links 
            is at your own risk.
          </p>

          <h2>6. Disclaimer of Warranties</h2>
          <p>
            This website is provided "as is" without warranties of any kind, either express or 
            implied. VPIS does not warrant that the website will be uninterrupted, error-free, 
            or free from viruses or other harmful components.
          </p>

          <h2>7. Limitation of Liability</h2>
          <p>
            To the fullest extent permitted by law, VPIS shall not be liable for any direct, 
            indirect, incidental, consequential, or punitive damages arising from your use of 
            or inability to use this website, including but not limited to damages for loss of 
            data, profits, or business opportunities.
          </p>

          <h2>8. Privacy</h2>
          <p>
            Use of this website is also governed by our Privacy Policy. Please review our 
            <a href="/privacy-policy"> Privacy Policy</a> to understand how we collect and use 
            personal information.
          </p>

          <h2>9. Admissions and Enrollment</h2>
          <p>
            Submission of an admissions inquiry or application through this website does not 
            guarantee acceptance or enrollment. All admissions decisions are made by the school 
            according to its admissions policies and criteria.
          </p>

          <h2>10. Changes to Terms</h2>
          <p>
            VPIS reserves the right to modify these Terms of Use at any time. Updated terms will 
            be posted on this page with the effective date. Continued use of the website after 
            changes constitutes acceptance of the revised terms.
          </p>

          <h2>11. Governing Law</h2>
          <p>
            These Terms of Use shall be governed by and construed in accordance with the laws of 
            the Federal Republic of Nigeria. Any disputes arising from these terms shall be subject 
            to the exclusive jurisdiction of Nigerian courts.
          </p>

          <h2>12. Contact Information</h2>
          <p>
            If you have questions about these Terms of Use, please contact us:
          </p>
          <div className="contact-details">
            <p>
              <strong>Virgo Praedicanda International School</strong><br />
              Email: <a href="mailto:Virgopraedicandaintschool@gmail.com">Virgopraedicandaintschool@gmail.com</a><br />
              Phone: <a href="tel:+2349132554783">+234 913 255 4783</a><br />
              Address: No 9 Marina Close, Woji, Port Harcourt, Rivers State, Nigeria
            </p>
          </div>

          <div className="legal-note">
            <p>
              <em>
                Note: These Terms of Use provide a general framework for website usage. VPIS reserves 
                the right to update this document as needed.
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

export default TermsOfUse;
