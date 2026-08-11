import content from '../data/content.js'

export default function Stats() {
  return (
    <section className="section stats" aria-label={content.statsLabel}>
      <ul className="stats-bar">
        {content.stats.map((stat) => (
          <li className="glass-card stat" key={stat.label}>
            <span className="stat-value">{stat.value}</span>
            <span className="stat-label">{stat.label}</span>
          </li>
        ))}
      </ul>
    </section>
  )
}
