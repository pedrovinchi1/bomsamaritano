import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Users, Calendar, Leaf, ArrowRight } from 'lucide-react';

import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import ProgramCard from '../components/ProgramCard';
import TestimonialCard from '../components/TestimonialCard';
import ImpactCounter from '../components/ImpactCounter';

import inicial from '../midia/fotos/sistema/inicial.webp'
import img1 from '../midia/fotos/sistema/bazar.webp'
import img2 from '../midia/fotos/sistema/creche.webp'
import img3 from '../midia/fotos/sistema/img3.webp'
import img4 from '../midia/fotos/sistema/quemsomos.webp'


const HomePage: React.FC = () => {
  const programs = [
    {
      title: 'Casa do Bom Samaritano - Casa Abrigo',
      description: 'Construída com capacidade para 76 leitos, oferece o Acolhimento Institucional Adulto e Acolhimento de Idosos na modalidade de ILPI',
      imageSrc: img3,
      link: '/programs#food-assistance'
    },
    {
      title: 'Centro de Educação Infantil',
      description: 'São duas unidades de atendimento: CENTRO DE EDUCAÇÃO INFANTIL VICTORIA MAZETTI DINARDI e CENTRO DE EDUCAÇÃO INFANTIL NOSSA SENHORA DE FÁTIMA',
      imageSrc: img2,
      link: '/programs#medical-assistance'
    },
    {
      title: 'Bazar do Bom Samaritano',
      description: 'Para ajudar a instituição contamos com o Bazar Beneficente do Bom Samaritano, que tem por objetivo angariar recursos para a manutenção dos serviços da instituição.',
      imageSrc: img1,
      link: '/programs#education'
    }
  ];

  const testimonials = [
    {
      quote: "A Casa do Bom Samaritano transformou minha vida. Graças aos cursos de capacitação, consegui meu primeiro emprego e hoje posso sustentar minha família com dignidade.",
      author: "Maria Silva",
      role: "Beneficiária do Programa de Capacitação"
    },
    {
      quote: "Sou voluntária há 5 anos e posso afirmar que o trabalho realizado aqui é incrível. Ver o impacto direto na vida das pessoas é uma experiência transformadora.",
      author: "Ana Oliveira",
      role: "Voluntária"
    },
    {
      quote: "Nossa empresa apoia os projetos da Casa do Bom Samaritano porque acreditamos no trabalho sério e transparente que eles desenvolvem na comunidade.",
      author: "Carlos Santos",
      role: "Empresa Parceira"
    }
  ];

  const events = [
    {
      title: "Campanha de Doação de Inverno",
      date: "15/06/2025",
      description: "Arrecadação de agasalhos, cobertores e itens para o inverno."
    },
    {
      title: "Capacitação em Informática",
      date: "20/06/2025",
      description: "Curso básico de informática para jovens e adultos."
    },
    {
      title: "Atendimento Médico Gratuito",
      date: "25/06/2025",
      description: "Consultas médicas e exames básicos para a comunidade."
    }
  ];

  return (
    <>
      <Hero 
        title="Ajudando quem mais precisa"
        subtitle="Transformando vidas através da solidariedade e do amor ao próximo desde 1983"
        ctaText="Faça uma Doação"
        ctaLink="/donate"
        backgroundImage= {inicial}
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Quem Somos"
            subtitle="A Casa do Bom Samaritano é uma entidade filantrópica sem fins lucrativos dedicada a ajudar pessoas em situação de vulnerabilidade social há quase 40 anos."
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src={img4} 
                alt="Voluntários da Casa do Bom Samaritano" 
                className="rounded-lg shadow-md w-full h-full object-cover"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="flex flex-col justify-center"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Nossa Missão</h3>
              <p className="text-gray-600 mb-6">
                Promover a dignidade humana através de ações solidárias, oferecendo assistência material, 
                emocional e espiritual a pessoas em situação de vulnerabilidade social, 
                contribuindo para a transformação de vidas e o desenvolvimento comunitário.
              </p>
              
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Nossos Valores</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <Heart className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                  <span>Amor e compaixão pelo próximo</span>
                </li>
                <li className="flex items-start">
                  <Users className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                  <span>Respeito pela dignidade humana</span>
                </li>
                <li className="flex items-start">
                  <Calendar className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                  <span>Compromisso com a transparência</span>
                </li>
                <li className="flex items-start">
                  <Leaf className="h-5 w-5 text-blue-600 mr-2 mt-0.5" />
                  <span>Responsabilidade social e ambiental</span>
                </li>
              </ul>
              
              <Link 
                to="/about" 
                className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors mt-6"
              >
                Saiba mais sobre nós <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-blue-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Nossos Programas"
            subtitle="Conheça os programas e projetos desenvolvidos pela Casa do Bom Samaritano para ajudar quem mais precisa."
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {programs.map((program, index) => (
              <ProgramCard
                key={index}
                title={program.title}
                description={program.description}
                imageSrc={program.imageSrc}
                link={program.link}
                index={index}
              />
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link 
              to="/programs" 
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-6 rounded-md transition-colors"
            >
              Ver Todos os Programas
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Nosso Impacto"
            subtitle="O trabalho da Casa do Bom Samaritano tem transformado milhares de vidas ao longo dos anos."
            center
          />
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            <ImpactCounter label="Pessoas Assistidas" endValue={5200} suffix="+" />
            <ImpactCounter label="Refeições Servidas" endValue={120000} suffix="+" />
            <ImpactCounter label="Crianças nas Creches" endValue={15000} suffix="+" />
            <ImpactCounter label="Voluntários Ativos" endValue={350} suffix="+" />
          </div>
        </div>
      </section>

      <section className="bg-gray-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Depoimentos"
            subtitle="Histórias de pessoas cujas vidas foram transformadas pela Casa do Bom Samaritano."
            center
            light
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                quote={testimonial.quote}
                author={testimonial.author}
                role={testimonial.role}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <SectionTitle 
                title="Próximos Eventos"
                subtitle="Participe de nossas atividades e faça parte dessa corrente do bem."
              />
              
              <div className="space-y-6 mt-8">
                {events.map((event, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                  >
                    <div className="flex items-start">
                      <div className="bg-blue-100 text-blue-600 p-3 rounded-md mr-4">
                        <Calendar className="h-6 w-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-800 mb-1">{event.title}</h3>
                        <p className="text-orange-500 font-medium mb-2">{event.date}</p>
                        <p className="text-gray-600">{event.description}</p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
              
              <div className="mt-8">
                <Link 
                  to="/news" 
                  className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors"
                >
                  Ver todos os eventos <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>
            
            <div>
              <SectionTitle 
                title="Como Você Pode Ajudar"
                subtitle="Existem diversas formas de apoiar nosso trabalho e fazer a diferença na vida de quem precisa."
              />
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-blue-50 p-6 md:p-8 rounded-lg mt-8"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Seja um Doador</h3>
                <p className="text-gray-600 mb-4">
                  Suas doações são fundamentais para mantermos nossos projetos e atendermos mais pessoas.
                  Você pode contribuir com valores mensais ou pontuais, de acordo com suas possibilidades.
                </p>
                <Link 
                  to="/donate" 
                  className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-6 rounded-md transition-colors"
                >
                  Faça uma Doação
                </Link>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-blue-50 p-6 md:p-8 rounded-lg mt-6"
              >
                <h3 className="text-xl font-semibold text-gray-800 mb-4">Seja Voluntário</h3>
                <p className="text-gray-600 mb-4">
                  Doe seu tempo e talentos! Temos diversas áreas onde você pode atuar como voluntário,
                  contribuindo com seu conhecimento e habilidades.
                </p>
                <Link 
                  to="/volunteer" 
                  className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors"
                >
                  Seja Voluntário
                </Link>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Faça Parte Dessa Corrente do Bem</h2>
          <p className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto">
            Com sua ajuda, podemos continuar transformando vidas e construindo um futuro melhor para quem mais precisa.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link 
              to="/donate" 
              className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-md transition-colors"
            >
              Doar Agora
            </Link>
            <Link 
              to="/volunteer" 
              className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-8 rounded-md transition-colors border border-white"
            >
              Ser Voluntário
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomePage;