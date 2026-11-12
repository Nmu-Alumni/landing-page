import { useState } from "react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { eventKeys, eventTypes, listEvents, type EventFilters, type EventType } from "../../api/events";
import { retryUnlessClientError } from "../../api/mentorship";
import EventList from "../../components/pages/events-comps/event-list/EventList";
import styles from "./Events.module.css";
export default function Events() {
  const [filters, setFilters] = useState<EventFilters>({ page: 1, limit: 12, when: "upcoming" });
  const update = (values: EventFilters) => setFilters(previous => ({ ...previous, ...values, page: 1 }));
  const query = useQuery({ queryKey: eventKeys.list(filters), queryFn: () => listEvents(filters), retry: (count, error: Error) => retryUnlessClientError(count, error) });
  return <section className={styles.events}><div className={styles.container}>
    <div className={styles.header}><h1>Alumni Events</h1><p>Reconnect with former shipmates and network with industry leaders at our upcoming maritime and naval alumni gatherings.</p><Link to="/events/my-events">My events</Link></div>
    <div className={styles.controls}>
      <label>Search events<input type="search" value={filters.search ?? ""} onChange={e => update({ search: e.target.value })} placeholder="Title or venue" /></label>
      <label>When<select value={filters.when} onChange={e => update({ when: e.target.value as EventFilters["when"] })}><option value="upcoming">Upcoming</option><option value="past">Past</option><option value="all">All events</option></select></label>
      <label>Event type<select value={filters.type ?? ""} onChange={e => update({ type: (e.target.value || undefined) as EventType | undefined })}><option value="">All types</option>{Object.entries(eventTypes).map(([value, label]) => <option key={value} value={value}>{label}</option>)}</select></label>
    </div>
    {query.isPending && <p role="status">Loading events...</p>}
    {query.isError && <p role="alert">{query.error.message} <button onClick={() => void query.refetch()}>Try again</button></p>}
    {query.isSuccess && <>{query.data.events.length ? <EventList events={query.data.events} /> : <p>No events match your filters.</p>}
      <nav className={styles.controls} aria-label="Event pages"><button disabled={(filters.page ?? 1) <= 1 || query.isFetching} onClick={() => setFilters(f => ({ ...f, page: (f.page ?? 1) - 1 }))}>Previous</button><span aria-live="polite">Page {query.data.pagination.page} of {Math.max(1, query.data.pagination.pages)}</span><button disabled={query.data.pagination.page >= query.data.pagination.pages || query.isFetching} onClick={() => setFilters(f => ({ ...f, page: (f.page ?? 1) + 1 }))}>Next</button></nav>
    </>}
  </div></section>;
}
