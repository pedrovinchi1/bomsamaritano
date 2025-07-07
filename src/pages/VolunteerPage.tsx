import React from 'react';
import { motion } from 'framer-motion';
import { Clock, Heart, MessageSquare, Briefcase, BookOpen, Utensils, ChevronDown, ChevronUp } from 'lucide-react';

import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import VolunteerForm from '../components/VolunteerForm';

import voluntarioft from '../midia/fotos/sistema/voluntario.webp'
import voluntft from '../midia/fotos/sistema/volunt.webp';

const VolunteerPage: React.FC = () => {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const volunteerAreas = [
    {
      title: "Assistência Social",
      description: "Ajude no acolhimento, cadastro e acompanhamento de famílias atendidas pela Casa do Bom Samaritano.",
      icon: <Heart className="h-8 w-8" />,
      skills: ["Assistentes Sociais", "Psicólogos", "Estudantes de Serviço Social"]
    },
    {
      title: "Saúde",
      description: "Atendimento médico, odontológico, psicológico e de enfermagem para pessoas em situação de vulnerabilidade.",
      icon: <Briefcase className="h-8 w-8" />,
      skills: ["Médicos", "Enfermeiros", "Psicólogos", "Dentistas", "Fisioterapeutas"]
    },
    {
      title: "Educação",
      description: "Atue como professor voluntário em cursos de capacitação, reforço escolar e oficinas educativas.",
      icon: <BookOpen className="h-8 w-8" />,
      skills: ["Professores", "Pedagogos", "Estudantes universitários"]
    },
    {
      title: "Cozinha",
      description: "Ajude no preparo de refeições para pessoas em situação de vulnerabilidade e eventos beneficentes.",
      icon: <Utensils className="h-8 w-8" />,
      skills: ["Chefs", "Cozinheiros", "Nutricionistas", "Ajudantes de cozinha"]
    },
    {
      title: "Comunicação",
      description: "Contribua com a divulgação dos projetos, captação de recursos e relacionamento com a comunidade.",
      icon: <MessageSquare className="h-8 w-8" />,
      skills: ["Jornalistas", "Publicitários", "Designers", "Social Media"]
    },
    {
      title: "Eventos",
      description: "Participe da organização e realização de eventos beneficentes, campanhas e ações solidárias.",
      icon: <Clock className="h-8 w-8" />,
      skills: ["Organizadores", "Fotógrafos", "Recepcionistas", "Monitores"]
    }
  ];

  const faqs = [
    {
      question: "Quais são os requisitos para ser voluntário?",
      answer: "Para ser voluntário na Casa do Bom Samaritano, é necessário ser maior de 18 anos, ter disponibilidade mínima de 4 horas semanais, participar do treinamento inicial e assinar o termo de voluntariado. Não é necessário ter experiência prévia, apenas disposição para ajudar e comprometimento."
    },
    {
      question: "Qual é o tempo mínimo de dedicação necessário?",
      answer: "Pedimos uma dedicação mínima de 4 horas semanais, mas a carga horária pode ser flexível de acordo com sua disponibilidade e a área de atuação escolhida. O mais importante é o comprometimento e a regularidade."
    },
    {
      question: "Preciso ter alguma formação específica?",
      answer: "Para algumas áreas, como saúde e assistência jurídica, é necessário ter formação e registro profissional. Mas temos diversas áreas que não exigem formação específica, apenas habilidades e disposição para aprender. Oferecemos treinamento para todos os voluntários."
    },
    {
      question: "Como funciona o processo de seleção?",
      answer: "Após o preenchimento do formulário, entraremos em contato para uma entrevista inicial. Em seguida, você participará de um treinamento obrigatório sobre a instituição e a área de atuação escolhida. Após o treinamento, você será integrado à equipe de voluntários."
    },
    {
      question: "Posso ser voluntário eventualmente, sem compromisso regular?",
      answer: "Sim! Temos o programa de voluntariado pontual para pessoas que desejam contribuir em eventos específicos, campanhas sazonais ou ações emergenciais. Nestes casos, basta se cadastrar como voluntário eventual e informar sua disponibilidade para ser contatado quando houver necessidade."
    }
  ];

  const testimonials = [
    {
      quote: "Ser voluntária na Casa do Bom Samaritano mudou minha perspectiva de vida. Ver o impacto direto que podemos causar na vida de uma pessoa é uma experiência transformadora.",
      author: "Ana Oliveira",
      role: "Voluntária há 3 anos",
      image: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      quote: "Como médico, sempre quis retribuir à sociedade. Aqui encontrei um espaço onde posso usar minha profissão para ajudar quem realmente precisa, e isso não tem preço.",
      author: "Dr. Carlos Santos",
      role: "Voluntário na área de saúde",
      image: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  return (
    <>
      <Hero 
        title="Seja um Voluntário"
        subtitle="Doe seu tempo e talentos para ajudar quem mais precisa"
        backgroundImage= {voluntarioft}     />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Por que ser voluntário?"
            subtitle="Ser voluntário é uma experiência transformadora que beneficia não apenas quem recebe a ajuda, mas também quem doa seu tempo e habilidades."
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img 
                src= {voluntft} 
                alt="Voluntários em ação" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">Benefícios do Voluntariado</h3>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Impacto social positivo</h4>
                    <p className="text-gray-600">Contribua diretamente para a transformação de vidas e da comunidade.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Desenvolvimento pessoal</h4>
                    <p className="text-gray-600">Aprimore habilidades, adquira experiência e cresça como pessoa.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Rede de relacionamentos</h4>
                    <p className="text-gray-600">Conheça pessoas com valores similares e amplie seu círculo social.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-1 mr-3 mt-1">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800">Bem-estar e saúde mental</h4>
                    <p className="text-gray-600">Estudos mostram que voluntários têm maior satisfação com a vida e menor incidência de depressão.</p>
                  </div>
                </li>
              </ul>
              
              <p className="mt-6 text-gray-700">
                Na Casa do Bom Samaritano, valorizamos cada voluntário e buscamos proporcionar uma experiência significativa e gratificante para todos.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-blue-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Áreas de Atuação"
            subtitle="Temos diversas áreas onde você pode contribuir com seu tempo e talentos, de acordo com seu perfil e disponibilidade."
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {volunteerAreas.map((area, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
              >
                <div className="bg-blue-100 text-blue-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                  {area.icon}
                </div>
                
                <h3 className="text-xl font-semibold text-gray-800 mb-3">{area.title}</h3>
                <p className="text-gray-600 mb-4">{area.description}</p>
                
                <h4 className="font-medium text-gray-700 mb-2">Perfis desejados:</h4>
                <ul className="space-y-1">
                  {area.skills.map((skill, idx) => (
                    <li key={idx} className="text-gray-600 flex items-center">
                      <span className="bg-blue-100 rounded-full p-1 mr-2">
                        <svg className="w-2 h-2 text-blue-600" fill="currentColor" viewBox="0 0 8 8">
                          <circle cx="4" cy="4" r="3"></circle>
                        </svg>
                      </span>
                      {skill}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Depoimentos de Voluntários"
            subtitle="Histórias inspiradoras de pessoas que dedicam seu tempo para ajudar o próximo."
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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
                    <p className="text-gray-700 italic mb-6">{testimonial.quote}</p>
                  </blockquote>
                  
                  <footer className="flex items-center">
                    <div className="mr-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.author} 
                        className="h-12 w-12 rounded-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-800">{testimonial.author}</p>
                      <p className="text-gray-500 text-sm">{testimonial.role}</p>
                    </div>
                  </footer>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Inscreva-se como Voluntário"
            subtitle="Preencha o formulário abaixo e inicie sua jornada de voluntariado na Casa do Bom Samaritano."
            center
          />
          
          <div className="mt-12 max-w-3xl mx-auto">
            <VolunteerForm />
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Perguntas Frequentes"
            subtitle="Tire suas dúvidas sobre o programa de voluntariado da Casa do Bom Samaritano."
            center
          />
          
          <div className="mt-12 max-w-3xl mx-auto">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-4"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className={`w-full flex justify-between items-center p-5 rounded-lg text-left font-medium transition-colors ${
                    openFaq === index 
                      ? 'bg-blue-600 text-white' 
                      : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                  }`}
                >
                  <span>{faq.question}</span>
                  {openFaq === index ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
                </button>
                
                {openFaq === index && (
                  <div className="bg-white p-5 border border-gray-200 rounded-b-lg mt-1">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Transforme Vidas com Seu Tempo e Talentos</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Cada pessoa tem algo valioso a oferecer. Junte-se a nós e faça parte dessa corrente do bem!
          </p>
          <a 
            href="#top" 
            className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-md transition-colors inline-block"
          >
            Inscreva-se Agora
          </a>
        </div>
      </section>
    </>
  );
};

export default VolunteerPage;