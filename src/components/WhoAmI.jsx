import content from '../data/content.js'

export default function WhoAmI() {
  return (
    <section className="section who-am-i">
      <h2 className="section-title">{content.sectionTitles.whoAmI}</h2>
      <div className="glass-card who-am-i-card">
        {content.whoAmI.map((bullet) => (
          <span className="pill" key={bullet}>
            {bullet}
          </span>
        ))}
      </div>
    </section>
  )
}
