import * as styles from "./WhatWeOffer.module.css";

const domains = [
  {
    imageSource:
      "https://plus.unsplash.com/premium_photo-1661911309991-cc81afcce97d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Optic Fibre",
    alt: "Optic Fibre",
  },
  {
    imageSource:
      "https://plus.unsplash.com/premium_photo-1664301167194-455b2ea6f8e7?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Construction",
    alt: "Construction",
  },
  {
    imageSource:
      "https://plus.unsplash.com/premium_photo-1661962779084-1a15ec50dfca?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    name: "Rail",
    alt: "Rail",
  },
];

const WhatWeOffer = () => {
  return (
    <section className={styles.section}>
      <h1 className={styles.title}>
        What <span className={styles.highlight}>we</span> offer
      </h1>
      <div className={styles.container}>
        {domains.map((domain) => {
          return (
            <div className={styles.imageContainer}>
              <img
                src={domain.imageSource}
                alt={domain.alt}
                className={styles.image}
              />
              {domain.name}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WhatWeOffer;
