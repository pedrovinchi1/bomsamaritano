import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface NewsCardProps {
  title: string;
  excerpt: string;
  date: string;
  imageSrc: string;
  category: string;
  slug: string;
  index: number;
}

const NewsCard: React.FC<NewsCardProps> = ({
  title,
  excerpt,
  date,
  imageSrc,
  category,
  slug,
  index
}) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
    >
      <div className="relative h-48 overflow-hidden">
        <img 
          src={imageSrc} 
          alt={title} 
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute top-4 left-4">
          <span className="bg-blue-600 text-white text-xs font-medium px-2.5 py-1 rounded">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-5">
        <div className="text-gray-500 text-sm mb-2">{date}</div>
        <h3 className="text-xl font-semibold text-gray-800 mb-2 line-clamp-2">
          {title}
        </h3>
        <p className="text-gray-600 mb-4 line-clamp-3">{excerpt}</p>
        <Link 
          to={`/news/${slug}`}
          className="inline-block text-blue-600 font-medium hover:text-blue-800 transition-colors"
        >
          Ler mais →
        </Link>
      </div>
    </motion.article>
  );
};

export default NewsCard;