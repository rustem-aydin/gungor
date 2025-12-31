
import React from 'react';
import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="mb-16"
    >
      <h2 className="text-3xl md:text-4xl font-extrabold tracking-tighter uppercase mb-4 text-sky-950">
        {title}
      </h2>
      {subtitle && (
        <p className="text-zinc-500 max-w-xl text-lg leading-relaxed">
          {subtitle}
        </p>
      )}
      <div className="w-12 h-1 bg-sky-500 mt-8" />
    </motion.div>
  );
};
