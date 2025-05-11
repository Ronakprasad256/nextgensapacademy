import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact = () => {
  return (
    <motion.div 
      className="contact-page"
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      transition={{ duration: 0.8 }}
    >
      <h1 className="text-4xl font-bold">Contact Us</h1>
    </motion.div>
  );
};

export default Contact;