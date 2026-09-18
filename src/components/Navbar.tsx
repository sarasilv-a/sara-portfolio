function Navbar() {
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

export default Navbar