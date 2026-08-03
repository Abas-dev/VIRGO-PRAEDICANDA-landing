// Shared Navigation Component
// Source of truth for the site navbar on all static pages.
// Styles live in /css/navbar.css (also linked by the React homepage).
// Usage: add <div id="navbar-container"></div> at the top of <body>
// and <script src="/js/navigation.js"></script> before </body>.

(function () {
  const NAV_HTML = `
    <!-- Nav -->
    <nav class="site-nav">
      <div class="nav-inner">
        <a class="nav-brand" href="/">
          <img src="/assets/images/logo.png" alt="VPIS Logo" />
          <div class="nav-brand-text">
            <span class="nav-brand-title">VIRGO PRAEDICANDA</span>
            <span class="nav-brand-sub">INTERNATIONAL SCHOOL</span>
          </div>
        </a>

        <!-- Desktop Navigation Links -->
        <ul class="nav-links desktop-nav">
          <li><a href="/">Home</a></li>
          <li class="nav-dropdown">
            <span class="nav-link-dropdown">About Us ▾</span>
            <ul class="nav-dropdown-menu">
              <li><a href="/about.html">Vision & Mission</a></li>
              <li><a href="/management.html">Leadership Team</a></li>
              <li><a href="/facilities.html#facilities">School Facilities</a></li>
              <li><a href="/vpis-pictures.html">VPIS in Pictures</a></li>
            </ul>
          </li>
          <li class="nav-dropdown">
            <span class="nav-link-dropdown">Academics ▾</span>
            <ul class="nav-dropdown-menu">
              <li><a href="/academics.html">Early Years & Creche</a></li>
              <li><a href="/academics.html">Primary School</a></li>
              <li><a href="/academics.html">Secondary School</a></li>
              <li><a href="/academics.html#subjects">Subjects We Offer</a></li>
            </ul>
          </li>
          <li><a href="/#testimonials">Testimonials</a></li>
          <li><a href="/#contact">Contact</a></li>
        </ul>

        <!-- Desktop CTA -->
        <div class="nav-cta desktop-cta">
          <a href="/admissions.html" class="btn btn-primary">Apply Now</a>
        </div>

        <button class="hamburger-btn" id="hamburger-btn" aria-label="Open menu">
          <span class="bar"></span>
          <span class="bar"></span>
          <span class="bar"></span>
        </button>
      </div>
    </nav>

    <!-- Mobile/Desktop drawer overlay -->
    <div class="mobile-overlay" id="mobile-overlay"></div>

    <!-- Mobile/Desktop drawer panel sliding from right -->
    <div class="slide-drawer" id="slide-drawer">
      <!-- Header -->
      <div class="drawer-header">
        <div class="drawer-brand">
          <img src="/assets/images/logo.png" class="drawer-logo" alt="logo" />
          <span class="drawer-brand-name">Virgo Praedicanda Int'l Schools</span>
        </div>
        <button class="drawer-close-btn" id="drawer-close-btn" aria-label="Close menu">✕</button>
      </div>

      <!-- Nav links -->
      <ul class="drawer-links">
        <li><a href="/">Home</a></li>
        <li><a href="/#testimonials">Testimonials</a></li>
        <li><a href="/#contact">Contact</a></li>

        <!-- About Us Dropdown -->
        <li class="dropdown-item">
          <span class="dropdown-label">About Us</span>
          <ul class="dropdown-links">
            <li><a href="/about.html">Vision, Mission &amp; Core Values</a></li>
            <li><a href="/management.html">Leadership Team</a></li>
            <li><a href="/facilities.html#facilities">School Facilities</a></li>
            <li><a href="/vpis-pictures.html">VPIS in Pictures</a></li>
          </ul>
        </li>

        <!-- Schools -->
        <li><a href="/academics.html">Schools</a></li>

        <!-- Academics Dropdown -->
        <li class="dropdown-item">
          <span class="dropdown-label">Academics</span>
          <ul class="dropdown-links">
            <li><a href="/academics.html#subjects">Subjects We Offer</a></li>
            <li><a href="/academics.html#training">Training &amp; Character Development</a></li>
            <li><a href="/academics.html#assessment">Examination &amp; Assessment</a></li>
          </ul>
        </li>

        <!-- Admissions Dropdown -->
        <li class="dropdown-item">
          <span class="dropdown-label">Admissions</span>
          <ul class="dropdown-links">
            <li><a href="/admissions.html#process">Admission Process</a></li>
            <li><a href="/admissions.html#classes">Classes &amp; Age Groups</a></li>
            <li><a href="/facilities.html#facilities">Facilities Snapshot</a></li>
          </ul>
        </li>

        <!-- Life at VPIS Dropdown -->
        <li class="dropdown-item">
          <span class="dropdown-label">Life at VPIS</span>
          <ul class="dropdown-links">
            <li><a href="/vpis-pictures.html">Life At VPIS</a></li>
            <li><a href="/gallery.html">Gallery</a></li>
          </ul>
        </li>
      </ul>

      <!-- CTA buttons -->
      <div class="drawer-actions">
        <a class="drawer-btn drawer-btn-primary" href="tel:+234 913 255 4783">Call Us</a>
      </div>
    </div>
  `;

  function injectStyles() {
    if (!document.querySelector('link[href="/css/navbar.css"]')) {
      const css = document.createElement("link");
      css.rel = "stylesheet";
      css.href = "/css/navbar.css";
      document.head.appendChild(css);
    }
    if (!document.querySelector('link[href*="fonts.googleapis.com"]')) {
      const font = document.createElement("link");
      font.rel = "stylesheet";
      font.href =
        "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap";
      document.head.appendChild(font);
    }
  }

  function injectMarkup() {
    const container = document.getElementById("navbar-container");
    if (container) {
      // Replace the container so .site-nav is a direct child of <body>,
      // otherwise position: sticky can't escape the wrapper div.
      container.outerHTML = NAV_HTML;
    } else {
      document.body.insertAdjacentHTML("afterbegin", NAV_HTML);
    }
  }

  function initBehavior() {
    const hamburgerBtn = document.getElementById("hamburger-btn");
    const mobileOverlay = document.getElementById("mobile-overlay");
    const slideDrawer = document.getElementById("slide-drawer");
    const drawerCloseBtn = document.getElementById("drawer-close-btn");

    function openMenu() {
      mobileOverlay.classList.add("active");
      slideDrawer.classList.add("drawer-open");
      document.body.style.overflow = "hidden";
    }

    function closeMenu() {
      mobileOverlay.classList.remove("active");
      slideDrawer.classList.remove("drawer-open");
      document.body.style.overflow = "";
      slideDrawer
        .querySelectorAll(".dropdown-item.open")
        .forEach((item) => item.classList.remove("open"));
    }

    hamburgerBtn.addEventListener("click", openMenu);
    drawerCloseBtn.addEventListener("click", closeMenu);
    mobileOverlay.addEventListener("click", closeMenu);

    slideDrawer.querySelectorAll(".dropdown-item").forEach((item) => {
      const label = item.querySelector(".dropdown-label");
      label.addEventListener("click", function () {
        const isOpen = item.classList.contains("open");
        slideDrawer
          .querySelectorAll(".dropdown-item.open")
          .forEach((other) => other.classList.remove("open"));
        if (!isOpen) item.classList.add("open");
      });
    });

    slideDrawer.querySelectorAll(".drawer-links a").forEach((link) => {
      link.addEventListener("click", closeMenu);
    });
  }

  function init() {
    injectStyles();
    injectMarkup();
    initBehavior();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
