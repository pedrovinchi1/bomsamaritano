import React from 'react';
import { motion } from 'framer-motion';

interface TestimonialCardProps {
  quote: string;
  author: string;
  role?: string;
  imageSrc?: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({
  quote,
  author,
  role,
  imageSrc
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="bg-white rounded-lg shadow-md p-6 md:p-8"
    >
      <div className="flex flex-col h-full">
        <div className="mb-6 text-blue-500">
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="48" 
            height="48" 
            viewBox="0 0 24 24" 
            fill="currentColor"
            className="opacity-20"
          >
            <path d="M11 18V9.828L5.828 15 4.414 13.586 11 7l6.586 6.586L16.172 15 11 9.828V18h18z" />
          </svg>
        </div>
        
        <blockquote className="flex-grow">
          <p className="text-gray-700 italic mb-6">{quote}</p>
        </blockquote>
        
        <footer className="flex items-center">
          {imageSrc && (
            <div className="mr-4">
              <img 
                src={imageSrc} 
                alt={author} 
                className="h-12 w-12 rounded-full object-cover"
              />
            </div>
          )}
          <div>
            <p className="font-semibold text-gray-800">{author}</p>
            {role && <p className="text-gray-500 text-sm">{role}</p>}
          </div>
        </footer>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;