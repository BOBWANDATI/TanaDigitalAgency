import React, { useState, useEffect, useCallback } from "react";
import "./Navbar.css";

const Navbar = ({ onNavigate, currentView = "home" }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("home");
  const [logoLoaded, setLogoLoaded] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home", type: "home" },
    { name: "Services", href: "#services", type: "section" },
    { name: "Courses", href: "#courses", type: "section" },
    { name: "Portfolio", href: "#portfolio", type: "section" },
    { name: "About Us", href: "#about", type: "section" },
    { name: "I want a Website", href: "#web-design", type: "page" },
    { name: "Contact", href: "#contact", type: "section" },
  ];

  const logoUrl =
    "https://github.com/BOBWANDATI/images/blob/main/ChatGPT%20Image%20Feb%2026,%202026,%2009_46_00%20AM.png?raw=true";

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [isMobileMenuOpen]);

  const handleNavClick = useCallback(
    (href, type) => {
      setIsMobileMenuOpen(false);
      const sectionId = href.replace("#", "");

      if (type === "page" && onNavigate) {
        onNavigate("web-design");
        setActiveLink("web-design");
        return;
      }

      if (type === "home") {
        setActiveLink("home");
        if (onNavigate) onNavigate("home");
        window.scrollTo({ top: 0, behavior: "smooth" });
        return;
      }

      if (type === "section") {
        setActiveLink(sectionId);
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    },
    [onNavigate]
  );

  const handleWhatsappClick = () => {
    const message =
      "Hello Tana Digital Agency! I'm interested in your services.";
    const whatsappUrl = `https://wa.me/254758284534?text=${encodeURIComponent(
      message
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  const isLinkActive = (link) => {
    if (link.type === "page") return currentView === "web-design";
    return activeLink === link.href.replace("#", "");
  };

  return (
    <>
      <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
        <div className="navbar-container">
          {/* Logo */}
          <div
            className="navbar-logo"
            onClick={() => handleNavClick("#home", "home")}
          >
            <img
              src={logoUrl}
              alt="Tana Digital Logo"
              onLoad={() => setLogoLoaded(true)}
              style={{ opacity: logoLoaded ? 1 : 0 }}
            />
            {!logoLoaded && <div className="logo-placeholder">TDA</div>}
            <span>Tana Digital Agency</span>
          </div>

          {/* Desktop Links */}
          <div className="navbar-links">
            {navLinks.map((link) => (
              <button
                key={link.name}
                className={`navbar-link ${
                  isLinkActive(link) ? "active" : ""
                }`}
                onClick={() => handleNavClick(link.href, link.type)}
              >
                {link.name}
              </button>
            ))}

            <button className="navbar-cta" onClick={handleWhatsappClick}>
              Chat
            </button>
          </div>

          {/* Mobile Toggle */}
          <button
            className="hamburger-btn"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            ☰
          </button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="mobile-menu">
            {navLinks.map((link) => (
              <button
                key={link.name}
                className={`mobile-link ${
                  isLinkActive(link) ? "active" : ""
                }`}
                onClick={() => handleNavClick(link.href, link.type)}
              >
                {link.name}
              </button>
            ))}
            <button className="mobile-cta" onClick={handleWhatsappClick}>
              Chat on WhatsApp
            </button>
          </div>
        )}
      </nav>

      {/* Spacer for fixed navbar */}
      <div style={{ height: "80px" }} />
    </>
  );
};

export default Navbar;