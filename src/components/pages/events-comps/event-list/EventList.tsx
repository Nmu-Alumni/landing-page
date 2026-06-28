import EventCard from "../event-card/EventCard";
import styles from "./EventList.module.css";
import { EVENTS } from "./eventsData";

const EventList = () => {
  return (
    <div className={styles.grid}>
      {EVENTS.map((event) => (
        <EventCard key={event.id} event={event} />
      ))}
    </div>
  );
};

export default EventList;