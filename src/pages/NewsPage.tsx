import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Calendar, FileText } from 'lucide-react';

import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';

import newsft from '../midia/fotos/sistema/news.webp'


// Events
const events = [
  {
    id: 1,
    title: "Campanha de Doação de Inverno",
    date: "15/06/2025",
    description: "Arrecadação de agasalhos, cobertores e itens para o inverno.",
    location: "Sede da Casa do Bom Samaritano"
  },
  {
    id: 2,
    title: "Capacitação em Informática",
    date: "20/06/2025",
    description: "Curso básico de informática para jovens e adultos.",
    location: "Centro de Capacitação"
  },
  {
    id: 3,
    title: "Atendimento Médico Gratuito",
    date: "25/06/2025",
    description: "Consultas médicas e exames básicos para a comunidade.",
    location: "Unidade Móvel de Saúde"
  },
  {
    id: 4,
    title: "Bazar Beneficente",
    date: "05/07/2025",
    description: "Venda de roupas, calçados e acessórios a preços simbólicos.",
    location: "Sede da Casa do Bom Samaritano"
  }
];

// Notices/Edicts
const notices = [
  {
    id: 1,
    title: "Edital de Contratação - Assistente Social",
    date: "10/03/2025",
    description: "Processo seletivo para contratação de Assistente Social para atuar nos programas sociais da instituição.",
    file: "#"
  },
  {
    id: 2,
    title: "Chamada Pública - Fornecedores de Alimentos",
    date: "05/03/2025",
    description: "Seleção de fornecedores para o programa de assistência alimentar.",
    file: "#"
  },
  {
    id: 3,
    title: "Edital de Seleção - Projetos Sociais",
    date: "01/03/2025",
    description: "Seleção de projetos sociais para parceria e apoio institucional.",
    file: "#"
  }
];

const NewsPage: React.FC = () => {


  return (
    <>
      <Hero 
        title="Notícias e Eventos"
        subtitle="Fique por dentro das últimas novidades e ações da Casa do Bom Samaritano"
        backgroundImage= {newsft}
      />


      <section className="bg-blue-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Editais e Documentos"
            subtitle="Acesse os editais e documentos públicos da Casa do Bom Samaritano."
            center
          />
          
          <div className="mt-12 max-w-4xl mx-auto">
            {notices.map((notice, index) => (
              <motion.div
                key={notice.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mb-6"
              >
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex-grow">
                    <div className="flex items-center mb-2">
                      <FileText className="h-5 w-5 text-blue-600 mr-2" />
                      <h3 className="text-xl font-semibold text-gray-800">{notice.title}</h3>
                    </div>
                    <p className="text-gray-600 mb-2">{notice.description}</p>
                    <p className="text-gray-500 text-sm">Publicado em: {notice.date}</p>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-6">
                    <a 
                      href={notice.file}
                      className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <span className="mr-2">Download</span>
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                      </svg>
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Próximos Eventos"
            subtitle="Participe de nossas atividades e faça parte dessa corrente do bem."
            center
          />
          
          <div className="mt-12 max-w-4xl mx-auto">
            {events.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 mb-6"
              >
                <div className="flex flex-col md:flex-row md:items-center">
                  <div className="bg-blue-100 text-blue-600 p-4 rounded-md md:mr-6 mb-4 md:mb-0 flex-shrink-0">
                    <Calendar className="h-8 w-8" />
                    <div className="text-center mt-1 font-bold">
                      {event.date.split('/')[0]}/{event.date.split('/')[1]}
                    </div>
                  </div>
                  
                  <div className="flex-grow">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{event.title}</h3>
                    <p className="text-gray-600 mb-2">{event.description}</p>
                    <div className="flex items-center text-gray-500">
                      <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd"></path>
                      </svg>
                      <span>{event.location}</span>
                    </div>
                  </div>
                  
                  <div className="mt-4 md:mt-0 flex-shrink-0">
                    <button className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors">
                      Saiba mais
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Inscreva-se em nossa Newsletter</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Receba nossas notícias, eventos e campanhas diretamente em seu e-mail.
          </p>
          <div className="max-w-xl mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="flex-grow px-4 py-3 rounded-md focus:outline-none"
                required
              />
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-6 rounded-md transition-colors"
              >
                Inscrever-se
              </button>
            </div>
            <p className="text-sm text-blue-100 mt-4">
              Respeitamos sua privacidade. Você pode cancelar sua inscrição a qualquer momento.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default NewsPage;