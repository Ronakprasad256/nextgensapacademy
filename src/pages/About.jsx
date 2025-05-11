import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <motion.div 
      className="about-page"
      initial={{ x: -100 }}
      animate={{ x: 0 }}
      transition={{ duration: 1 }}
    >
      <h1 className="text-4xl font-bold">About Atos SAP Training & Education</h1>
      <p className="mt-4 text-lg">Atos SAP training center is well managed and equipped with knowledgeable staff and trainers. We ensure quality education to drive our students on the right career path to a successful career in the SAP ecosystem.</p>
      <p className="mt-4 text-lg">Our training programs help learners acquire skills and knowledge needed to tackle even the most challenging projects.</p>
    </motion.div>
  );
};

export default About;