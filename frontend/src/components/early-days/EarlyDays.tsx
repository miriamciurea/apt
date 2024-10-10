import React from 'react';
import styles from './EarlyDays.module.css';
import b2 from '/public/images/b2.jpeg'; // Import local images
import h2 from '/public/images/h2.jpeg';
import h3 from '/public/images/h3.jpeg';
import h4 from '/public/images/h4.jpeg';


const EarlyDays: React.FC = () => {
  return (
    <>
      <div className={styles.container}>

        <div className={styles.title}>EARLY DAYS</div>

        <div className={styles.content}>
          <div className={styles.contentItem1}>
            In the early 2000s, our journey in the rail and construction
            industry began with humble beginnings. With a small, dedicated
            team and limited resources, we took on our first few projects,
            focusing on quality and precision. Each project was a learning
            experience, allowing us to refine our skills and build a reputation
            for reliability and excellence.

            <div className={styles.photo1}>
              <div>
                <img
                  src={b2} // Swapped this to h3.jpeg
                  alt="Construction Site"
                  className="photoImage"
                                    style={{
                    height: '300px',
                    width: 'auto'
                  }}
                />
              </div>

              <div>
                <img
                  src={h2} // Keeping h2 as it is
                  alt="Team Construction Site"
                  className="photoImage"
                />

                <img
                  src={h4} // Swapped this to b2.jpeg
                  alt="Construction"
                  className="photoImage"
                  style={{
                    width: `70%`
                  }}
                />
              </div>
            </div>
          </div>

          <div className={styles.contentItem2}>
            <div className={styles.photo2}>
              <div>
                <img
                  src={h3} // Keeping h4 as it is
                  alt="Railway Workers"
                  className="photoImage"
                  style={{
                    width: `99%`
                  }}
                />
              </div>
            </div>

            As we navigated through challenges and seized opportunities, our
            expertise grew. Through perseverance and hard work, we expanded
            our capabilities and services. This foundation laid the groundwork for
            the thriving company we are today, committed to innovation and
            excellence in every project.
          </div>
        </div>

      </div>
    </>
  );
}

export default EarlyDays;
