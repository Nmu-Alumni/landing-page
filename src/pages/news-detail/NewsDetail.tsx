import { useMemo } from "react";
import { Link, useParams } from "react-router-dom";
import { ArrowLeft, CalendarDays, Clock } from "lucide-react";
import styles from "./NewsDetail.module.css";
import {
  NEWS,
  getArticleById,
} from "../../components/pages/news-comps/news-list/newsData";

const NewsDetail = () => {
  const { id } = useParams<{ id: string }>();
  const article = getArticleById(id || "");

  const related = useMemo(() => {
    if (!article) return [];
    return NEWS.filter(
      (a) => a.category === article.category && a.id !== article.id
    ).slice(0, 3);
  }, [article]);

  if (!article) {
    return (
      <div className={styles.notFound}>
        <h2>Article not found</h2>
        <p>The story you're looking for doesn't exist or has been moved.</p>
        <Link to="/news" className={styles.primaryBtn}>
          ← Back to News &amp; Blog
        </Link>
      </div>
    );
  }

  return (
    <div className={styles.page}>
      <div className={styles.topBar}>
        <div className={styles.topBarInner}>
          <Link to="/news" className={styles.backLink}>
            <ArrowLeft size={16} /> All News &amp; Blog
          </Link>
        </div>
      </div>

      <article className={styles.container}>
        <header className={styles.header}>
          <span className={styles.category}>{article.category}</span>
          <h1 className={styles.title}>{article.title}</h1>

          <div className={styles.meta}>
            <span className={styles.author}>{article.author}</span>
            <span className={styles.metaItem}>
              <CalendarDays size={15} /> {article.date}
            </span>
            <span className={styles.metaItem}>
              <Clock size={15} /> {article.readTime}
            </span>
          </div>
        </header>

        <div className={styles.imageWrapper}>
          <img src={article.image} alt={article.title} className={styles.image} />
        </div>

        <div className={styles.content}>
          {article.content
            .split("\n")
            .filter((p) => p.trim())
            .map((paragraph, i) => (
              <p key={i}>{paragraph.trim()}</p>
            ))}
        </div>

        {related.length > 0 && (
          <section className={styles.relatedSection}>
            <h2>More in {article.category}</h2>
            <div className={styles.relatedGrid}>
              {related.map((r) => (
                <Link
                  key={r.id}
                  to={`/news/${r.id}`}
                  className={styles.relatedCard}
                >
                  <img src={r.image} alt={r.title} loading="lazy" />
                  <div>
                    <strong>{r.title}</strong>
                    <span>{r.date}</span>
                  </div>
                </Link>
              ))}
            </div>
          </section>
        )}
      </article>
    </div>
  );
};

export default NewsDetail;
