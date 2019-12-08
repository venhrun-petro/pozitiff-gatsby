import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import styles from './Skills.module.scss'

const SkillsList = () => (
  <StaticQuery
    query={graphql`
      query SkillsList {
        allContentfulSkillsList (
          sort: {fields: [title]},
        ) {
          edges {
            node {
              title
              description
            }
          }
        }
      }
    `}
    render={data => (
      data.allContentfulSkillsList.edges.map((skill, index) =>
        <div className="col-12 col-md-4 col-lg-3" key={index}>
          <div className={styles.skillsSection__content_block}>
            <h3 className={styles.skillsSection__content_title}>{skill.node.title}</h3>
            <p className={styles.skillsSection__content_text}>{skill.node.description}</p>
          </div>
        </div>
      )
    )}
  />
)

export default SkillsList
