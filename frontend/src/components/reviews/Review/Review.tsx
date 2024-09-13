import styles from "./Review.module.css";

interface PropsType {
  name: string;
  src: string;
  alt: string;
  companyName: string;
  text: string;
}

const Review = (props: PropsType) => {
  const { name, src, alt, companyName, text } = props;
  console.log(name, src, alt, companyName, text);

  return (
    <div className={styles.reviewInstance}>
      <img src={src} alt={alt} className={styles.reviewImage} />
      <p className={styles.clientName}>{name}</p>
      <p className={styles.companyName}>{companyName}</p>
      <hr className={styles.reviewLine} />
      <div className={styles.reviewText}>
        <p>
          "This is the review text from client 1. They had a great experience
          with our service."
        </p>
      </div>
    </div>
  );
};

export default Review;
