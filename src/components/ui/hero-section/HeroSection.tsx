import { Award } from "lucide-react"; 
import styles from "./HeroSection.module.css";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  iconColor?: string;
  bgColor?: string;
  className?: string;
}

export default function HeroSection({
  title,
  subtitle,
  iconColor = "#C9A84C",
  bgColor = "#0A2540",
  className = "",
}: HeroSectionProps) {
  return (
    <div 
      className={`${styles.hero} ${className}`}
      style={{ backgroundColor: bgColor }}
    >
      <div className={styles.container}>
        <Award 
          className={styles.icon} 
          style={{ color: iconColor }} 
        />
        <h1 className={styles.title}>{title}</h1>
        <p className={styles.subtitle}>{subtitle}</p>
      </div>
    </div>
  );
}