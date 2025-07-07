import React from 'react';
import { motion } from 'framer-motion';
import { Utensils, HeartPulse, GraduationCap, Home, Smile, Users } from 'lucide-react';

import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';

import programaft from '../midia/fotos/sistema/programas.webp';
import infantilft from '../midia/fotos/sistema/infantil.webp';
import abrigoft from '../midia/fotos/sistema/abrigo.webp';
import enfermariaft from '../midia/fotos/sistema/enfermaria.webp';
import cursoft from '../midia/fotos/sistema/curso.webp';
import alimentacaoft from '../midia/fotos/sistema/alimentacao.webp';
import idososft from '../midia/fotos/sistema/idosos.webp';


const ProgramsPage: React.FC = () => {
  const programs = [
    {
      id: "food-assistance",
      title: "Assistência Alimentar",
      description: "Nosso programa de assistência alimentar visa combater a fome e a insegurança alimentar, produzindo alimentos em nossa horta e alimentando aqueles que mais precisam.",
      features: [
        "Refeições diárias para os internos",
        "Banco de alimentos para emergências",
        "Horta comunitária para produção de alimentos orgânicos"
      ],
      impact: "Em 2024, já distribuímos mais de 1.200 cestas básicas e servimos mais de 30.000 refeições.",
      image: alimentacaoft,
      icon: <Utensils className="h-8 w-8" />
    },
    {
      id: "medical-assistance",
      title: "Enfermaria e Cuidados Médicos",
      description: "Oferecemos atendimento em nossa enfermaria, com profissionais capacitados para atender as necessidades de saúde dos internos.",
      features: [
        "Tratamento de vícios",
        "Distribuição de medicamentos básicos",
        "Encaminhamento para exames e procedimentos",
        "Palestras e orientações sobre saúde e prevenção"
      ],
      impact: "Realizamos mais de 5.000 atendimentos médicos por ano, beneficiando centenas de famílias.",
      image: enfermariaft,
      icon: <HeartPulse className="h-8 w-8" />
    },
    {
      id: "education",
      title: "Educação e Capacitação",
      description: "Acreditamos que a educação é o caminho para a transformação social. Por isso, oferecemos diversas atividades educacionais e de capacitação profissional.",
      features: [
        "Reforço escolar para crianças e adolescentes",
        "Cursos profissionalizantes para jovens e adultos",
        "Oficinas de artesanato e geração de renda",
        "Inclusão digital com aulas de informática"
      ],
      impact: "Mais de 500 pessoas capacitadas anualmente, com 70% de inserção no mercado de trabalho.",
      image: cursoft,
      icon: <GraduationCap className="h-8 w-8" />
    },
    {
      id: "housing",
      title: "Moradia Temporária",
      description: "Oferecemos abrigo temporário para pessoas em situação de vulnerabilidade, proporcionando um ambiente seguro e acolhedor durante períodos de crise.",
      features: [
        "Acolhimento emergencial para famílias desabrigadas",
        "Abrigo para mulheres vítimas de violência",
        "Apoio para reintegração social e familiar",
        "Orientação jurídica e psicológica"
      ],
      impact: "Atendemos mais de 100 famílias por ano, oferecendo proteção e apoio em momentos críticos.",
      image: abrigoft,
      icon: <Home className="h-8 w-8" />
    },
    {
      id: "children",
      title: "Programa Infantil",
      description: "Atividades educativas, recreativas e culturais para crianças em situação de vulnerabilidade social, contribuindo para seu desenvolvimento integral.",
      features: [
        "Atividades lúdicas e recreativas",
        "Apoio pedagógico e reforço escolar",
        "Oficinas culturais e artísticas",
        "Educação em valores e cidadania"
      ],
      impact: "Atendemos mais de 200 crianças semanalmente, promovendo desenvolvimento e proteção social.",
      image: infantilft,
      icon: <Smile className="h-8 w-8" />
    },
    {
      id: "elderly",
      title: "Programa para Idosos",
      description: "Atividades e cuidados especiais para idosos em situação de vulnerabilidade, promovendo qualidade de vida, socialização e dignidade.",
      features: [
        "Grupo de convivência e socialização",
        "Atividades físicas adaptadas",
        "Oficinas de memória e cognição",
        "Assistência para idosos acamados"
      ],
      impact: "Mais de 150 idosos participam regularmente das atividades, melhorando sua qualidade de vida.",
      image: idososft,
      icon: <Users className="h-8 w-8" />
    }
  ];

  return (
    <>
      <Hero 
        title="Nossos Programas"
        subtitle="Conheça as iniciativas da Casa do Bom Samaritano para ajudar quem mais precisa"
        backgroundImage= {programaft}
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Como Atuamos"
            subtitle="Conheça os principais programas e projetos desenvolvidos pela Casa do Bom Samaritano."
            center
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.slice(0, 3).map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 text-blue-600 p-3 rounded-full mr-3">
                      {program.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">{program.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  
                  <a 
                    href={`#${program.id}`} 
                    className="inline-block text-blue-600 font-medium hover:text-blue-800 transition-colors"
                  >
                    Saiba mais →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            {programs.slice(3).map((program, index) => (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-48 overflow-hidden">
                  <img 
                    src={program.image} 
                    alt={program.title} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="bg-blue-100 text-blue-600 p-3 rounded-full mr-3">
                      {program.icon}
                    </div>
                    <h3 className="text-xl font-semibold text-gray-800">{program.title}</h3>
                  </div>
                  
                  <p className="text-gray-600 mb-4">{program.description}</p>
                  
                  <a 
                    href={`#${program.id}`} 
                    className="inline-block text-blue-600 font-medium hover:text-blue-800 transition-colors"
                  >
                    Saiba mais →
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {programs.map((program, index) => (
        <section 
          key={program.id} 
          id={program.id}
          className={`py-16 md:py-24 ${index % 2 === 0 ? 'bg-blue-50' : 'bg-white'}`}
        >
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`order-2 ${index % 2 === 0 ? 'lg:order-1' : 'lg:order-2'}`}
              >
                <div className="bg-blue-100 text-blue-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-6">
                  {program.icon}
                </div>
                
                <h2 className="text-3xl font-bold text-gray-800 mb-4">{program.title}</h2>
                <p className="text-gray-600 mb-6 text-lg">{program.description}</p>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">O que oferecemos:</h3>
                <ul className="space-y-3 mb-6">
                  {program.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                        <svg className="w-3 h-3 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                        </svg>
                      </div>
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <div className="bg-blue-600 text-white p-4 rounded-lg">
                  <h3 className="text-lg font-semibold mb-2">Nosso Impacto</h3>
                  <p>{program.impact}</p>
                </div>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={`order-1 ${index % 2 === 0 ? 'lg:order-2' : 'lg:order-1'}`}
              >
                <img 
                  src={program.image} 
                  alt={program.title} 
                  className="rounded-lg shadow-lg w-full h-auto"
                />
              </motion.div>
            </div>
          </div>
        </section>
      ))}

      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ajude a Fortalecer Nossos Programas</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Sua doação ou voluntariado pode fazer toda a diferença na vida das pessoas atendidas por nossos programas.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="/donate" 
              className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-md transition-colors"
            >
              Fazer uma Doação
            </a>
            <a 
              href="/volunteer" 
              className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-8 rounded-md transition-colors border border-white"
            >
              Seja Voluntário
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProgramsPage;