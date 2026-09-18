function Skills() {
  const skillGroups = [
    {
      title: 'Programming',
      skills: ['Java', 'Python', 'C', 'SQL'],
    },
    {
      title: 'Web Development',
      skills: ['HTML', 'CSS', 'JavaScript', 'Vue', '.NET'],
    },
    {
      title: 'Currently Learning',
      skills: ['React', 'TypeScript', 'Vite'],
    },
    {
      title: 'Tools',
      skills: ['Git', 'GitHub', 'VS Code', 'GitLab', 'Figma'],
    },
  ]

  return (
    <section className="skills-section">
      <p className="section-title">Skills</p>

      <div className="skills-grid">
        {skillGroups.map((group) => (
          <div
            className={`skills-card ${
              group.title === 'Currently Learning' ? 'learning-card' : ''
            }`}
            key={group.title}
          >
            <h3>{group.title}</h3>

            <div className="skills-tags">
              {group.skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        ))}

        <div className="skills-card languages-card">
          <h3>Languages</h3>

          <div className="language-list">
            <span>
              Portuguese <small>Native</small>
            </span>

            <span>
              English <small>Fluent</small>
            </span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills