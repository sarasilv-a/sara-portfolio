import { FaLinkedinIn, FaGithub } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'

function Contact() {
  return (
    <section className="contact-section" id="contact">
      <p className="section-title">Contact</p>

      <div className="contact-grid">
        <div className="contact-intro">
          <h2>Let's get in touch.</h2>

          <p>
            Feel free to reach out!
          </p>
        </div>

        <div className="contact-card">
          <a
            className="contact-item"
            href="mailto:122703sarasilva@gmail.com"
          >
            <div className="contact-icon">
              <HiOutlineMail />
            </div>

            <div className="contact-details">
              <span>Email</span>
              <strong>122703sarasilva@gmail.com</strong>
            </div>
          </a>

          <a
            className="contact-item"
            href="https://linkedin.com/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="contact-icon">
              <FaLinkedinIn />
            </div>

            <div className="contact-details">
              <span>LinkedIn</span>
              <strong>Sara Silva</strong>
            </div>
          </a>

          <a
            className="contact-item"
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
          >
            <div className="contact-icon">
              <FaGithub />
            </div>

            <div className="contact-details">
              <span>GitHub</span>
              <strong>sarasilv-a</strong>
            </div>

          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact