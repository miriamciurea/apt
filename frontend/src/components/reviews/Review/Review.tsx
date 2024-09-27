import * as styles from "./Review.module.css";

interface ReviewProps {
  name: string;
  src: string;
  alt: string;
  companyName: string;
  text: string;
}

const Review = ({ name, src, alt, companyName, text }: ReviewProps) => {
  return (
    <div className={styles.reviewInstance}>
      <img src={src} alt={alt} className={styles.reviewImage} />
      <p className={styles.clientName}>{name}</p>
      <p className={styles.companyName}>{companyName}</p>
      <hr className={styles.reviewLine} />
      <div className={styles.reviewText}>
        <p>{text}</p>
      </div>
    </div>
  );
};

export default Review;
