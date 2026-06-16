import { Link } from "react-router";
import { Anchor, MapPin } from "lucide-react";
import styles from "./UpcomingEvents.module.css";
import { Button } from "../../../ui/button/Button";

interface Event {
  title: string;
  date: string;
  loc: string;
  tags: string[];
  img: string;
}

const EVENTS: Event[] = [
  {
    title: "NMU Alumni Annual Reunion 2025",
    date: "Oct 15, 2025",
    loc: "Eko Hotels, Lagos",
    tags: ["Networking", "Gala"],
    img: "https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Maritime Career Fair",
    date: "Nov 02, 2025",
    loc: "Virtual",
    tags: ["Career", "Industry"],
    img: "https://images.unsplash.com/photo-1515187029135-18ee286d815b?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Delta Waterways Forum",
    date: "Dec 10, 2025",
    loc: "Warri, Delta State",
    tags: ["Seminar", "Policy"],
    img: "https://images.unsplash.com/photo-1663103746090-2e4274c6c7ac?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzaGlwcGluZyUyMGNvbnRhaW5lciUyMHBvcnR8ZW58MXx8fHwxNzc2MTAyNjA5fDA&ixlib=rb-4.1.0&q=80&w=1080",
  },
];

export default function UpcomingEvents() {
  return (
    <section className={styles.section}>
      {/* decorative anchor motif */}
      <div className={styles.motif} aria-hidden="true">
        <Anchor size={400} />
      </div>

      <div className={styles.container}>
        <h2 className={styles.heading}>
          Reunions, Seminars &amp; Maritime Summits
        </h2>

        <div className={styles.grid}>
          {EVENTS.map((event) => (
            <div key={event.title} className={styles.card}>
              {/* Image */}
              <div className={styles.imgWrap}>
                <img
                  src={event.img}
                  alt={event.title}
                  className={styles.img}
                />
                <div className={styles.dateBadge}>{event.date}</div>
              </div>

              {/* Body */}
              <div className={styles.body}>
                <div className={styles.tags}>
                  {event.tags.map((tag) => (
                    <span key={tag} className={styles.tag}>
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className={styles.title}>{event.title}</h3>
                <div className={styles.location}>
                  <MapPin size={16} />
                  {event.loc}
                </div>
                <Button variant="outlineTeal" className={styles.registerBtn}>
                  Register Now
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className={styles.footer}>
          <Link to="/events">
            <Button variant="ghost" size="lg">
              View All Events
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}