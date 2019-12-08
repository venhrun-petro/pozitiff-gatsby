import React from 'react'
import Layout from '../components/layout'
import HeroSection from '../components/sections/hero/Hero'
import SkillsSection from '../components/sections/skills/Skills'
import AboutSection from '../components/sections/about/About'
import TestimonialsSection from '../components/sections/testimonials/Testimonials'
import ContactSection from '../components/sections/contact/Contact'

const IndexPage = () => (
  <Layout>
    <HeroSection />
    <SkillsSection />
    <AboutSection />
    <TestimonialsSection />
    <ContactSection />
  </Layout>
)

export default IndexPage