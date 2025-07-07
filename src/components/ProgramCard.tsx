import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface ProgramCardProps {
  title: string;
  description: string;
  imageSrc: string;
  link: string;
  index: number;
}

const ProgramCard: React.FC<ProgramCardProps> = ({
  title,
  description,
  imageSrc,
  link,
  index
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      <div className="h-48 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{description}</p>
        <Link 
          to={link}
          className="inline-block text-blue-600 font-medium hover:text-blue-800 transition-colors"
        >
          Saiba mais →
        </Link>
      </div>
    </motion.div>
  );
};

export default ProgramCard;