type ProjectCardProps = {
  title: string
  description: string
  technologies: string[]
  image?: string
  link?: string
}

function ProjectCard({
  title,
  description,
  technologies,
  image,
  link,
}: ProjectCardProps) {
  return (
    <article className="project-card">
      <div className="project-image">
        {image ? (
            <img src={image} alt={title} />
        ) : (
            <span>Project image</span>
        )}
    </div>

      <div className="project-info">
        <h3>{title}</h3>

        <p className="project-description">
          {description}
        </p>

        <div className="project-technologies">
          {technologies.map((technology) => (
            <span key={technology}>{technology}</span>
          ))}
        </div>

        {link && (
          <a href={link} target="_blank" rel="noreferrer">
            View project →
          </a>
        )}
      </div>
    </article>
  )
}

export default ProjectCard