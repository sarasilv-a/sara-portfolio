/* function Navbar() {
  return (
    <nav className="navbar">
      <a className="navbar-logo" href="#home">
        Sara Silva
      </a>

      <div className="navbar-links">
        <a href="#about">About</a>
        <a href="#experience">Experience</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
      </div>
    </nav>
  )
}

export default Navbar */

function Navbar() {
  const scrollToSection = (
    event: React.MouseEvent<HTMLAnchorElement>,
    id: string
  ) => {
    event.preventDefault()

    const element = document.getElementById(id)

    if (!element) return

    const start = window.scrollY
    const target = element.getBoundingClientRect().top + window.scrollY
    const distance = target - start

    const duration = 850
    let startTime: number | null = null

    const easeInOutCubic = (t: number) =>
      t < 0.5
        ? 4 * t * t * t
        : 1 - Math.pow(-2 * t + 2, 3) / 2

    const animation = (currentTime: number) => {
      if (startTime === null) {
        startTime = currentTime
      }

      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)

      window.scrollTo(
        0,
        start + distance * easeInOutCubic(progress)
      )

      if (progress < 1) {
        requestAnimationFrame(animation)
      }
    }

    requestAnimationFrame(animation)
  }

  return (
    <nav className="navbar">
      <a className="navbar-logo" href="#home">
        Sara Silva
      </a>

      <div className="navbar-links">
        <a href="#about" onClick={(e) => scrollToSection(e, 'about')}>
          About
        </a>

        <a
          href="#experience"
          onClick={(e) => scrollToSection(e, 'experience')}
        >
          Experience
        </a>

        <a
          href="#projects"
          onClick={(e) => scrollToSection(e, 'projects')}
        >
          Projects
        </a>

        <a
          href="#contact"
          onClick={(e) => scrollToSection(e, 'contact')}
        >
          Contact
        </a>
      </div>
    </nav>
  )
}

export default Navbar