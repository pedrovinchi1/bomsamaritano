import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Filter, Camera, Users, Home, Heart, Calendar } from 'lucide-react';

import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';

import galeriaft from '../midia/fotos/sistema/galeria.webp';  


// Interface para os itens da galeria
interface GalleryItem {
  id: number;
  title: string;
  description: string;
  category: string;
  imageSrc: string;
  date: string;
}

const GalleryPage: React.FC = () => {
  // Estado para armazenar o item selecionado para visualização ampliada
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);
  
  // Estado para filtrar por categoria
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  // Estado para armazenar itens filtrados
  const [filteredItems, setFilteredItems] = useState<GalleryItem[]>([]);

  // Exemplo de categorias para a galeria
  const categories = [
    { id: 'all', name: 'Todas', icon: <Camera className="h-4 w-4" /> },
    { id: 'events', name: 'Eventos', icon: <Calendar className="h-4 w-4" /> },
    { id: 'projects', name: 'Projetos', icon: <Heart className="h-4 w-4" /> },
    { id: 'facilities', name: 'Instalações', icon: <Home className="h-4 w-4" /> },
    { id: 'volunteers', name: 'Voluntários', icon: <Users className="h-4 w-4" /> }
  ];

  // Exemplo de itens para a galeria
  const galleryItems: GalleryItem[] = [
    {
      id: 1,
      title: "Natal Solidário 2024",
      description: "Celebração de Natal com as famílias assistidas pela Casa do Bom Samaritano",
      category: "events",
      imageSrc: "https://images.pexels.com/photos/6647015/pexels-photo-6647015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      date: "25/12/2024"
    },
    {
      id: 2,
      title: "Entrega de Cestas Básicas",
      description: "Distribuição mensal de cestas básicas para famílias cadastradas",
      category: "projects",
      imageSrc: "https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      date: "10/04/2025"
    },
    {
      id: 3,
      title: "Casa Abrigo",
      description: "Instalações da Casa Abrigo com capacidade para 76 leitos",
      category: "facilities",
      imageSrc: "https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      date: "05/01/2025"
    },
    {
      id: 4,
      title: "Equipe de Voluntários",
      description: "Nossa dedicada equipe de voluntários durante treinamento",
      category: "volunteers",
      imageSrc: "https://images.pexels.com/photos/6647035/pexels-photo-6647035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      date: "15/02/2025"
    },
    {
      id: 5,
      title: "Capacitação Profissional",
      description: "Curso de informática para jovens da comunidade",
      category: "projects",
      imageSrc: "https://images.pexels.com/photos/5214961/pexels-photo-5214961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      date: "20/03/2025"
    },
    {
      id: 6,
      title: "Bazar Beneficente",
      description: "Bazar do Bom Samaritano com produtos doados pela comunidade",
      category: "events",
      imageSrc: "https://images.pexels.com/photos/8199562/pexels-photo-8199562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      date: "15/03/2025"
    },
    {
      id: 7,
      title: "Centro de Educação Infantil",
      description: "Crianças durante atividade recreativa no Centro de Educação Infantil",
      category: "facilities",
      imageSrc: "https://images.pexels.com/photos/1001914/pexels-photo-1001914.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      date: "12/02/2025"
    },
    {
      id: 8,
      title: "Dia do Voluntário",
      description: "Celebração do Dia do Voluntário com nossa equipe",
      category: "volunteers",
      imageSrc: "https://images.pexels.com/photos/6646949/pexels-photo-6646949.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      date: "28/08/2024"
    },
    {
      id: 9,
      title: "Programa para Idosos",
      description: "Atividades recreativas com idosos assistidos pela instituição",
      category: "projects",
      imageSrc: "https://images.pexels.com/photos/7551617/pexels-photo-7551617.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      date: "05/04/2025"
    },
    {
      id: 10,
      title: "Refeitório",
      description: "Refeitório da Casa do Bom Samaritano durante distribuição de refeições",
      category: "facilities",
      imageSrc: "https://images.pexels.com/photos/6647018/pexels-photo-6647018.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      date: "10/01/2025"
    },
    {
      id: 11,
      title: "Campanha de Inverno",
      description: "Arrecadação de agasalhos e cobertores para o inverno",
      category: "events",
      imageSrc: "https://images.pexels.com/photos/7709020/pexels-photo-7709020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      date: "15/05/2025"
    },
    {
      id: 12,
      title: "Equipe Administrativa",
      description: "Nossa equipe administrativa durante reunião de planejamento",
      category: "volunteers",
      imageSrc: "https://images.pexels.com/photos/6647013/pexels-photo-6647013.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      date: "20/01/2025"
    }
  ];

  // Efeito para filtrar os itens quando a categoria mudar
  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredItems(galleryItems);
    } else {
      setFilteredItems(galleryItems.filter(item => item.category === activeCategory));
    }
  }, [activeCategory]);

  return (
    <>
      <Hero 
        title="Galeria de Fotos"
        subtitle="Conheça nosso trabalho através de imagens que retratam projetos, eventos e o dia a dia da Casa do Bom Samaritano"
        backgroundImage={galeriaft}
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Nossa Galeria"
            subtitle="Imagens que retratam o trabalho e a história da Casa do Bom Samaritano ao longo dos anos."
            center
          />
          
          {/* Filtros de categoria */}
          <div className="mt-10 mb-12">
            <div className="flex items-center justify-center flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    activeCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  <span className="mr-2">{category.icon}</span>
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          
          {/* Grid de imagens */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredItems.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div 
                  className="h-48 overflow-hidden cursor-pointer"
                  onClick={() => setSelectedItem(item)}
                >
                  <img 
                    src={item.imageSrc} 
                    alt={item.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
                    <span className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                      {item.date}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600">{item.description}</p>
                  
                  <button
                    onClick={() => setSelectedItem(item)}
                    className="mt-3 text-blue-600 text-sm font-medium hover:text-blue-800 transition-colors"
                  >
                    Ampliar imagem
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Mensagem quando não há itens */}
          {filteredItems.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">Nenhuma imagem encontrada para esta categoria.</p>
              <button
                onClick={() => setActiveCategory('all')}
                className="mt-4 text-blue-600 font-medium hover:text-blue-800"
              >
                Ver todas as imagens
              </button>
            </div>
          )}
        </div>
      </section>
      
      {/* Call to action */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Nosso Trabalho em Imagens</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            As fotos acima representam momentos especiais da nossa jornada de serviço e dedicação à comunidade.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/volunteer" 
              className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-md transition-colors"
            >
              Seja Voluntário
            </a>
            <a 
              href="/donate" 
              className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-8 rounded-md transition-colors border border-white"
            >
              Faça uma Doação
            </a>
          </div>
        </div>
      </section>
      
      {/* Modal para visualizar imagem ampliada */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedItem(null)}
          >
            <div 
              className="relative max-w-5xl w-full" 
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md z-10"
                onClick={() => setSelectedItem(null)}
              >
                <X className="h-6 w-6 text-gray-800" />
              </button>
              
              <div className="bg-white rounded-lg overflow-hidden">
                <div className="max-h-[80vh] overflow-hidden">
                  <img 
                    src={selectedItem.imageSrc} 
                    alt={selectedItem.title} 
                    className="w-full h-full object-contain"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-2">{selectedItem.title}</h3>
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-blue-600">{selectedItem.date}</p>
                    <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                      {categories.find(c => c.id === selectedItem.category)?.name}
                    </span>
                  </div>
                  <p className="text-gray-600">{selectedItem.description}</p>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GalleryPage;