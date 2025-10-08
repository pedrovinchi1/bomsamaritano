import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Filter, Camera, Users, Home, Heart, Calendar, ChevronLeft, ChevronRight } from 'lucide-react';

import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';

import galeriaft from '../midia/fotos/sistema/galeria.webp';  

// Interface para os itens individuais da galeria
interface GalleryItem {
  id: number;
  imageSrc: string;
  caption?: string;
}

// Interface para os eventos/álbuns
interface GalleryEvent {
  id: number;
  title: string;
  description: string;
  category: string;
  coverImage: string;
  date: string;
  photos: GalleryItem[];
}

const GalleryPage: React.FC = () => {
  // Estado para armazenar o evento selecionado
  const [selectedEvent, setSelectedEvent] = useState<GalleryEvent | null>(null);
  
  // Estado para foto específica dentro de um evento
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);
  
  // Estado para filtrar por categoria
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  // Estado para armazenar eventos filtrados
  const [filteredEvents, setFilteredEvents] = useState<GalleryEvent[]>([]);

  // Exemplo de categorias para a galeria
  const categories = [
    { id: 'all', name: 'Todas', icon: <Camera className="h-4 w-4" /> },
    { id: 'events', name: 'Eventos', icon: <Calendar className="h-4 w-4" /> },
    { id: 'projects', name: 'Projetos', icon: <Heart className="h-4 w-4" /> },
    { id: 'facilities', name: 'Instalações', icon: <Home className="h-4 w-4" /> },
    { id: 'volunteers', name: 'Voluntários', icon: <Users className="h-4 w-4" /> }
  ];

  // Exemplo de eventos para a galeria (cada um com várias fotos)
  const galleryEvents: GalleryEvent[] = [
    {
      id: 1,
      title: "Natal Solidário 2024",
      description: "Celebração de Natal com as famílias assistidas pela Casa do Bom Samaritano",
      category: "events",
      coverImage: "https://images.pexels.com/photos/6647015/pexels-photo-6647015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      date: "25/12/2024",
      photos: [
        {
          id: 101,
          imageSrc: "https://images.pexels.com/photos/6647015/pexels-photo-6647015.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          caption: "Entrega de presentes para as crianças"
        },
        {
          id: 102,
          imageSrc: "https://images.pexels.com/photos/1661905/pexels-photo-1661905.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          caption: "Ceia de Natal com as famílias"
        },
        {
          id: 103,
          imageSrc: "https://images.pexels.com/photos/6207361/pexels-photo-6207361.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          caption: "Apresentação musical de Natal"
        }
      ]
    },
    {
      id: 2,
      title: "Entrega de Cestas Básicas",
      description: "Distribuição mensal de cestas básicas para famílias cadastradas",
      category: "projects",
      coverImage: "https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      date: "10/04/2025",
      photos: [
        {
          id: 201,
          imageSrc: "https://images.pexels.com/photos/6646917/pexels-photo-6646917.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          caption: "Organização das cestas básicas"
        },
        {
          id: 202,
          imageSrc: "https://images.pexels.com/photos/6647039/pexels-photo-6647039.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          caption: "Distribuição para a comunidade"
        }
      ]
    },
    {
      id: 3,
      title: "Casa Abrigo",
      description: "Instalações da Casa Abrigo com capacidade para 76 leitos",
      category: "facilities",
      coverImage: "https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      date: "05/01/2025",
      photos: [
        {
          id: 301,
          imageSrc: "https://images.pexels.com/photos/6647037/pexels-photo-6647037.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          caption: "Vista externa da Casa Abrigo"
        },
        {
          id: 302,
          imageSrc: "https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          caption: "Dormitórios"
        },
        {
          id: 303,
          imageSrc: "https://images.pexels.com/photos/1457842/pexels-photo-1457842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          caption: "Área comum"
        }
      ]
    },
    {
      id: 4,
      title: "Equipe de Voluntários",
      description: "Nossa dedicada equipe de voluntários durante treinamento",
      category: "volunteers",
      coverImage: "https://images.pexels.com/photos/6647035/pexels-photo-6647035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      date: "15/02/2025",
      photos: [
        {
          id: 401,
          imageSrc: "https://images.pexels.com/photos/6647035/pexels-photo-6647035.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          caption: "Treinamento de novos voluntários"
        },
        {
          id: 402,
          imageSrc: "https://images.pexels.com/photos/6646977/pexels-photo-6646977.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          caption: "Reunião de planejamento"
        }
      ]
    },
    {
      id: 5,
      title: "Capacitação Profissional",
      description: "Curso de informática para jovens da comunidade",
      category: "projects",
      coverImage: "https://images.pexels.com/photos/5214961/pexels-photo-5214961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      date: "20/03/2025",
      photos: [
        {
          id: 501,
          imageSrc: "https://images.pexels.com/photos/5214961/pexels-photo-5214961.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          caption: "Aula de informática básica"
        },
        {
          id: 502,
          imageSrc: "https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          caption: "Oficina de programação"
        }
      ]
    },
    {
      id: 6,
      title: "Bazar Beneficente",
      description: "Bazar do Bom Samaritano com produtos doados pela comunidade",
      category: "events",
      coverImage: "https://images.pexels.com/photos/8199562/pexels-photo-8199562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      date: "15/03/2025",
      photos: [
        {
          id: 601,
          imageSrc: "https://images.pexels.com/photos/8199562/pexels-photo-8199562.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          caption: "Organização do bazar"
        },
        {
          id: 602,
          imageSrc: "https://images.pexels.com/photos/5650026/pexels-photo-5650026.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          caption: "Produtos disponíveis para venda"
        },
        {
          id: 603,
          imageSrc: "https://images.pexels.com/photos/1884581/pexels-photo-1884581.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          caption: "Visitantes escolhendo produtos"
        }
      ]
    }
  ];

  // Efeito para filtrar os eventos quando a categoria mudar
  useEffect(() => {
    if (activeCategory === 'all') {
      setFilteredEvents(galleryEvents);
    } else {
      setFilteredEvents(galleryEvents.filter(event => event.category === activeCategory));
    }
  }, [activeCategory]);

  // Função para navegar entre fotos de um evento
  const navigatePhoto = (direction: 'next' | 'prev') => {
    if (!selectedEvent || !selectedPhoto) return;
    
    const currentIndex = selectedEvent.photos.findIndex(photo => photo.id === selectedPhoto.id);
    if (currentIndex === -1) return;
    
    let newIndex;
    if (direction === 'next') {
      newIndex = (currentIndex + 1) % selectedEvent.photos.length;
    } else {
      newIndex = (currentIndex - 1 + selectedEvent.photos.length) % selectedEvent.photos.length;
    }
    
    setSelectedPhoto(selectedEvent.photos[newIndex]);
  };

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
            subtitle="Álbuns de fotos que retratam o trabalho e a história da Casa do Bom Samaritano ao longo dos anos."
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
          
          {/* Grid de álbuns de eventos */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {filteredEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                onClick={() => setSelectedEvent(event)}
              >
                <div className="relative h-48 overflow-hidden cursor-pointer">
                  <img 
                    src={event.coverImage} 
                    alt={event.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute bottom-2 right-2 bg-white bg-opacity-80 text-blue-600 text-xs px-2 py-1 rounded-full">
                    {event.photos.length} fotos
                  </div>
                </div>
                
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-gray-800">{event.title}</h3>
                    <span className="text-xs text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                      {event.date}
                    </span>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{event.description}</p>
                  
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedEvent(event);
                    }}
                    className="text-blue-600 text-sm font-medium hover:text-blue-800 transition-colors"
                  >
                    Ver álbum
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Mensagem quando não há eventos */}
          {filteredEvents.length === 0 && (
            <div className="text-center py-16">
              <p className="text-gray-500 text-lg">Nenhum álbum encontrado para esta categoria.</p>
              <button
                onClick={() => setActiveCategory('all')}
                className="mt-4 text-blue-600 font-medium hover:text-blue-800"
              >
                Ver todos os álbuns
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
            Os álbuns acima representam momentos especiais da nossa jornada de serviço e dedicação à comunidade.
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
      
      {/* Modal para visualizar álbum */}
      <AnimatePresence>
        {selectedEvent && !selectedPhoto && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedEvent(null)}
          >
            <div 
              className="relative max-w-6xl w-full mx-auto bg-white rounded-lg overflow-hidden" 
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex justify-between items-center p-4 border-b">
                <h3 className="text-xl font-semibold text-gray-800">{selectedEvent.title}</h3>
                <button
                  className="bg-gray-200 rounded-full p-2"
                  onClick={() => setSelectedEvent(null)}
                >
                  <X className="h-5 w-5 text-gray-700" />
                </button>
              </div>

              <div className="p-4">
                <div className="flex items-center justify-between mb-4">
                  <p className="text-blue-600 font-medium">{selectedEvent.date}</p>
                  <span className="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-sm">
                    {categories.find(c => c.id === selectedEvent.category)?.name}
                  </span>
                </div>
                <p className="text-gray-600 mb-6">{selectedEvent.description}</p>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
                  {selectedEvent.photos.map((photo) => (
                    <div 
                      key={photo.id}
                      className="aspect-square cursor-pointer overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow"
                      onClick={() => setSelectedPhoto(photo)}
                    >
                      <img 
                        src={photo.imageSrc} 
                        alt={photo.caption || selectedEvent.title} 
                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Modal para visualizar foto específica */}
      <AnimatePresence>
        {selectedPhoto && selectedEvent && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black bg-opacity-95 z-50 flex items-center justify-center"
            onClick={() => setSelectedPhoto(null)}
          >
            <button
              className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-md z-10"
              onClick={() => setSelectedPhoto(null)}
            >
              <X className="h-6 w-6 text-gray-800" />
            </button>

            <button 
              className="absolute left-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
              onClick={(e) => {
                e.stopPropagation();
                navigatePhoto('prev');
              }}
            >
              <ChevronLeft className="h-6 w-6 text-gray-800" />
            </button>

            <button 
              className="absolute right-4 top-1/2 -translate-y-1/2 bg-white rounded-full p-2 shadow-md"
              onClick={(e) => {
                e.stopPropagation();
                navigatePhoto('next');
              }}
            >
              <ChevronRight className="h-6 w-6 text-gray-800" />
            </button>
            
            <div 
              className="max-w-5xl w-full mx-auto p-4"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative">
                <img 
                  src={selectedPhoto.imageSrc} 
                  alt={selectedPhoto.caption || selectedEvent.title} 
                  className="max-h-[80vh] w-auto mx-auto rounded"
                />
                
                {selectedPhoto.caption && (
                  <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-60 text-white p-4">
                    <p className="text-center">{selectedPhoto.caption}</p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default GalleryPage;