import React, { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { Hero, TrustBar, WhyFuze, Services, CaseStudies, Industries, Testimonials, Execution, Metrics, ContactSection, Footer } from '../components'

export default function HomePage({ openModal }) {
  return (
    <>
      <Hero openModal={openModal} />
      <TrustBar />
      <Services openModal={openModal} />
      <Execution />
      <Metrics />
      <CaseStudies />
      <Industries />
      <Testimonials />
      <WhyFuze />
      <ContactSection openModal={openModal} />
      <Footer />
    </>
  );
}
