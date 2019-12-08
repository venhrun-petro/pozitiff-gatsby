import React from 'react'
import styles from './Hero.module.scss'
import heroIcon from '../../../images/graphics/hero_graphic_feature.svg'

const HeroSection = () => (
  <section className={styles.heroSection} id="home">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className={styles.heroSection__inner}>
            <img  src={heroIcon} className={styles.heroSection__inner_graphics} alt="hero-graphics" />
            <h1 className={styles.heroSection__inner_title}>Positive agency with can do attitude</h1>
            <p className={styles.heroSection__inner_subtitle}>Our PozitiFF Dev team will help you with any front-end,<br/> back-end or devOps processes</p>
          </div>
        </div>
      </div>
    </div>
  </section>
)
  
export default HeroSection
