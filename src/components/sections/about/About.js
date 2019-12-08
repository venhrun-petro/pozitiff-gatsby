import React from 'react'
import styles from './About.module.scss'
import aboutIcon from '../../../images/graphics/about_graphic_feature.svg'

const AboutSection = () => (
  <section className={styles.aboutSection} id="about">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="section__header">
            <h2 className="section__header_title">About us</h2>
            <img src={aboutIcon} alt="section-graphics" className="section__header_image" />
          </div>
          <div className={styles.aboutSection__content}>
            <p className={styles.aboutSection__content_text}>We are a group of young talented motivated people.</p>
            <p className={styles.aboutSection__content_text}>We believe in technologies and its power to change the planet.</p>
            <p className={styles.aboutSection__content_text}>We are growing fast and we are eager to learn new things.</p>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default AboutSection