import { Anchor, Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import styles from "./Navbar.module.css";
import { Button } from "../ui/button/Button";
import { navLinks } from "../../constants/NavLinks";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);



  const isHome = location.pathname === "/";

  return (
    <nav
      className={`${styles.navbar} ${
        scrolled || mobileMenuOpen || !isHome ? styles.scrolled : ""
      }`}
    >
      <div className={styles.container}>
        {/* Logo */}
        <Link to="/" className={styles.logo}>
          <div className={styles.logoIcon}>
            <Anchor size={24} />
          </div>
          <div className={styles.logoText}>
            <span className={styles.logoMain}>NMU</span>
            <span className={styles.logoSub}>ALUMNI NETWORK</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className={styles.desktopNav}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`${styles.navLink} ${
                location.pathname === link.path ? styles.active : ""
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* Desktop Actions */}
        <div className={styles.desktopActions}>
          {/* <Link to="/login">
            <Button variant="ghost" className="hidden xl:inline-flex">
              Login
            </Button>
          </Link> */}
          <Link to="/login">
            <Button>Join the Network</Button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          className={styles.mobileToggle}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className={styles.mobileMenu}>
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={styles.mobileNavLink}
              onClick={() => setMobileMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}

          <div className={styles.mobileActions}>
            <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
              <Button variant="ghost" className="w-full justify-center">
                Login
              </Button>
            </Link>
            <Link to="/login" onClick={() => setMobileMenuOpen(false)}>
              <Button className="w-full justify-center">Join the Network</Button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}