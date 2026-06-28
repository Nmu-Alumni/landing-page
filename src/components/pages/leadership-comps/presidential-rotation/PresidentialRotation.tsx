import styles from "./PresidentialRotation.module.css";

interface Cycle {
  cycle: string;
  zone: string;
  states: string[];
  status: "current" | "upcoming" | "completed";
}

const cycles: Cycle[] = [
  {
    cycle: "Cycle 1",
    zone: "South-South",
    states: ["Delta", "Rivers", "Bayelsa", "Cross River", "Akwa Ibom", "Edo"],
    status: "current",
  },
  {
    cycle: "Cycle 2",
    zone: "South-East",
    states: ["Abia", "Anambra", "Ebonyi", "Enugu", "Imo"],
    status: "upcoming",
  },
  {
    cycle: "Cycle 3",
    zone: "South-West",
    states: ["Lagos", "Ogun", "Oyo", "Osun", "Ondo", "Ekiti"],
    status: "upcoming",
  },
  {
    cycle: "Cycle 4",
    zone: "North-Central",
    states: ["Benue", "Kogi", "Kwara", "Nasarawa", "Niger", "Plateau", "FCT"],
    status: "upcoming",
  },
  {
    cycle: "Cycle 5",
    zone: "North-West",
    states: ["Kaduna", "Kano", "Katsina", "Kebbi", "Sokoto", "Zamfara", "Jigawa"],
    status: "upcoming",
  },
  {
    cycle: "Cycle 6",
    zone: "North-East",
    states: ["Adamawa", "Bauchi", "Borno", "Gombe", "Taraba", "Yobe"],
    status: "upcoming",
  },
];

function StatusBadge({ status }: { status: Cycle["status"] }) {
  if (status === "current") {
    return (
      <span className={styles.badgeCurrent}>
        <span className={styles.badgeDot} />
        CURRENT
      </span>
    );
  }
  if (status === "upcoming") {
    return <span className={styles.badgeUpcoming}>Upcoming</span>;
  }
  return <span className={styles.badgeCompleted}>Completed</span>;
}

export default function PresidentialRotation() {
  return (
    <section className={styles.section}>
      <div className={styles.eyebrow}>CONSTITUTIONAL SCHEDULE</div>
      <h1 className={styles.heading}>
        Presidential Rotation — Geopolitical Zone Schedule
      </h1>
      <p className={styles.description}>
        Per Article IV of the NMUAA Constitution, the Presidency rotates across
        all six geopolitical zones of Nigeria to ensure federal character and
        equitable representation.
      </p>

      <div className={styles.tableWrapper}>
        <table className={styles.table}>
          <thead>
            <tr className={styles.headerRow}>
              <th className={styles.th}>CYCLE</th>
              <th className={styles.th}>GEOPOLITICAL ZONE</th>
              <th className={styles.th}>STATES COVERED</th>
              <th className={styles.th}>STATUS</th>
            </tr>
          </thead>
          <tbody>
            {cycles.map((row) => (
              <tr
                key={row.cycle}
                className={`${styles.row} ${
                  row.status === "current" ? styles.rowCurrent : ""
                }`}
              >
                <td
                  className={`${styles.td} ${styles.cycleCell} ${
                    row.status === "current" ? styles.cycleCurrent : ""
                  }`}
                >
                  {row.cycle}
                </td>
                <td className={`${styles.td} ${styles.zoneCell}`}>
                  {row.zone}
                </td>
                <td className={`${styles.td} ${styles.statesCell}`}>
                  {row.states.map((state, i) => (
                    <span key={state}>
                      <span className={styles.stateLink}>{state}</span>
                      {i < row.states.length - 1 && (
                        <span className={styles.stateSep}>, </span>
                      )}
                    </span>
                  ))}
                </td>
                <td className={`${styles.td} ${styles.statusCell}`}>
                  <StatusBadge status={row.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className={styles.footnote}>
        After Cycle 6, the rotation recommences from Cycle 1, unless the NGA
        adopts a different order by a ¾ majority resolution.
      </p>
    </section>
  );
}