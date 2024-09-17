import React from 'react';
import styles from './EarlyDays.module.css';

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
                  src="https://images.unsplash.com/photo-1593630265256-d2cc162ab58f?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8Y29uc3RydWN0aW9uJTIwc2l0ZXxlbnwwfHwwfHx8Mg%3D%3D"
                  alt="Construction Site"
                  className="photoImage"
                />
              </div>

              <div className={styles.photo}>
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8dGVhbSUyMGNvbnN0cnVjdGlvbiUyMHNpdGV8ZW58MHx8MHx8fDI%3D"
                  alt="Team Construction Site"
                  className="photoImage"
                />

                <img
                  src="https://images.unsplash.com/photo-1593630987785-98139c5f3cc6?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8Y29uc3RydWN0aW9uJTIwc2l0ZXxlbnwwfHwwfHx8Mg%3D%3D"
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
                  src="https://images.unsplash.com/photo-1680879221403-f19bb46fe527?w=900&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fHJhaWx3YXklMjB3b3JrZXJzfGVufDB8fDB8fHwy"
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

  )
}

export default EarlyDays

          // <div className={styles.contentPhotos}>
          // </div>
