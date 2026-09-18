import saraPhoto from '../assets/photo.jpeg'
import { FaLinkedinIn, FaGithub } from 'react-icons/fa'

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="hero-text">
        <p className="hero-greeting">Hello, I'm</p>

        <h1>Sara Silva</h1>

        <h2 className="hero-role">
          Software Engineering Student
        </h2>

        <p className="hero-description">
          Software Engineering student based in Braga, Portugal. 
        </p>

        <div className="hero-actions">
          <a
            className="btn btn-outline"
            href="/Sara-Silva-CV.pdf"
            download
          >
            Download CV
          </a>

          <a className="btn btn-dark" href="#contact">
            Contact me
          </a>
        </div>

        <div className="hero-socials">
          <a
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </div>

      <div className="hero-photo">
        <img
          src={saraPhoto}
          alt="Sara"
          className="hero-photo-image"
        />
      </div>
    </section>
  )
}

export default Hero