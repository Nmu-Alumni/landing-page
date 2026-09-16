import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import styles from "./MembersPage.module.css";
import type { MemberProfile } from "../../types";
import { allMembers } from "../../mockdata/membersData";

type CategoryFilter = "all" | "executive" | "directors" | "members";
type SortOption = "role" | "name-asc" | "name-desc";

const CATEGORY_LABELS: Record<CategoryFilter, string> = {
  all: "All",
  executive: "Executive Council",
  directors: "Directors",
  members: "Members",
};

const SPOTLIGHT_RANK_CUTOFF = 3; // President, VP, VP External

/**
 * `rank` is typed as an optional string on MemberProfile. This safely
 * converts it to a comparable number for sorting; members with a
 * missing or non-numeric rank sort to the very bottom.
 */
const rankOf = (m: MemberProfile): number => {
  const n = Number(m.rank);
  return Number.isFinite(n) ? n : Number.MAX_SAFE_INTEGER;
};

const MembersPage = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<CategoryFilter>("all");
  const [sortBy, setSortBy] = useState<SortOption>("role");

  const spotlight = useMemo(
    () =>
      [...allMembers]
        .filter((m) => rankOf(m) <= SPOTLIGHT_RANK_CUTOFF)
        .sort((a, b) => rankOf(a) - rankOf(b)),
    [],
  );

  const filtered = useMemo(() => {
    let list: MemberProfile[] = [...allMembers];

    if (category !== "all") {
      list = list.filter((m) => m.category === category);
    }

    const q = search.trim().toLowerCase();
    if (q) {
      list = list.filter(
        (m) =>
          m.name.toLowerCase().includes(q) ||
          m.title.toLowerCase().includes(q) ||
          m.profession.toLowerCase().includes(q) ||
          m.shortBio.toLowerCase().includes(q),
      );
    }

    list.sort((a, b) => {
      if (sortBy === "name-asc") return a.name.localeCompare(b.name);
      if (sortBy === "name-desc") return b.name.localeCompare(a.name);
      return rankOf(a) - rankOf(b); // true hierarchical order, President first
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
    [],
  );

  /* ---- sliding tab indicator ---- */
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
  const [indicator, setIndicator] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const el = tabRefs.current[category];
    if (el) setIndicator({ left: el.offsetLeft, width: el.offsetWidth });
  }, [category]);

  useEffect(() => {
    const onResize = () => {
      const el = tabRefs.current[category];
      if (el) setIndicator({ left: el.offsetLeft, width: el.offsetWidth });
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [category]);

  /* ---- scroll-reveal for the grid ---- */
  const gridRef = useRef<HTMLDivElement>(null);
  const [gridVisible, setGridVisible] = useState(false);

  useEffect(() => {
    const node = gridRef.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setGridVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.05 },
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  // remount key so entrance animation replays whenever the visible set changes
  const gridKey = `${category}-${sortBy}-${search}`;

  return (
    <div className={styles.page}>
      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.blob1} aria-hidden="true" />
        <div className={styles.blob2} aria-hidden="true" />
        <div className={styles.heroInner}>
          <span className={styles.badge}>2026 – 2028 Term</span>
          <h1>Our Leadership & Members</h1>
          <p>
            Meet the elected officers, directors and members of the Nigeria
            Maritime University Alumni Association.
          </p>
        </div>
      </section>

      {/* Leadership Spotlight */}
      <section className={styles.spotlightSection}>
        <div className={styles.container}>
          <h2 className={styles.spotlightHeading}>Executive Leadership</h2>
          <div className={styles.spotlightGrid}>
            {spotlight.map((m, i) => (
              <Link
                to={`/leadership/${m.id}`}
                key={m.id}
                className={styles.spotlightCard}
                style={{ "--i": i } as React.CSSProperties}
              >
                <div className={styles.spotlightRing}>
                  <img
                    src={m.image}
                    alt={m.name}
                    className={styles.spotlightImg}
                  />
                </div>
                <h3>{m.name}</h3>
                <p className={styles.spotlightTitle}>{m.title}</p>
                <span className={styles.spotlightCta}>View profile →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Controls */}
      <div className={styles.controls}>
        <div className={styles.controlsInner}>
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

          <div className={styles.tabs} role="tablist">
            <span
              className={styles.tabIndicator}
              style={{
                transform: `translateX(${indicator.left}px)`,
                width: indicator.width,
              }}
              aria-hidden="true"
            />
            {(Object.keys(CATEGORY_LABELS) as CategoryFilter[]).map((key) => (
              <button
                key={key}
                ref={(el) => {
                  tabRefs.current[key] = el;
                }}
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

          <div className={styles.sortWrap}>
            <label htmlFor="sort">Sort by</label>
            <select
              id="sort"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as SortOption)}
              className={styles.select}
            >
              <option value="role">Rank (default)</option>
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
      <section className={styles.section} ref={gridRef}>
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
            <div
              key={gridKey}
              className={`${styles.grid} ${
                gridVisible ? styles.gridVisible : ""
              }`}
            >
              {filtered.map((member, i) => (
                <MemberCard key={member.id} member={member} index={i} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

/* ---------- Card component ---------- */
const MemberCard = ({
  member,
  index,
}: {
  member: MemberProfile;
  index: number;
}) => {
  const categoryLabel =
    member.category === "executive"
      ? "Executive"
      : member.category === "directors"
        ? "Director"
        : "Member";

  return (
    <Link
      to={`/leadership/${member.id}`}
      className={styles.card}
      style={{ "--i": index } as React.CSSProperties}
    >
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
