import content from '../data/content.js'

export default function About() {
  return (
    <section className="section about">
      <h2 className="section-title">{content.sectionTitles.about}</h2>
      <p className="about-body">{content.about.body}</p>
      <div className="about-pills">
        {content.whoAmI.map((bullet) => (
          <span className="pill" key={bullet}>
            {bullet}
          </span>
        ))}
      </div>
    </section>
  )
}
