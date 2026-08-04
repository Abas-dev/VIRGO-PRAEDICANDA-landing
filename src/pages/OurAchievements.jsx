const achievements = [
  {
    org: "Kaodili Cares Foundation",
    award: "Garden City Spelling Finalists",
  },
  {
    org: "Scholastic Champs Competition",
    award: "Top Achiever Awards",
  },
  {
    org: "Scholastic Science Competition",
    award: "Top Achiever & Honours",
  },
  {
    org: "Alliance Française",
    award: "Certificates & Training Awards",
  },
];

const OurAchievements = () => {
  return (
    <section className="achievements-section">
      <div className="container">
        <div className="achievements-header">
          <h2>Recent Achievements</h2>
          <p className="achievements-intro">
            VPIS pupils won 98 medals across inter-house sports and external
            competitions this year alone.
          </p>
        </div>

        <div className="achievements-grid">
          {achievements.map((item, index) => (
            <div
              className="achievement-card"
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 150}
            >
              <div className="achievement-icon">🏆</div>

              <h3>{item.org}</h3>

              <p>{item.award}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurAchievements;
