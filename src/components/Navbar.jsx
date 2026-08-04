import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const location = useLocation();

  // Close the drawer whenever the route (or hash) changes
  useEffect(() => {
    setMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname, location.hash]);

  // Lock body scroll while the drawer is open; always restore on unmount
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Close on Escape key
  useEffect(() => {
    if (!menuOpen) return undefined;
    const onKeyDown = (e) => {
      if (e.key === "Escape") closeMenu();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [menuOpen]);

  function openMenu() {
    setMenuOpen(true);
  }

  function closeMenu() {
    setMenuOpen(false);
    setActiveDropdown(null);
  }

  function toggleDropdown(dropdown) {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  }

  return (
    <>
      {/* Nav */}
      <nav className="site-nav">
        <div className="nav-inner">
          <Link className="nav-brand" to="/">
            <img src="/assets/images/logo.png" alt="VPIS Logo" />
            <div className="nav-brand-text">
              <span className="nav-brand-title">VIRGO PRAEDICANDA</span>
              <span className="nav-brand-sub">INTERNATIONAL SCHOOL</span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="nav-links desktop-nav">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li className="nav-dropdown">
              <span className="nav-link-dropdown">About Us ▾</span>
              <ul className="nav-dropdown-menu">
                <li>
                  <Link to="/about">Vision &amp; Mission</Link>
                </li>
                <li>
                  <Link to="/management">Leadership Team</Link>
                </li>
                <li>
                  <Link to="/facilities">School Facilities</Link>
                </li>
                <li>
                  <Link to="/vpis-pictures">VPIS in Pictures</Link>
                </li>
              </ul>
            </li>
            <li className="nav-dropdown">
              <span className="nav-link-dropdown">Academics ▾</span>
              <ul className="nav-dropdown-menu">
                <li>
                  <Link to="/academics">Early Years &amp; Creche</Link>
                </li>
                <li>
                  <Link to="/academics">Primary School</Link>
                </li>
                <li>
                  <Link to="/academics">Secondary School</Link>
                </li>
                <li>
                  <Link to="/academics#subjects">Subjects We Offer</Link>
                </li>
              </ul>
            </li>
            <li>
              <a href="/#contact">Our Campuses</a>
            </li>
            <li>
              <a href="/#testimonials">Testimonials</a>
            </li>
            <li>
              <a href="/#contact">Contact</a>
            </li>
          </ul>

          {/* Desktop CTA */}
          <div className="nav-cta desktop-cta">
            <a
              href="https://portal.schoolpaddi.com"
              className="btn btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Visit Portal
            </a>
          </div>

          <button
            className="hamburger-btn"
            onClick={openMenu}
            aria-label="Open menu"
            aria-expanded={menuOpen}
            aria-controls="mobile-drawer"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </nav>

      {/* Mobile/Desktop drawer overlay */}
      <div
        className={`mobile-overlay ${menuOpen ? "active" : ""}`}
        onClick={closeMenu}
        aria-hidden="true"
      ></div>

      {/* Mobile/Desktop drawer panel sliding from right */}
      <div
        id="mobile-drawer"
        className={`slide-drawer ${menuOpen ? "drawer-open" : ""}`}
        aria-hidden={!menuOpen}
      >
        {/* Header */}
        <div className="drawer-header">
          <div className="drawer-brand">
            <img
              src="/assets/images/logo.png"
              className="drawer-logo"
              alt="logo"
            />
            <span className="drawer-brand-name">
              Virgo Praedicanda Int'l Schools
            </span>
          </div>
          <button
            className="drawer-close-btn"
            onClick={closeMenu}
            aria-label="Close menu"
          >
            ✕
          </button>
        </div>

        {/* Nav links */}
        <ul className="drawer-links">
          <li>
            <Link to="/" onClick={closeMenu}>
              Home
            </Link>
          </li>
          <li>
            <a href="/#contact" onClick={closeMenu}>
              Our Campuses
            </a>
          </li>
          <li>
            <a href="/#testimonials" onClick={closeMenu}>
              Testimonials
            </a>
          </li>
          <li>
            <a href="/#contact" onClick={closeMenu}>
              Contact
            </a>
          </li>

          {/* About Us Dropdown */}
          <li
            className={`dropdown-item ${activeDropdown === "about" ? "open" : ""}`}
          >
            <button
              type="button"
              className="dropdown-label"
              onClick={() => toggleDropdown("about")}
              aria-expanded={activeDropdown === "about"}
            >
              About Us
            </button>
            <ul className="dropdown-links">
              <li>
                <Link to="/about" onClick={closeMenu}>
                  Vision, Mission &amp; Core Values
                </Link>
              </li>
              <li>
                <Link to="/management" onClick={closeMenu}>
                  Leadership Team
                </Link>
              </li>
              <li>
                <Link to="/facilities" onClick={closeMenu}>
                  School Facilities
                </Link>
              </li>
              <li>
                <Link to="/vpis-pictures" onClick={closeMenu}>
                  VPIS in Pictures
                </Link>
              </li>
            </ul>
          </li>

          {/* Academics Dropdown */}
          <li
            className={`dropdown-item ${activeDropdown === "academics" ? "open" : ""}`}
          >
            <button
              type="button"
              className="dropdown-label"
              onClick={() => toggleDropdown("academics")}
              aria-expanded={activeDropdown === "academics"}
            >
              Academics
            </button>
            <ul className="dropdown-links">
              <li>
                <Link to="/academics#subjects" onClick={closeMenu}>
                  Subjects We Offer
                </Link>
              </li>
              <li>
                <Link to="/academics#training" onClick={closeMenu}>
                  Training &amp; Character Development
                </Link>
              </li>
              <li>
                <Link to="/academics#assessment" onClick={closeMenu}>
                  Examination &amp; Assessment
                </Link>
              </li>
            </ul>
          </li>

          {/* Admissions Dropdown */}
          <li
            className={`dropdown-item ${activeDropdown === "admissions" ? "open" : ""}`}
          >
            <button
              type="button"
              className="dropdown-label"
              onClick={() => toggleDropdown("admissions")}
              aria-expanded={activeDropdown === "admissions"}
            >
              Admissions
            </button>
            <ul className="dropdown-links">
              <li>
                <Link to="/admissions#process" onClick={closeMenu}>
                  Admission Process
                </Link>
              </li>
              <li>
                <Link to="/admissions#classes" onClick={closeMenu}>
                  Classes &amp; Age Groups
                </Link>
              </li>
              <li>
                <Link to="/facilities" onClick={closeMenu}>
                  Facilities Snapshot
                </Link>
              </li>
            </ul>
          </li>

          {/* Life at VPIS Dropdown */}
          <li
            className={`dropdown-item ${activeDropdown === "life" ? "open" : ""}`}
          >
            <button
              type="button"
              className="dropdown-label"
              onClick={() => toggleDropdown("life")}
              aria-expanded={activeDropdown === "life"}
            >
              Life at VPIS
            </button>
            <ul className="dropdown-links">
              <li>
                <Link to="/vpis-pictures" onClick={closeMenu}>
                  Life At VPIS
                </Link>
              </li>
            </ul>
          </li>
        </ul>

        {/* CTA buttons */}
        <div className="drawer-actions">
          <a
            className="drawer-btn drawer-btn-primary"
            href="https://portal.schoolpaddi.com"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            Visit Portal
          </a>
          <a
            className="drawer-btn drawer-btn-outline"
            href="tel:+2349132554783"
          >
            Call Us
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
