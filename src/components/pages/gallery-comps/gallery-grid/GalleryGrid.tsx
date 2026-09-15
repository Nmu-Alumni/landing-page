import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight, X, ZoomIn } from "lucide-react";
import styles from "./GalleryGrid.module.css";
import type { GalleryImage } from "../../../../types";

interface Props {
  images: GalleryImage[];
}

const GalleryGrid = ({ images }: Props) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const close = useCallback(() => setActiveIndex(null), []);

  const showPrev = useCallback(() => {
    setActiveIndex((i) => (i === null ? null : (i - 1 + images.length) % images.length));
  }, [images.length]);

  const showNext = useCallback(() => {
    setActiveIndex((i) => (i === null ? null : (i + 1) % images.length));
  }, [images.length]);

  useEffect(() => {
    if (activeIndex === null) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };

    window.addEventListener("keydown", onKeyDown);
    document.body.style.overflow = "hidden";

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [activeIndex, close, showPrev, showNext]);

  if (images.length === 0) {
    return (
      <div className={styles.empty}>
        <p>No photos in this category yet.</p>
      </div>
    );
  }

  const active = activeIndex !== null ? images[activeIndex] : null;

  return (
    <>
      <div className={styles.grid}>
        {images.map((image, index) => (
          <button
            key={image.id}
            type="button"
            className={styles.tile}
            onClick={() => setActiveIndex(index)}
            aria-label={`View photo: ${image.caption}`}
          >
            <img
              src={image.src}
              alt={image.caption}
              loading="lazy"
              className={styles.tileImg}
            />
            <div className={styles.tileOverlay}>
              <ZoomIn size={22} />
              <span>{image.caption}</span>
            </div>
          </button>
        ))}
      </div>

      {active && (
        <div
          className={styles.lightbox}
          role="dialog"
          aria-modal="true"
          onClick={close}
        >
          <button
            type="button"
            className={styles.closeBtn}
            onClick={close}
            aria-label="Close"
          >
            <X size={26} />
          </button>

          <button
            type="button"
            className={`${styles.navBtn} ${styles.navPrev}`}
            onClick={(e) => {
              e.stopPropagation();
              showPrev();
            }}
            aria-label="Previous photo"
          >
            <ChevronLeft size={30} />
          </button>

          <div className={styles.lightboxContent} onClick={(e) => e.stopPropagation()}>
            <img src={active.src} alt={active.caption} />
            <div className={styles.lightboxCaption}>
              <p>{active.caption}</p>
              <span>
                {active.category} · {active.date}
              </span>
            </div>
          </div>

          <button
            type="button"
            className={`${styles.navBtn} ${styles.navNext}`}
            onClick={(e) => {
              e.stopPropagation();
              showNext();
            }}
            aria-label="Next photo"
          >
            <ChevronRight size={30} />
          </button>
        </div>
      )}
    </>
  );
};

export default GalleryGrid;
