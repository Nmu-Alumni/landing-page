import { Briefcase, CalendarDays, MapPin } from "lucide-react";
import styles from "./JobCard.module.css";
import type { JobListing } from "../../../../types";

interface Props {
  job: JobListing;
}

const JobCard = ({ job }: Props) => {
  const applyHref = job.applyLink || (job.applyEmail ? `mailto:${job.applyEmail}` : undefined);

  return (
    <article className={styles.card}>
      <div className={styles.header}>
        <div>
          <h3 className={styles.title}>{job.title}</h3>
          <p className={styles.company}>{job.company}</p>
        </div>
        <span className={styles.typeBadge}>{job.type}</span>
      </div>

      <div className={styles.meta}>
        <span>
          <MapPin size={14} /> {job.location}
        </span>
        <span>
          <Briefcase size={14} /> {job.category}
        </span>
        <span>
          <CalendarDays size={14} /> {job.postedDate}
        </span>
      </div>

      <p className={styles.description}>{job.description}</p>

      <div className={styles.footer}>
        <span className={styles.postedBy}>Posted by {job.postedBy}</span>
        {applyHref && (
          <a
            href={applyHref}
            target={job.applyLink ? "_blank" : undefined}
            rel={job.applyLink ? "noopener noreferrer" : undefined}
            className={styles.applyBtn}
          >
            Apply
          </a>
        )}
      </div>
    </article>
  );
};

export default JobCard;
