import { useMemo, useState } from "react";
import { Briefcase, MapPin, Search } from "lucide-react";
import styles from "./Directory.module.css";
import { DIRECTORY } from "../../components/pages/directory-comps/directory-list/directoryData";
import { DISCIPLINES } from "../../constants/Disciplines";
import type { DirectoryAlumnus } from "../../types";

type DisciplineFilter = "all" | (typeof DISCIPLINES)[number];

const Directory = () => {
  const [search, setSearch] = useState("");
  const [discipline, setDiscipline] = useState<DisciplineFilter>("all");

  const filtered = useMemo(() => {
    let list = DIRECTORY;

    if (discipline !== "all") {
      list = list.filter((a) => a.discipline === discipline);
    }

    const q = search.trim().toLowerCase();
    if (q) {
      list = list.filter(
        (a) =>
          a.name.toLowerCase().includes(q) ||
          a.role.toLowerCase().includes(q) ||
          a.company.toLowerCase().includes(q) ||
          a.location.toLowerCase().includes(q)
      );
    }

    return list;
  }, [search, discipline]);

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1>Alumni Directory</h1>
          <p>
            Search and connect with NMU graduates working across the global
            maritime industry.
          </p>
        </div>
      </section>

      <div className={styles.controls}>
        <div className={styles.controlsInner}>
          <div className={styles.searchWrap}>
            <Search className={styles.searchIcon} size={18} />
            <input
              type="search"
              placeholder="Search by name, role, company, or location…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={styles.searchInput}
              aria-label="Search alumni directory"
            />
          </div>

          <select
            value={discipline}
            onChange={(e) => setDiscipline(e.target.value)}
            className={styles.select}
            aria-label="Filter by discipline"
          >
            <option value="all">All Disciplines</option>
            {DISCIPLINES.map((d) => (
              <option key={d} value={d}>
                {d}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className={styles.meta}>
        <p>
          Showing <strong>{filtered.length}</strong> of {DIRECTORY.length}{" "}
          alumni
        </p>
      </div>

      <section className={styles.section}>
        <div className={styles.container}>
          {filtered.length === 0 ? (
            <div className={styles.empty}>
              <p>No alumni match your search.</p>
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setDiscipline("all");
                }}
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className={styles.grid}>
              {filtered.map((alumnus) => (
                <AlumnusCard key={alumnus.id} alumnus={alumnus} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

const AlumnusCard = ({ alumnus }: { alumnus: DirectoryAlumnus }) => (
  <div className={styles.card}>
    <img src={alumnus.photo} alt={alumnus.name} className={styles.photo} />
    <div className={styles.cardBody}>
      <h3 className={styles.name}>{alumnus.name}</h3>
      <p className={styles.discipline}>
        {alumnus.discipline} · '{alumnus.graduationYear.slice(-2)}
      </p>
      <p className={styles.role}>
        <Briefcase size={13} /> {alumnus.role}, {alumnus.company}
      </p>
      <p className={styles.location}>
        <MapPin size={13} /> {alumnus.location}
      </p>
    </div>
  </div>
);

export default Directory;
