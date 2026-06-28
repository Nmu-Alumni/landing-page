import styles from "./NalecoTribunal.module.css";

interface Member {
  name: string;
  role?: string;
  tenure?: string;
  hasAvatar?: boolean;
  avatarSrc?: string;
}

interface OrganData {
  tag: string;
  chairman: {
    label: string;
    name: string;
    tenure: string;
    avatarSrc?: string;
  };
  members: Member[];
  footnote: string;
}

const naleco: OrganData = {
  tag: "NATIONAL ELECTORAL COMMISSION",
  chairman: {
    label: "CHAIRMAN, NALECO",
    name: "Hon. Justice Bello Usman (Rtd.)",
    tenure: "2026 – 2028",
    avatarSrc: undefined,
  },
  members: [
    { name: "Barr. Chisom Obi (Member)" },
    { name: "Mr. Yakubu Danladi (Member)" },
    { name: "Miss Efua Mensah (Secretary)" },
  ],
  footnote:
    "NALECO tenure is coterminous with the NEC term it supervises. Per Article III §3.05.",
};

const edt: OrganData = {
  tag: "ETHICS & DISCIPLINARY TRIBUNAL",
  chairman: {
    label: "CHAIRMAN, EDT",
    name: "Prof. Ngozi Iweala-Obi",
    tenure: "Appointed 2024 — Expires 2027",
    avatarSrc: undefined,
  },
  members: [
    {
      name: "Prof. Olumide Akintola",
      role: "EDT Member · 2024 – 2027",
      hasAvatar: true,
    },
    {
      name: "Mrs. Hadiza Suleiman",
      role: "EDT Member · 2024 – 2027",
      hasAvatar: true,
    },
  ],
  footnote:
    "EDT members are appointed by the BOT for 3-year renewable terms. Per Article III §3.06.",
};

function Avatar({ src, name }: { src?: string; name: string }) {
  const initials = name
    .split(" ")
    .slice(0, 2)
    .map((w) => w[0])
    .join("")
    .toUpperCase();

  return (
    <div className={styles.avatar}>
      {src ? (
        <img src={src} alt={name} />
      ) : (
        <span className={styles.avatarInitials}>{initials}</span>
      )}
    </div>
  );
}

function OrganCard({ organ }: { organ: OrganData }) {
  return (
    <div className={styles.card}>
      <div className={styles.cardTag}>{organ.tag}</div>

      {/* Chairman row */}
      <div className={styles.chairmanRow}>
        <Avatar name={organ.chairman.name} src={organ.chairman.avatarSrc} />
        <div className={styles.chairmanInfo}>
          <span className={styles.chairmanLabel}>{organ.chairman.label}</span>
          <p className={styles.chairmanName}>{organ.chairman.name}</p>
          <p className={styles.chairmanTenure}>{organ.chairman.tenure}</p>
        </div>
      </div>

      {/* Members */}
      <div className={styles.membersList}>
        {organ.members.map((m) =>
          m.hasAvatar ? (
            <div key={m.name} className={styles.memberRowWithAvatar}>
              <Avatar name={m.name} />
              <div>
                <p className={styles.memberName}>{m.name}</p>
                {m.role && <p className={styles.memberRole}>{m.role}</p>}
              </div>
            </div>
          ) : (
            <div key={m.name} className={styles.memberRow}>
              <span className={styles.dot} />
              <span className={styles.memberNamePlain}>{m.name}</span>
            </div>
          )
        )}
      </div>

      <p className={styles.footnote}>{organ.footnote}</p>
    </div>
  );
}

export default function NalecoTribunal() {
  return (
    <section className={styles.section}>
      <div className={styles.eyebrow}>TIER 3 — INDEPENDENT ORGANS</div>
      <h1 className={styles.heading}>NALECO &amp; Ethics Tribunal</h1>
      <p className={styles.description}>
        Both NALECO and the EDT operate independently of the NEC and BOT to
        ensure electoral integrity and judicial impartiality. Their decisions
        are not subject to NEC interference.
      </p>

      <div className={styles.grid}>
        <OrganCard organ={naleco} />
        <OrganCard organ={edt} />
      </div>
    </section>
  );
}