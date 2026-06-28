import EventList from "../../components/pages/events-comps/event-list/EventList";
import styles from "./Events.module.css";

const Events = () => {
  return (
    <section className={styles.events}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>Alumni Events</h1>

          <p>
            Reconnect with former shipmates and network with industry leaders
            at our upcoming maritime and naval alumni gatherings.
          </p>
        </div>

        <EventList />
      </div>
    </section>
  );
};

export default Events;