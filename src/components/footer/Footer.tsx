
import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

// Import your SVG icons
import facebookIcon from "../../assets/images/svg/facebook-icon.svg";
import instaIcon from "../../assets/images/svg/inst-icon.svg";
import flindlnIcon from "../../assets/images/svg/linkdkn.svg";
import xIcon from "../../assets/images/svg/twitter-icon.svg";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          {/* Logo & Tagline */}
          <div className={styles.logoSection}>
            <Link to="/" className={styles.logoLink}>
              <div className={styles.logoIcon}>
                ⚓ {/* Replace with your preferred icon or inline SVG */}
              </div>
              <div className={styles.logoText}>
                <span className={styles.logoMain}>NMU</span>
                <span className={styles.logoSub}>ALUMNI NETWORK</span>
              </div>
            </Link>

            <p className={styles.tagline}>"In Pursuit of Excellence"</p>

            <p className={styles.description}>
              Nigeria Maritime University, Okerenkoko. The pioneer paramilitary maritime institution in Nigeria.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className={styles.sectionTitle}>Quick Links</h3>
            <ul className={styles.linkList}>
              <li><Link to="/directory" className={styles.link}>Alumni Directory</Link></li>
              <li><Link to="/events" className={styles.link}>Events & Reunions</Link></li>
              <li><Link to="#" className={styles.link}>Jobs Board</Link></li>
              <li><Link to="/leadership" className={styles.link}>Alumni Leadership</Link></li>
              <li><Link to="#" className={styles.link}>News & Blog</Link></li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className={styles.sectionTitle}>Alumni Resources</h3>
            <ul className={styles.linkList}>
              <li><Link to="#" className={styles.link}>Transcript Requests</Link></li>
              <li><Link to="#" className={styles.link}>Mentorship Program</Link></li>
              <li><Link to="#" className={styles.link}>Chapter Branches</Link></li>
              <li><Link to="#" className={styles.link}>Constitutional Docs</Link></li>
              <li><Link to="#" className={styles.link}>Support & FAQ</Link></li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className={styles.sectionTitle}>Connect With Us</h3>
            
            <div className={styles.socialContainer}>
              <a href="#" className={styles.socialIcon}>
                <img src={facebookIcon} alt="Facebook" />
              </a>
              <a href="#" className={styles.socialIcon}>
                <img src={xIcon} alt="X (Twitter)" />
              </a>
              <a href="#" className={styles.socialIcon}>
                <img src={instaIcon} alt="Instagram" />
              </a>
              <a href="#" className={styles.socialIcon}>
                <img src={flindlnIcon} alt="LinkedIn" />
              </a>
            </div>

            <a 
              href="https://nmu.edu.ng" 
              target="_blank" 
              rel="noopener noreferrer"
              className={styles.officialLink}
            >
              Visit Official NMU Website →
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p>© {new Date().getFullYear()} NMU Alumni Network. All rights reserved.</p>
          
          <div className={styles.bottomLinks}>
            <Link to="#" className={styles.bottomLink}>Privacy Policy</Link>
            <Link to="#" className={styles.bottomLink}>Terms of Use</Link>
            <Link to="#" className={styles.bottomLink}>Cookie Policy</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}