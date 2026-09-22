import ProjectCard from './ProjectCard'
import urbanTrafficImg from '../assets/project1.webp'
import HospitalImg from '../assets/project2.webp'
import MachineImg from '../assets/project3.webp'

function Projects() {
  const projects = [
    {
      title: 'Urban Traffic Flow Prediction',
      description:
        'Machine learning project focused on predicting urban traffic flow using data analysis and supervised learning models.',
      technologies: [
        'Python',
        'Jupyter',
        'Scikit-learn',
        'XGBoost',
        'Random Forest',
        'CRISP-DM',
      ],
      image: urbanTrafficImg,
      link: 'https://github.com/sarasilv-a/Projects/tree/main/4th%20Year/DAA',
    },
    {
      title: 'Multi-agent system for healthcare',
      description:
        'Multi-agent system for integrated healthcare management, supporting emergency response, scheduling and patient monitoring.',
      technologies: [
        'Python', 'Multi-Agent Systems',
      ],
      image: HospitalImg,
      link: 'https://github.com/sarasilv-a/Projects/tree/main/4th%20Year/ASMa',
    },
    {
      title: 'Productivity and Credit Risk Analysis',
      description:
        'Data analysis and machine learning project exploring regression and classification problems related to productivity and credit risk.',
      technologies: [
        'Python',
        'Pandas',
        'NumPy',
        'Scikit-learn',
        'Matplotlib',
        'Machine Learning',
      ],
      image: MachineImg,
      link: 'https://github.com/sarasilv-a/Projects/tree/main/3rd%20Year/2nd%20Semester/ADI',
    },
  ]

  return (
    <section className="projects-section" id="projects">
        <p className="section-title">Projects</p>

        <div className="projects-grid">
            {projects.map((project) => (
                <ProjectCard
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    technologies={project.technologies}
                    image={project.image}
                    link={project.link}
                />
            ))}
        </div>

        <a
            className="all-projects-card"
            href="https://github.com/sarasilv-a/Projects"
            target="_blank"
            rel="noreferrer"
        >
            <h3>View More</h3>
        </a>

    </section>
  )
}

export default Projects