import React from "react";
import styles from "./Reviews.module.css";
import siemens from "../../assets/siemens.png";
import ScrollingText from "./ScrollingText/ScrollingText";
import Review from "./Review/Review";

const reviews = [
  {
    src: siemens,
    alt: "Siemens logo",
    name: "Steve J.",
    companyName: "Siemens mobility",
    reviewText:
      "This is the review text from client 1. They had a great experience with our service.",
  },
  {
    src: siemens,
    alt: "Lumen logo",
    name: "Andrew W.",
    companyName: "Lumen",
    reviewText:
      "This is the review text from client 2. They were very satisfied with the results.",
  },
  {
    src: siemens,
    alt: "Another logo",
    name: "Josh S.",
    companyName: "Siemens mobility",
    reviewText:
      "This is the review text from client 3. They highly recommend our services.",
  },
];

const Reviews: React.FC = () => {
  return (
    <div className={`${styles.reviewSection}` }>
      <ScrollingText />
      <div className={styles.reviewContainer}>
        {reviews.map((review) => {
          return (
            <Review
              src={review.src}
              alt={review.alt}
              name={review.name}
              companyName={review.companyName}
              text={review.reviewText}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Reviews;
