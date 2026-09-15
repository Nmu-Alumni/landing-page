import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import styles from "./News.module.css";
import NewsCard from "../../components/pages/news-comps/news-card/NewsCard";
import { NEWS } from "../../components/pages/news-comps/news-list/newsData";
import type { NewsCategory } from "../../types";

type CategoryFilter = "all" | NewsCategory;

const CATEGORIES: CategoryFilter[] = [
  "all",
  "News",
  "Blog",
  "Achievement",
  "Announcement",
  "Career",
];

const News = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<CategoryFilter>("all");

  const featured = NEWS.find((a) => a.featured);
  const showFeatured = !search && category === "all" ? featured : undefined;

  const filtered = useMemo(() => {
    let list = showFeatured
      ? NEWS.filter((a) => a.id !== showFeatured.id)
      : NEWS;

    if (category !== "all") {
      list = list.filter((a) => a.category === category);
    }

    const q = search.trim().toLowerCase();
    if (q) {
      list = list.filter(
        (a) =>
          a.title.toLowerCase().includes(q) ||
          a.excerpt.toLowerCase().includes(q) ||
          a.author.toLowerCase().includes(q)
      );
    }

    return list;
  }, [search, category, showFeatured]);

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1>News &amp; Blog</h1>
          <p>
            Stories, updates, and career milestones from the Nigeria Maritime
            University Alumni Network.
          </p>
        </div>
      </section>

      {showFeatured && (
        <section className={styles.featuredSection}>
          <div className={styles.featuredCard}>
            <img
              src={showFeatured.image}
              alt={showFeatured.title}
              className={styles.featuredImg}
            />
            <div className={styles.featuredContent}>
              <span className={styles.featuredBadge}>
                Featured · {showFeatured.category}
              </span>
              <h2>{showFeatured.title}</h2>
              <p>{showFeatured.excerpt}</p>
              <div className={styles.featuredMeta}>
                <span>{showFeatured.author}</span>
                <span>·</span>
                <span>{showFeatured.date}</span>
                <span>·</span>
                <span>{showFeatured.readTime}</span>
              </div>
              <Link
                to={`/news/${showFeatured.id}`}
                className={styles.featuredLink}
              >
                Read Full Story →
              </Link>
            </div>
          </div>
        </section>
      )}

      <div className={styles.controls}>
        <div className={styles.controlsInner}>
          <div className={styles.searchWrap}>
            <Search className={styles.searchIcon} size={18} />
            <input
              type="search"
              placeholder="Search articles…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className={styles.searchInput}
              aria-label="Search news and blog articles"
            />
          </div>

          <div className={styles.tabs} role="tablist">
            {CATEGORIES.map((key) => (
              <button
                key={key}
                type="button"
                role="tab"
                aria-selected={category === key}
                className={`${styles.tab} ${
                  category === key ? styles.tabActive : ""
                }`}
                onClick={() => setCategory(key)}
              >
                {key === "all" ? "All" : key}
              </button>
            ))}
          </div>
        </div>
      </div>

      <section className={styles.section}>
        <div className={styles.container}>
          {filtered.length === 0 ? (
            <div className={styles.empty}>
              <p>No articles match your search.</p>
              <button
                type="button"
                onClick={() => {
                  setSearch("");
                  setCategory("all");
                }}
              >
                Clear filters
              </button>
            </div>
          ) : (
            <div className={styles.grid}>
              {filtered.map((article) => (
                <NewsCard key={article.id} article={article} />
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default News;
