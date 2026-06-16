import { Outlet, useLocation } from "react-router";
import { useEffect } from "react";
import styles from "./Layout.module.css";
import { Navbar } from "../navbar/Navbar";
import { Footer } from "../footer/Footer";

export default function Layout() {
  const { pathname, hash } = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    if (!hash) window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]); // Use pathname, not location object

  // Scroll to hash
  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.replace("#", ""));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

  return (
    <div className={styles.root}>
      <Navbar />
      <main className={styles.main}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}