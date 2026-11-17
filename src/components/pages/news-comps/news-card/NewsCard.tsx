import { Link } from "react-router-dom";
import { ArrowRight, CalendarDays, Clock } from "lucide-react";
import styles from "./NewsCard.module.css";
import type { NewsArticle } from "../../../../types";

interface Props {
  article: NewsArticle;
}

const NewsCard = ({ article }: Props) => {
  return (
    <article className={styles.card}>
      <Link to={`/news/${article.id}`} className={styles.imageLink}>
        <img src={article.image} alt={article.title} className={styles.image} />
        <span className={styles.badge}>{article.category}</span>
      </Link>

      <div className={styles.content}>
        <div className={styles.meta}>
          <span>
            <CalendarDays size={14} />
            {article.date}
          </span>
          <span>
            <Clock size={14} />
            {article.readTime}
          </span>
        </div>

        <h3 className={styles.title}>
          <Link to={`/news/${article.id}`}>{article.title}</Link>
        </h3>

        <p className={styles.excerpt}>{article.excerpt}</p>

        <div className={styles.footer}>
          <span className={styles.author}>{article.author}</span>
          <Link to={`/news/${article.id}`} className={styles.link}>
            Read More <ArrowRight size={15} />
          </Link>
        </div>
      </div>
    </article>
  );
};

export default NewsCard;
