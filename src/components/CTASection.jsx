const CTASection = ({
  heading = "Begin Your Journey at VPIS",
  subtext = "Limited spaces available for the 2026/2027 Academic Session.",
  applyLabel = "Apply Now",
  tourLabel = "Book a School Tour",
}) => {
  return (
    <section className="cta-section-shared">
      <div className="cta-section-shared-inner">
        <h2 className="cta-shared-heading">{heading}</h2>
        <p className="cta-shared-sub">{subtext}</p>
        <div className="cta-shared-buttons">
          <a href="/admissions" className="cta-shared-btn cta-shared-btn--primary">
            {applyLabel}
          </a>
          <a
            href="https://wa.me/2349132554783?text=Hello!%20I%27d%20like%20to%20book%20a%20school%20tour."
            className="cta-shared-btn cta-shared-btn--outline"
            target="_blank"
            rel="noopener noreferrer"
          >
            {tourLabel}
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
