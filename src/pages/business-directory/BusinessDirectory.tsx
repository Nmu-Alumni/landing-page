import { useMemo, useState, type FormEvent } from "react";
import { useNavigate } from "react-router-dom";
import { Plus, Search, X } from "lucide-react";
import styles from "./BusinessDirectory.module.css";
import BusinessCard from "../../components/pages/business-comps/business-card/BusinessCard";
import {
  addBusiness,
  getAllBusinesses,
} from "../../components/pages/business-comps/business-list/businessStore";
import { SPONSORS } from "../../components/pages/business-comps/sponsors/sponsorsData";
import { useAuth } from "../../context/auth/useAuth";

const emptyForm = {
  businessName: "",
  category: "",
  description: "",
  location: "",
  phone: "",
  email: "",
  website: "",
  coverImage: "",
};

const BusinessDirectory = () => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  const [businesses, setBusinesses] = useState(() => getAllBusinesses());
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState(emptyForm);

  const categories = useMemo(
    () => ["all", ...Array.from(new Set(businesses.map((b) => b.category)))],
    [businesses]
  );

  const filtered = useMemo(() => {
    let list = businesses;

    if (category !== "all") {
      list = list.filter((b) => b.category === category);
    }

    const q = search.trim().toLowerCase();
    if (q) {
      list = list.filter(
        (b) =>
          b.businessName.toLowerCase().includes(q) ||
          b.category.toLowerCase().includes(q) ||
          b.description.toLowerCase().includes(q) ||
          b.location.toLowerCase().includes(q)
      );
    }

    return list;
  }, [businesses, search, category]);

  const handleListBusinessClick = () => {
    if (!isAuthenticated) {
      navigate("/login", { state: { from: "/business-directory" } });
      return;
    }
    setShowForm(true);
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!user) return;

    const coverImage =
      form.coverImage.trim() ||
      `https://placehold.co/1200x675/0A2540/FFFFFF?text=${encodeURIComponent(
        form.businessName
      )}`;

    addBusiness({ ...form, coverImage, ownerName: user.fullName });
    setBusinesses(getAllBusinesses());
    setForm(emptyForm);
    setShowForm(false);
  };

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1>Business Directory</h1>
          <p>
            Discover and support businesses owned by NMU alumni — and meet the
            partners who sponsor our network.
          </p>
        </div>
      </section>

      {/* Sponsors */}
      <section className={styles.sponsorsSection}>
        <div className={styles.container}>
          <h2 className={styles.sponsorsHeading}>Our Partners &amp; Sponsors</h2>
          <div className={styles.sponsorsGrid}>
            {SPONSORS.map((sponsor) => (
              <div key={sponsor.id} className={styles.sponsorCard}>
                <img src={sponsor.logo} alt={sponsor.name} />
                <span className={styles.sponsorName}>{sponsor.name}</span>
                <span className={styles.sponsorTier}>{sponsor.tier} Partner</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Alumni businesses */}
      <div className={styles.controls}>
        <div className={styles.controlsInner}>
          <div className={styles.searchWrap}>
            <Search className={styles.searchIcon} size={18} />
            <input
              type="search"
              placeholder="Search businesses…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={styles.searchInput}
              aria-label="Search alumni businesses"
            />
          </div>

          <select
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className={styles.select}
            aria-label="Filter by category"
          >
            {categories.map((c) => (
              <option key={c} value={c}>
                {c === "all" ? "All Categories" : c}
              </option>
            ))}
          </select>

          <button
            type="button"
            className={styles.listBtn}
            onClick={handleListBusinessClick}
          >
            <Plus size={16} /> List Your Business
          </button>
        </div>
      </div>

      <section className={styles.section}>
        <div className={styles.container}>
          <h2 className={styles.directoryHeading}>Alumni Business Directory</h2>

          {filtered.length === 0 ? (
            <div className={styles.empty}>
              <p>No businesses match your search.</p>
            </div>
          ) : (
            <div className={styles.grid}>
              {filtered.map((business) => (
                <BusinessCard key={business.id} business={business} />
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

            <h2>List Your Business</h2>

            <form className={styles.form} onSubmit={handleSubmit}>
              <div className={styles.field}>
                <label htmlFor="businessName">Business Name</label>
                <input
                  id="businessName"
                  required
                  value={form.businessName}
                  onChange={(e) =>
                    setForm({ ...form, businessName: e.target.value })
                  }
                />
              </div>

              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="category">Category</label>
                  <input
                    id="category"
                    required
                    placeholder="e.g. Logistics & Freight"
                    value={form.category}
                    onChange={(e) => setForm({ ...form, category: e.target.value })}
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

              <div className={styles.field}>
                <label htmlFor="description">Description</label>
                <textarea
                  id="description"
                  rows={4}
                  required
                  value={form.description}
                  onChange={(e) =>
                    setForm({ ...form, description: e.target.value })
                  }
                />
              </div>

              <div className={styles.row}>
                <div className={styles.field}>
                  <label htmlFor="phone">Phone (optional)</label>
                  <input
                    id="phone"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  />
                </div>
                <div className={styles.field}>
                  <label htmlFor="email">Email (optional)</label>
                  <input
                    id="email"
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                  />
                </div>
              </div>

              <div className={styles.field}>
                <label htmlFor="website">Website (optional)</label>
                <input
                  id="website"
                  value={form.website}
                  onChange={(e) => setForm({ ...form, website: e.target.value })}
                  placeholder="yourbusiness.com"
                />
              </div>

              <div className={styles.field}>
                <label htmlFor="coverImage">Cover Image URL (optional)</label>
                <input
                  id="coverImage"
                  value={form.coverImage}
                  onChange={(e) =>
                    setForm({ ...form, coverImage: e.target.value })
                  }
                  placeholder="https://example.com/photo.jpg"
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
                  List Business
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default BusinessDirectory;
