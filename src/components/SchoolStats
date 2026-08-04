/* ── School Stats Banner ─────────────────────────────────────
   A 2x2 stat grid (campuses, medals, graduating class, founded)
   styled to match the app's existing blue brand palette.
   ─────────────────────────────────────────────────────────── */
const stats = [
  { value: "2", label: "Campuses in Port Harcourt" },
  { value: "98", label: "Medals Won This Year" },
  { value: "8th", label: "Graduating Class, 2026" },
  { value: "2018", label: "Founded" },
];

const SchoolStats = () => (
  <section className="school-stats-section">
    <div className="container">
      <div className="school-stats-grid" data-aos="fade-up">
        {stats.map((stat, i) => (
          <div className="school-stat-item" key={i}>
            <span className="school-stat-value">{stat.value}</span>
            <span className="school-stat-label">{stat.label}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default SchoolStats;
