import styles from "./EventCard.module.css";
import { Link } from "react-router-dom";
import { Calendar, Clock, MapPin, ArrowRight } from "lucide-react";
import type { Event } from "../../../../types";

interface Props {
  event: Event;
}

const EventCard = ({ event }: Props) => {
  return (
    <article className={styles.card}>
      <div className={styles.imageContainer}>
        <span className={styles.badge}>{event.status}</span>

        <img src={event.image} alt={event.title} />
      </div>

      <div className={styles.content}>
        <div>
          <h3>{event.title}</h3>

          <div className={styles.info}>
            <div>
              <Calendar size={16} />
              <span>{event.date}</span>
            </div>

            <div>
              <Clock size={16} />
              <span>{event.time}</span>
            </div>

            <div>
              <MapPin size={16} />
              <span>{event.location}</span>
            </div>
          </div>
        </div>

        <Link to={`/events/${event.id}`} className={styles.link}>
          View Details & Register
          <ArrowRight size={16} />
        </Link>
      </div>
    </article>
  );
};

export default EventCard;