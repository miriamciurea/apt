import React from "react";
import styles from "./Reviews.module.css";
import siemens from "../../assets/siemens.png";
import ScrollingText from "./ScrollingText/ScrollingText";
import Review from "./Review/Review";
import lumen from "../../assets/lumen.png";

const reviews = [
  {
    src: siemens,
    alt: "Siemens logo",
    name: "Steve J.",
    companyName: "Siemens mobility",
    reviewText:
      "Great Experience working with this company. They were very professional and delivered the project on time.",
  },
  {
    src: lumen,
    alt: "Lumen logo",
    name: "Andrew W.",
    companyName: "Lumen",
    reviewText:
      "Works delivered on time and within budget. They were very professional and easy to work with.",
  },
  {
    src: siemens,
    alt: "Another logo",
    name: "Josh S.",
    companyName: "Siemens mobility",
    reviewText:
      "Easy to work with and very professional. They delivered the project on time and within budget.",
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
