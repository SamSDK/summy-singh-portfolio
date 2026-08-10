import content from '../data/content.js'

export default function Testimonials() {
  return (
    <section className="section testimonials">
      <h2 className="section-title">Testimonials</h2>
      <div className="testimonials-grid">
        {content.testimonials.map((t) => (
          <div className="glass-card testimonial-card" key={t.author}>
            <p className="testimonial-quote">&quot;{t.quote}&quot;</p>
            <p className="testimonial-author">
              {t.author}, {t.role}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
