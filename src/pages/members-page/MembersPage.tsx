import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./MembersPage.module.css";
import type { MemberProfile } from "../../types";
import { allMembers } from "../../mockdata/membersData";

type CategoryFilter = "all" | "executive" | "directors" | "members";
type SortOption = "name-asc" | "name-desc" | "role";

const CATEGORY_LABELS: Record<CategoryFilter, string> = {
  all: "All",
  executive: "Executive Council",
  directors: "Directors",
  members: "Members",
};

const MembersPage = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<CategoryFilter>("all");
  const [sortBy, setSortBy] = useState<SortOption>("role");

  const filtered = useMemo(() => {
    let list: MemberProfile[] = [...allMembers];

    // Category filter
    if (category !== "all") {
      list = list.filter((m) => m.category === category);
    }

    // Search
    const q = search.trim().toLowerCase();
    if (q) {
      list = list.filter(
        (m) =>
          m.name.toLowerCase().includes(q) ||
          m.title.toLowerCase().includes(q) ||
          m.profession.toLowerCase().includes(q) ||
          m.shortBio.toLowerCase().includes(q)
      );
    }

    // Sort
    list.sort((a, b) => {
      if (sortBy === "name-asc") return a.name.localeCompare(b.name);
      if (sortBy === "name-desc") return b.name.localeCompare(a.name);
      // role order: executive → directors → members, then name
      const order = { executive: 0, directors: 1, members: 2, trustees: 3 };
      const diff = (order[a.category] ?? 9) - (order[b.category] ?? 9);
      return diff !== 0 ? diff : a.name.localeCompare(b.name);
    });

    return list;
  }, [search, category, sortBy]);

  const counts = useMemo(
    () => ({
      all: allMembers.length,
      executive: allMembers.filter((m) => m.category === "executive").length,
      directors: allMembers.filter((m) => m.category === "directors").length,
      members: allMembers.filter((m) => m.category === "members").length,
    }),
    []
  );

  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <span className={styles.badge}>2026 – 2028 Term</span>
          <h1>Our Leadership & Members</h1>
          <p>
            Meet the elected officers, directors and members of the Nigeria
            Maritime University Alumni Association.
          </p>
        </div>
      </section>

      {/* Controls */}
      <div className={styles.controls}>
        <div className={styles.controlsInner}>
          {/* Search */}
          <div className={styles.searchWrap}>
            <svg
              className={styles.searchIcon}
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="search"
              placeholder="Search by name, role or profession…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={styles.searchInput}
              aria-label="Search members"
            />
            {search && (
              <button
                type="button"
                className={styles.clearBtn}
                onClick={() => setSearch("")}
                aria-label="Clear search"
              >
                ×
              </button>
            )}
          </div>

          {/* Category tabs */}
          <div className={styles.tabs} role="tablist">
            {(Object.keys(CATEGORY_LABELS) as CategoryFilter[]).map((key) => (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={category === key}
                className={`${styles.tab} ${
                  category === key ? styles.tabActive : ""
                }`}
                onClick={() => setCategory(key)}
              >
                {CATEGORY_LABELS[key]}
                <span className={styles.count}>{counts[key]}</span>
              </button>
            ))}
          </div>

          {/* Sort */}
          <div className={styles.sortWrap}>
            <label htmlFor="sort">Sort by</label>
            <select
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className={styles.select}
            >
              <option value="role">Role (default)</option>
              <option value="name-asc">Name A–Z</option>
              <option value="name-desc">Name Z–A</option>
            </select>
          </div>
        </div>
      </div>

      {/* Results meta */}
      <div className={styles.meta}>
        <p>
          Showing <strong>{filtered.length}</strong> of {allMembers.length}{" "}
          members
          {search && (
            <>
              {" "}
              for “<em>{search}</em>”
            </>
          )}
        </p>
      </div>

      {/* Grid */}
      <section className={styles.section}>
        <div className={styles.container}>
          {filtered.length === 0 ? (
            <div className={styles.empty}>
              <p>No members match your search.</p>
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setCategory("all");
                }}
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className={styles.grid}>
              {filtered.map((member) => (
                <MemberCard key={member.id} member={member} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

/* ---------- Card component ---------- */
const MemberCard = ({ member }: { member: MemberProfile }) => {
  const categoryLabel =
    member.category === "executive"
      ? "Executive"
      : member.category === "directors"
      ? "Director"
      : "Member";

  return (
    <Link to={`/leadership/${member.id}`} className={styles.card}>
      <div className={styles.imageWrapper}>
        <img
          src={member.image}
          alt={member.name}
          className={styles.image}
          loading="lazy"
          onError={(e) => {
            (e.target as HTMLImageElement).src =
              "/images/placeholder-avatar.png";
          }}
        />
        <span className={styles.cardBadge}>{categoryLabel}</span>
      </div>

      <div className={styles.content}>
        <h3 className={styles.name}>{member.name}</h3>
        <p className={styles.role}>{member.title}</p>
        <p className={styles.profession}>{member.profession}</p>
        <p className={styles.bio}>{member.shortBio}</p>
        <span className={styles.cta}>View full profile →</span>
      </div>
    </Link>
  );
};

export default MembersPage;
