const Header = ({ onContact }) => {
  return (
    <header className="site-header">
      <div className="container">
        <nav className="header-nav">

          <a href="/" className="site-logo">
            Estate
          </a>

          <div className="nav-links">
            <a href="#properties">Properties</a>
            <a href="#about">About Us</a>
            <a href="#services">Services</a>
          </div>

          <button
            type="button"
            className="header-contact"
            onClick={onContact}
          >
            Contact Us
          </button>

        </nav>
      </div>
    </header>
  );
};

export default Header;