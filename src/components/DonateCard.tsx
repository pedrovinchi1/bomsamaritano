import React from 'react';
import { motion } from 'framer-motion';

interface DonateCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  buttonText: string;
  buttonAction: () => void;
  index: number;
}

const DonateCard: React.FC<DonateCardProps> = ({
  title,
  description,
  icon,
  buttonText,
  buttonAction,
  index
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col h-full"
    >
      <div className="rounded-full bg-blue-100 w-16 h-16 flex items-center justify-center mb-4 text-blue-600">
        {icon}
      </div>
      
      <h3 className="text-xl font-semibold text-gray-800 mb-3">{title}</h3>
      <p className="text-gray-600 mb-6 flex-grow">{description}</p>
      
      <button
        onClick={buttonAction}
        className="mt-auto bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-4 rounded-md transition-colors w-full"
      >
        {buttonText}
      </button>
    </motion.div>
  );
};

export default DonateCard;