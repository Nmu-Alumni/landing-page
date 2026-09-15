import { useState, type FormEvent } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { ArrowRight, Lock, Mail } from "lucide-react";
import styles from "./Login.module.css";
import { useAuth } from "../../context/auth/useAuth";
import AuthSidePanel from "../../components/auth-comps/auth-side-panel/AuthSidePanel";
import logo from "../../assets/images/svg/nmulogo.png";

const Login = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const redirectTo =
    (location.state as { from?: string } | null)?.from || "/profile";

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setError("");

    const result = login(email, password);
    if (!result.ok) {
      setError(result.error || "Something went wrong. Please try again.");
      return;
    }

    navigate(redirectTo, { replace: true });
  };

  return (
    <div className={styles.page}>
      <div className={styles.formCol}>
        <div className={styles.formWrap}>
          <Link to="/" className={styles.logoLink}>
            <img src={logo} alt="NMU Alumni Association" />
          </Link>

          <h1 className={styles.title}>Welcome Back</h1>
          <p className={styles.subtitle}>
            Log in to access your profile, mentorship requests, and more.
          </p>

          <form className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.field}>
              <label htmlFor="email">Email Address</label>
              <div className={styles.inputWrap}>
                <Mail size={17} className={styles.inputIcon} />
                <input
                  id="email"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div className={styles.field}>
              <label htmlFor="password">Password</label>
              <div className={styles.inputWrap}>
                <Lock size={17} className={styles.inputIcon} />
                <input
                  id="password"
                  type="password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Your password"
                />
              </div>
            </div>

            {error && <p className={styles.error}>{error}</p>}

            <button type="submit" className={styles.submitBtn}>
              Log In <ArrowRight size={17} />
            </button>
          </form>

          <p className={styles.footerText}>
            Don't have an account?{" "}
            <Link to="/register" className={styles.link}>
              Join the Network
            </Link>
          </p>
        </div>
      </div>

      <AuthSidePanel />
    </div>
  );
};

export default Login;
