import styles from "./ContactSection.module.css";
import {
  FiMapPin,
  FiMail,
  FiPhone,
  FiGlobe,
} from "react-icons/fi";

import {
  FaTwitter,
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";

const ContactSection = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        {/* Left Side */}
        <div className={styles.left}>
          <span className={styles.tag}>GET IN TOUCH</span>

          <h2>Contact Us</h2>

          <p className={styles.description}>
            Have a question, suggestion, or would like to learn more about
            NMUAA? Reach out to us through any of the channels below, or use
            the contact form.
          </p>

          <div className={styles.contactList}>
            <div className={styles.item}>
              <div className={styles.icon}>
                <FiMapPin />
              </div>

              <div>
                <h4>Headquarters</h4>
                <p>
                  Nigeria Maritime University Alumni Association,
                  Delta State, Nigeria
                </p>
              </div>
            </div>

            <div className={styles.item}>
              <div className={styles.icon}>
                <FiMail />
              </div>

              <div>
                <h4>Email</h4>
                <a href="mailto:info@nmuaa.org.ng">
                  info@nmuaa.org.ng
                </a>
              </div>
            </div>

            <div className={styles.item}>
              <div className={styles.icon}>
                <FiPhone />
              </div>

              <div>
                <h4>Phone</h4>
                <a href="tel:+234000000000">
                  +234 (0) — (placeholder)
                </a>
              </div>
            </div>

            <div className={styles.item}>
              <div className={styles.icon}>
                <FiGlobe />
              </div>

              <div>
                <h4>Website</h4>
                <a
                  href="https://www.nmuaa.org.ng"
                  target="_blank"
                  rel="noreferrer"
                >
                  www.nmuaa.org.ng
                </a>
              </div>
            </div>
          </div>

          <div className={styles.follow}>
            <span>FOLLOW US</span>

            <div className={styles.socials}>
              <a href="#">
                <FaTwitter />
              </a>

              <a href="#">
                <FaLinkedinIn />
              </a>

              <a href="#">
                <FaFacebookF />
              </a>

              <a href="#">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Right Side */}

        <div className={styles.formCard}>
          <h3>Send Us a Message</h3>

          <form>
            <div className={styles.formGroup}>
              <label>FULL NAME</label>
              <input
                type="text"
                placeholder="Enter your full name"
              />
            </div>

            <div className={styles.formGroup}>
              <label>EMAIL ADDRESS</label>
              <input
                type="email"
                placeholder="Enter your email address"
              />
            </div>

            <div className={styles.formGroup}>
              <label>SUBJECT</label>
              <input
                type="text"
                placeholder="What is your message about?"
              />
            </div>

            <div className={styles.formGroup}>
              <label>MESSAGE</label>
              <textarea
                rows={6}
                placeholder="Type your message here..."
              />
            </div>

            <button type="submit">
              Send Message
            </button>

            <small>
              We typically respond within 2–3 working days.
            </small>
          </form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;