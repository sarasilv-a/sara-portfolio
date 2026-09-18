function Experience() {
  const education = [
    {
      date: '2025 — Present',
      title: 'Master in Computer Science and Engineering',
      place: 'University of Minho',
      location: 'Braga, Portugal',
      description: '',
    },
    {
      date: 'February 2026 — June 2026',
      title: 'Erasmus+ Exchange Programme',
      place: 'TU Wien — Technische Universität Wien',
      location: 'Vienna, Austria',
      description: '',
    },
    {
      date: '2022 — 2025',
      title: 'Bachelor in Computer Science and Engineering',
      place: 'University of Minho',
      location: 'Braga, Portugal',
      description: '',
    },
  ]

  const experience = [
    {
      date: 'June 2023 — Present',
      title: 'Monitor',
      place: 'MonkeyPark',
      location: 'Braga, Portugal',
      description:
        'Developing organizational skills, communication, responsibility and collaborative teamwork through direct work with people.',
    },
    {
      date: 'September 2024 — February 2025',
      title: 'Marketing Team',
      place: 'Semana da Engenharia Informática ’25',
      location: 'Braga, Portugal',
      description:
        'Produced content for SEI’s social media channels with the goal of increasing reach and engagement.',
    },
    {
      date: 'September 2023 — June 2025',
      title: 'Codirector of the Marketing Department',
      place: 'CeSIUM — Centro de Estudantes de Engenharia Informática da UMinho',
      location: 'Braga, Portugal',
      description:
        'Joined CeSIUM as a collaborator in the Marketing Department and later became Codirector, contributing to content creation, communication and social media management.',
    },
  ]

  return (
    <section className="experience-section" id="experience">
      <div className="experience-grid">
        <div>
          <p className="section-title">Education</p>

          <div className="timeline">
            {education.map((item) => (
              <article
                className="timeline-item"
                key={`${item.place}-${item.date}`}
              >
                <p className="timeline-date">{item.date}</p>

                <div className="timeline-content">
                  <h3>{item.place}</h3>
                  <p className="timeline-role">{item.title}</p>
                  <p className="timeline-location">{item.location}</p>

                  {item.description && (
                    <p className="timeline-description">
                      {item.description}
                    </p>
                  )}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div>
          <p className="section-title">Experience</p>

          <div className="timeline">
            {experience.map((item) => (
              <article
                className="timeline-item"
                key={`${item.place}-${item.date}`}
              >
                <p className="timeline-date">{item.date}</p>

                <div className="timeline-content">
                  <h3>{item.place}</h3>
                  <p className="timeline-role">{item.title}</p>
                  <p className="timeline-location">{item.location}</p>
                  <p className="timeline-description">
                    {item.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience