import content from '../data/content.js'

export default function Clients() {
  const { names, tail } = content.clients

  return (
    <section className="section clients">
      <h2 className="section-title">{content.sectionTitles.clients}</h2>
      <ul className="clients-wall">
        {names.map((name) => (
          <li className="client-name" key={name}>
            {name}
          </li>
        ))}
        <li className="client-name clients-tail">{tail}</li>
      </ul>
    </section>
  )
}
