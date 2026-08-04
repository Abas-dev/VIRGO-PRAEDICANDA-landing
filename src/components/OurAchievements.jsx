import {
  Trophy,
  BookOpen,
  FlaskConical,
  Languages,
} from "lucide-react";

const achievements = [
  {
    icon: <Trophy size={40} />,
    org: "Kaodili Cares Foundation",
    award: "Garden City Spelling Finalists",
  },
  {
    icon: <BookOpen size={40} />,
    org: "Scholastic Champs Competition",
    award: "Top Achiever Awards",
  },
  {
    icon: <FlaskConical size={40} />,
    org: "Scholastic Science Competition",
    award: "Top Achiever & Honours",
  },
  {
    icon: <Languages size={40} />,
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
              <div className="achievement-icon">
                {item.icon}
              </div>

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
