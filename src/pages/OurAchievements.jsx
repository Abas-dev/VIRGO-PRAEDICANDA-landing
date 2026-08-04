import {
  GraduationCap,
  Medal,
  Users,
} from "lucide-react";

import "../styles/ourAchievements.css";

const achievements = [
  {
    icon: <GraduationCap size={58} strokeWidth={2.2} />,
    number: "99%",
    text: "Success rate in external examinations",
  },
  {
    icon: <Medal size={58} strokeWidth={2.2} />,
    number: "76",
    text: "Competitions won",
  },
  {
    icon: <Users size={58} strokeWidth={2.2} />,
    number: "480",
    text: "Years of combined staff experience",
  },
];

const OurAchievements = () => {
  return (
    <section className="achievements-section">
      <div className="container">

        <div className="achievements-header">
          <h2>Our Achievements</h2>
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

              <h3>{item.number}</h3>

              <p>{item.text}</p>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default OurAchievements;
