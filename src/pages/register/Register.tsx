import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  Check,
  GraduationCap,
  Lock,
  Mail,
  User,
} from "lucide-react";
import styles from "./Register.module.css";
import { useAuth } from "../../context/auth/useAuth";
import { DISCIPLINES, GRADUATION_YEARS } from "../../constants/Disciplines";
import type { MemberType } from "../../types";
import AuthSidePanel from "../../components/auth-comps/auth-side-panel/AuthSidePanel";
import logo from "../../assets/images/svg/nmulogo.png";

const STEPS = ["Basic Info", "Security", "Academic Details"];

const isValidEmail = (value: string) => /^\S+@\S+\.\S+$/.test(value);

const Register = () => {
  const { register } = useAuth();
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [stepError, setStepError] = useState("");

  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [memberType, setMemberType] = useState<MemberType>("Alumnus");
  const [graduationYear, setGraduationYear] = useState(GRADUATION_YEARS[0]);
  const [discipline, setDiscipline] = useState(DISCIPLINES[0]);

  const goNext = () => {
    setStepError("");

    if (step === 1) {
      if (!fullName.trim() || !email.trim()) {
        setStepError("Please fill in your name and email.");
        return;
      }
      if (!isValidEmail(email)) {
        setStepError("Please enter a valid email address.");
        return;
      }
    }

    if (step === 2) {
      if (password.length < 6) {
        setStepError("Password must be at least 6 characters.");
        return;
      }
      if (password !== confirmPassword) {
        setStepError("Passwords do not match.");
        return;
      }
    }

    setStep((s) => Math.min(s + 1, STEPS.length));
  };

  const goBack = () => {
    setStepError("");
    setStep((s) => Math.max(s - 1, 1));
  };

  const handleCreateAccount = () => {
    setStepError("");

    const result = register({
      fullName,
      email,
      password,
      memberType,
      graduationYear,
      discipline,
    });

    if (!result.ok) {
      setStepError(result.error || "Something went wrong. Please try again.");
      return;
    }

    navigate("/profile");
  };

  return (
    <div className={styles.page}>
      <div className={styles.formCol}>
        <div className={styles.formWrap}>
          <Link to="/" className={styles.logoLink}>
            <img src={logo} alt="NMU Alumni Association" />
          </Link>

          <h1 className={styles.title}>Create Your Account</h1>
          <p className={styles.subtitle}>
            Join thousands of NMU graduates and cadets across the maritime
            industry.
          </p>

          {/* Stepper */}
          <ol className={styles.stepper}>
            {STEPS.map((label, i) => {
              const stepNum = i + 1;
              const isLast = stepNum === STEPS.length;
              const state =
                stepNum < step
                  ? styles.stepDone
                  : stepNum === step
                  ? styles.stepActive
                  : "";
              return (
                <li key={label} className={styles.stepItem}>
                  <div className={`${styles.stepCircle} ${state}`}>
                    {stepNum < step ? <Check size={15} /> : stepNum}
                  </div>
                  <span
                    className={`${styles.stepLabel} ${
                      isLast ? styles.stepLabelLast : ""
                    } ${state}`}
                  >
                    {label}
                  </span>
                  {stepNum < STEPS.length && (
                    <div
                      className={`${styles.stepLine} ${
                        stepNum < step ? styles.stepLineDone : ""
                      }`}
                    />
                  )}
                </li>
              );
            })}
          </ol>

          <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
            {step === 1 && (
              <>
                <div className={styles.field}>
                  <label htmlFor="fullName">Full Name</label>
                  <div className={styles.inputWrap}>
                    <User size={17} className={styles.inputIcon} />
                    <input
                      id="fullName"
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="e.g. Chidera Okonkwo"
                    />
                  </div>
                </div>

                <div className={styles.field}>
                  <label htmlFor="email">Email Address</label>
                  <div className={styles.inputWrap}>
                    <Mail size={17} className={styles.inputIcon} />
                    <input
                      id="email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                    />
                  </div>
                </div>
              </>
            )}

            {step === 2 && (
              <>
                <div className={styles.field}>
                  <label htmlFor="password">Password</label>
                  <div className={styles.inputWrap}>
                    <Lock size={17} className={styles.inputIcon} />
                    <input
                      id="password"
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="At least 6 characters"
                    />
                  </div>
                </div>

                <div className={styles.field}>
                  <label htmlFor="confirmPassword">Confirm Password</label>
                  <div className={styles.inputWrap}>
                    <Lock size={17} className={styles.inputIcon} />
                    <input
                      id="confirmPassword"
                      type="password"
                      value={confirmPassword}
                      onChange={(e) => setConfirmPassword(e.target.value)}
                      placeholder="Re-enter password"
                    />
                  </div>
                </div>
              </>
            )}

            {step === 3 && (
              <>
                <div className={styles.row}>
                  <div className={styles.field}>
                    <label htmlFor="memberType">I am a</label>
                    <div className={styles.inputWrap}>
                      <GraduationCap size={17} className={styles.inputIcon} />
                      <select
                        id="memberType"
                        value={memberType}
                        onChange={(e) =>
                          setMemberType(e.target.value as MemberType)
                        }
                      >
                        <option value="Alumnus">Alumnus / Alumna</option>
                        <option value="Cadet">Current Cadet</option>
                      </select>
                    </div>
                  </div>

                  <div className={styles.field}>
                    <label htmlFor="graduationYear">
                      {memberType === "Cadet"
                        ? "Expected Graduation"
                        : "Graduation Year"}
                    </label>
                    <div className={styles.inputWrap}>
                      <select
                        id="graduationYear"
                        value={graduationYear}
                        onChange={(e) => setGraduationYear(e.target.value)}
                        className={styles.noIconSelect}
                      >
                        {GRADUATION_YEARS.map((year) => (
                          <option key={year} value={year}>
                            {year}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>

                <div className={styles.field}>
                  <label htmlFor="discipline">Discipline / Programme</label>
                  <div className={styles.inputWrap}>
                    <select
                      id="discipline"
                      value={discipline}
                      onChange={(e) => setDiscipline(e.target.value)}
                      className={styles.noIconSelect}
                    >
                      {DISCIPLINES.map((d) => (
                        <option key={d} value={d}>
                          {d}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>
              </>
            )}

            {stepError && <p className={styles.error}>{stepError}</p>}

            <div className={styles.actions}>
              {step > 1 && (
                <button
                  type="button"
                  className={styles.backBtn}
                  onClick={goBack}
                >
                  <ArrowLeft size={16} /> Back
                </button>
              )}

              {step < STEPS.length ? (
                <button
                  type="button"
                  className={styles.nextBtn}
                  onClick={goNext}
                >
                  Next <ArrowRight size={16} />
                </button>
              ) : (
                <button
                  type="button"
                  className={styles.nextBtn}
                  onClick={handleCreateAccount}
                >
                  Create Account <Check size={16} />
                </button>
              )}
            </div>
          </form>

          <p className={styles.footerText}>
            Already have an account?{" "}
            <Link to="/login" className={styles.link}>
              Log in
            </Link>
          </p>
        </div>
      </div>

      <AuthSidePanel />
    </div>
  );
};

export default Register;
