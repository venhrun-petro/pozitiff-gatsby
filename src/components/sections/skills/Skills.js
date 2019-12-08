import React from 'react'
import styles from './Skills.module.scss'
import skillsIcon from '../../../images/graphics/skills_graphic_feature.svg'
import SkillsList from './SkillsList'

const SkillsSection = () => (
  <section className={styles.skillsSection} id="skills">
    <div className="container">
      <div className="row">
        <div className="col-12">
          <div className="section__header">
            <h2 className="section__header_title">Skills</h2>
            <img src={skillsIcon} alt="section-graphics" className="section__header_image" />
          </div>
          <div className={styles.skillsSection__content}>
            <div className="row justify-content-center">
              <SkillsList />
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default SkillsSection
