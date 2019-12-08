import React from 'react'
import { StaticQuery, graphql } from 'gatsby'
import Slider from "react-slick";
import styles from './Testimonials.module.scss'
import testimonialsIcon from '../../../images/graphics/statistics_graphic_feature.svg'

class TestimonialsSection extends React.Component {
  render() {
    const settings = {
      arrows: false,
      dots: true,
      fade: true,
      autoplay: true,
      autoplaySpeed: 2000,
      dotsClass: 'slick-dots custom_dots',
      slidesToShow: 1,
      slidesToScroll: 1
    }
    return (
      <StaticQuery
        query={sliderQuery}
        render={data => {
          return (
            <section className={styles.testimonialsSection} id="testimonials">
              <div className="container">
                <div className="row">
                  <div className="col-12">
                    <div className="section__header">
                      <h2 className="section__header_title" style={{color: '#ffffff'}}>Testimonials</h2>
                      <img src={testimonialsIcon} alt="section-graphics" className="section__header_image" />
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center">
                  <div className="col-12 col-md-10">
                    <div className="testimonialsSection__slider">
                      <Slider className={styles.testimonialsSection__slider} {...settings}>
                        {data.allContentfulTestimonialsList.edges.map((testimonial, i) => (
                          <div className={styles.testimonialsSection__slider__inner} key={i}>
                            <img className={styles.testimonialsSection__slider__inner_avatar} src={testimonial.node.userAvatar.file.url} alt={testimonial.node.userAvatar.description} />
                            <h3 className={styles.testimonialsSection__slider__inner_title}>{testimonial.node.userName}</h3>
                            <p className={styles.testimonialsSection__slider__inner_description}>{testimonial.node.userFeedback}</p>
                          </div>
                        ))}
                      </Slider>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )
        }
        }
      />
    )
  }
}

export default TestimonialsSection

const sliderQuery = graphql `
  query testimonialsQuery {
  allContentfulTestimonialsList (
    sort: {fields: [userName]},
  ) {
    edges {
      node {
        userName
        userFeedback
        userAvatar {
          description
          file {
            url
          }
        }
      }
    }
  }
}
`
