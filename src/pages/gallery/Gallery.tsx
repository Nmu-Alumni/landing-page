import { useMemo, useState } from "react";
import styles from "./Gallery.module.css";
import GalleryGrid from "../../components/pages/gallery-comps/gallery-grid/GalleryGrid";
import { GALLERY } from "../../components/pages/gallery-comps/gallery-grid/galleryData";
import type { GalleryCategory } from "../../types";

type CategoryFilter = "all" | GalleryCategory;

const CATEGORIES: CategoryFilter[] = [
  "all",
  "Events",
  "Graduation",
  "Campus Life",
  "Reunions",
  "Sports",
];

const Gallery = () => {
  const [category, setCategory] = useState<CategoryFilter>("all");

  const filtered = useMemo(() => {
    if (category === "all") return GALLERY;
    return GALLERY.filter((img) => img.category === category);
  }, [category]);

  const counts = useMemo(() => {
    const map: Record<CategoryFilter, number> = {
      all: GALLERY.length,
      Events: 0,
      Graduation: 0,
      "Campus Life": 0,
      Reunions: 0,
      Sports: 0,
    };
    GALLERY.forEach((img) => {
      map[img.category] += 1;
    });
    return map;
  }, []);

  return (
    <div className={styles.page}>
      <section className={styles.hero}>
        <div className={styles.heroInner}>
          <h1>Photo Gallery</h1>
          <p>
            Moments from campus life, graduations, reunions, and events across
            the NMU Alumni Network.
          </p>
        </div>
      </section>

      <div className={styles.controls}>
        <div className={styles.controlsInner}>
          {CATEGORIES.map((key) => (
            <button
              key={key}
              type="button"
              className={`${styles.tab} ${
                category === key ? styles.tabActive : ""
              }`}
              onClick={() => setCategory(key)}
            >
              {key === "all" ? "All" : key}
              <span className={styles.count}>{counts[key]}</span>
            </button>
          ))}
        </div>
      </div>

      <section className={styles.section}>
        <div className={styles.container}>
          <GalleryGrid images={filtered} />
        </div>
      </section>
    </div>
  );
};

export default Gallery;
