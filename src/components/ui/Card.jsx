import { motion } from 'framer-motion';

export default function Card({ children, className = '', ...props }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={`bg-white rounded-xl shadow-xl shadow-gray-200/50 p-6 ${className}`}
      {...props}
    >
      {children}
    </motion.div>
  );
}
