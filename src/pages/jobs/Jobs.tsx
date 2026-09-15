import { useMemo, useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Plus, Search, X } from "lucide-react";
import styles from "./Jobs.module.css";
import JobCard from "../../components/pages/jobs-comps/job-card/JobCard";
import { getAllJobs, addJob } from "../../components/pages/jobs-comps/job-list/jobsStore";
import { useAuth } from "../../context/auth/useAuth";
import type { JobType } from "../../types";

type TypeFilter = "all" | JobType;

const TYPES: TypeFilter[] = ["all", "Full-time", "Part-time", "Contract", "Internship"];

const emptyForm = {
  title: "",
  company: "",
  location: "",
  type: "Full-time" as JobType,
  category: "",
  description: "",
  applyEmail: "",
};

const Jobs = () => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const [jobs, setJobs] = useState(() => getAllJobs());
  const [search, setSearch] = useState("");
  const [type, setType] = useState<TypeFilter>("all");
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(emptyForm);

  const filtered = useMemo(() => {
    let list = jobs;

    if (type !== "all") {
      list = list.filter((j) => j.type === type);
    }

    const q = search.trim().toLowerCase();
    if (q) {
      list = list.filter(
        (j) =>
          j.title.toLowerCase().includes(q) ||
          j.company.toLowerCase().includes(q) ||
          j.location.toLowerCase().includes(q) ||
          j.category.toLowerCase().includes(q)
      );
    }

    return list;
  }, [jobs, search, type]);

  const handlePostJobClick = () => {
    if (!isAuthenticated) {
      navigate("/login", { state: { from: "/jobs" } });
      return;
    }
    setShowForm(true);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!user) return;

    addJob({ ...form, postedBy: user.fullName });
    setJobs(getAllJobs());
    setForm(emptyForm);
    setShowForm(false);
  };

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1>Job Board</h1>
          <p>
            Exclusive career opportunities shared by alumni and employers
            across the maritime industry.
          </p>
        </div>
      </section>

      <div className={styles.controls}>
        <div className={styles.controlsInner}>
          <div className={styles.searchWrap}>
            <Search className={styles.searchIcon} size={18} />
            <input
              type="search"
              placeholder="Search jobs by title, company, location…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={styles.searchInput}
              aria-label="Search job listings"
            />
          </div>

          <div className={styles.tabs} role="tablist">
            {TYPES.map((t) => (
              <button
                key={t}
                type="button"
                role="tab"
                aria-selected={type === t}
                className={`${styles.tab} ${type === t ? styles.tabActive : ""}`}
                onClick={() => setType(t)}
              >
                {t === "all" ? "All" : t}
              </button>
            ))}
          </div>

          <button type="button" className={styles.postBtn} onClick={handlePostJobClick}>
            <Plus size={16} /> Post a Job
          </button>
        </div>
      </div>

      <section className={styles.section}>
        <div className={styles.container}>
          {filtered.length === 0 ? (
            <div className={styles.empty}>
              <p>No jobs match your search.</p>
            </div>
          ) : (
            <div className={styles.grid}>
              {filtered.map((job) => (
                <JobCard key={job.id} job={job} />
              ))}
            </div>
          )}
        </div>
      </section>

      {showForm && (
        <div className={styles.modalOverlay} onClick={() => setShowForm(false)}>
          <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className={styles.modalClose}
              onClick={() => setShowForm(false)}
              aria-label="Close"
            >
              <X size={20} />
            </button>

            <h2>Post a Job</h2>

            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.field}>
                <label htmlFor="title">Job Title</label>
                <input
                  id="title"
                  required
                  value={form.title}
                  onChange={(e) => setForm({ ...form, title: e.target.value })}
                />
              </div>

              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="company">Company</label>
                  <input
                    id="company"
                    required
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="location">Location</label>
                  <input
                    id="location"
                    required
                    value={form.location}
                    onChange={(e) => setForm({ ...form, location: e.target.value })}
                  />
                </div>
              </div>

              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="type">Job Type</label>
                  <select
                    id="type"
                    value={form.type}
                    onChange={(e) =>
                      setForm({ ...form, type: e.target.value as JobType })
                    }
                  >
                    {TYPES.filter((t) => t !== "all").map((t) => (
                      <option key={t} value={t}>
                        {t}
                      </option>
                    ))}
                  </select>
                </div>
                <div className={styles.field}>
                  <label htmlFor="category">Category</label>
                  <input
                    id="category"
                    required
                    placeholder="e.g. Marine Engineering"
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
                  />
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  rows={4}
                  required
                  value={form.description}
                  onChange={(e) => setForm({ ...form, description: e.target.value })}
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="applyEmail">Application Email</label>
                <input
                  id="applyEmail"
                  type="email"
                  required
                  value={form.applyEmail}
                  onChange={(e) => setForm({ ...form, applyEmail: e.target.value })}
                />
              </div>

              <div className={styles.formActions}>
                <button
                  type="button"
                  className={styles.cancelBtn}
                  onClick={() => setShowForm(false)}
                >
                  Cancel
                </button>
                <button type="submit" className={styles.submitBtn}>
                  Post Job
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Jobs;
