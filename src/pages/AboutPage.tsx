import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, Users, Award, Heart } from 'lucide-react';

import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import TestimonialCard from '../components/TestimonialCard';

import aboutft from '../midia/fotos/sistema/about.webp'
import historiaft from '../midia/fotos/sistema/historia.webp'


const AboutPage: React.FC = () => {
  const team = [
    {
      name: "Fabio Rodrigo Turetta",
      role: "Presidente",
      bio: "Médico, fundador e presidente da Casa do Bom Samaritano. Dedica sua vida a ajudar os mais necessitados há mais de 30 anos.",
      imageSrc: "https://images.pexels.com/photos/5792641/pexels-photo-5792641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      name: "Barbara Stefani De Oliveira Figueira",
      role: "Vice-Presidente",
      bio: "Assistente social com vasta experiência em projetos sociais. Na instituição desde 2005, coordena todos os programas assistenciais.",
      imageSrc: "https://images.pexels.com/photos/5615665/pexels-photo-5615665.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      name: "Jessica Luz Pazeto",
      role: "Primeira Secretária",
      bio: "Administrador com especialização em gestão de ONGs. Responsável pela transparência e sustentabilidade financeira da organização.",
      imageSrc: "https://images.pexels.com/photos/5792602/pexels-photo-5792602.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      name: "Hevelin Leticia Luz Pazeto",
      role: "Tesoureira",
      bio: "Psicóloga apaixonada por trabalho voluntário. Coordena mais de 300 voluntários ativos em diversos projetos da instituição.",
      imageSrc: "https://images.pexels.com/photos/5439153/pexels-photo-5439153.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      name: "Thaysa Satye Sugayama Camacho",
      role: "Conselho Deliberativo",
      bio: "Jornalista com experiência em comunicação social. Responsável pela divulgação das ações e projetos da Casa do Bom Samaritano.",
      imageSrc: "https://images.pexels.com/photos/5792640/pexels-photo-5792640.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      name: "Lucas Martinucci",
      role: "Conselho Deliberativo",
      bio: "Profissional de eventos com mais de 10 anos de experiência. Organiza eventos beneficentes para arrecadar fundos e promover a causa.",
      imageSrc: "https://images.pexels.com/photos/5792644/pexels-photo-5792644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      name: "Giovana Neila Cevallo Crosxiati ",
      role: "Conselho Deliberativo",
      bio: "Engenheiro civil com experiência em projetos sociais. Responsável pela implementação e monitoramento dos projetos da instituição.",
      imageSrc: "https://images.pexels.com/photos/5792645/pexels-photo-5792645.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      name: "Gustavo Henrique Terra Neri",
      role: "Conselho Fiscal",
      bio: "Pedagoga com especialização em educação infantil. Coordena o projeto de educação para crianças atendidas pela Casa do Bom Samaritano.",
      imageSrc: "https://images.pexels.com/photos/5792646/pexels-photo-5792646.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    }
  ];

  const milestones = [
    {
      year: "1983",
      title: "Idealização",
      description: "Projeto idealizado em 27/02/1983 por um grupo de pessoas ligadas ao Movimento do Cursilho da Igreja Católica, sensibilizados com a situação de carência de pessoas ou até famílias perambulando pelas ruas de Londrina em situação de risco pessoal."
    },
    {
      year: "1983",
      title: "Fundação",
      description: "A fundação oficial da Casa do Bom Samaritano – Instituto de Promoção Social de Londrina aconteceu em Assembléia Geral Ordinária em 27/08/1983 às 16:00 na sede da Associação dos Funcionários Municipais de Londrina"
    },
    {
     description: "No início, a Instituição prestava atendimento semelhante ao dos albergues, em espaço  cedido pelos sócios fundadores, mas devido ao aumento da demanda da denominada População em Situação de Rua, houve a necessidade de criar um atendimento específico." 
    },
    {
      year: "1986",
      title: "Terreno Próprio",
      description: "Em 1986 com a ajuda e doações da comunidade foi adquirido um terreno de 21.354.28m²"
    },
    {
      year: "1989",
      title: "Inauguração",
      description: "Com o apoio da Dinardi Engenharia, foram contruídas e inauguradas em 1989 as instalações da Casa do Peregrino Alceu Malucelli, com capacidade para 76 leitos para atendimentos a pessoas adultas do sexo masculino."
    },
    {
      year: "1994",
      title: "Parceria com a Prefeitura",
      description: "Em 1994 a  Casa do Bom Samaritano estabelece parceria com a Secretaria de Assistência Social da Prefeitura do Município de Londrina e estende atendimento para pessoas que necessitam de uma maior permanência no acolhimento da instituição, enquanto buscavam emprego, tratamento médico, acompanhamento psiquiátrico, retorno familiar, entre outros. "
    },
    {
      year: "2020",
      title: "Parceria com a Prefeitura",
      description: "Em 2020 a instituição estabelece parceria com a Secretaria Municipal do Idoso, para atendimento na modalidade de Acolhimento Institucional  de Longa Permanência (ILPI) para Pessoas Idosas com idade igual ou superior a 60 anos, Independentes ou com Grau de Dependência I."
    }
  ];

  return (
    <>
      <Hero 
        title="Sobre Nós"
        subtitle="Conheça nossa história, missão e os valores que nos motivam a ajudar o próximo"
        backgroundImage= {aboutft}
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <SectionTitle 
            title="Nossa História"
            subtitle="Quase 40 anos dedicados a transformar vidas e construir um mundo mais justo e solidário."
          />
          
          <p className="text-gray-600 mt-6 text-justify">
            A Casa do Bom Samaritano – Instituto de Promoção Social de Londrina nasceu do desejo de um grupo de pessoas
             ligadas ao Movimento do Cursilho da Igreja Católica, que, sensibilizados pela difícil realidade das pessoas
          em situação de rua, idealizaram o projeto em 27 de fevereiro de 1983. A fundação oficial ocorreu em uma
           Assembleia Geral Ordinária em 27 de agosto do mesmo ano. Nos primeiros anos, a instituição oferecia atendimentos
            semelhantes aos de albergues, utilizando espaços cedidos pelos próprios fundadores. No entanto, com o aumento da demanda
             por acolhimento e assistência social, tornou-se necessário criar uma estrutura própria e mais adequada.
          </p>
          
          <p className="text-gray-600 mt-4 text-justify">
            Com o apoio da comunidade, em 1986, a instituição adquiriu um terreno de mais de 21 mil metros quadrados, onde foram
             construídas as instalações da Casa do Peregrino Alceu Malucelli. Inaugurada em 1989, essa unidade passou a oferecer
          76 leitos para o acolhimento de homens adultos. Em 1994, a parceria com a Secretaria de Assistência Social de Londrina possibilitou
           ampliar os serviços para pessoas que necessitavam de um acolhimento prolongado enquanto buscavam emprego, tratamento médico, acompanhamento
            psiquiátrico ou reintegração familiar. Em 2020, uma nova parceria foi firmada com a Secretaria Municipal do Idoso, garantindo atendimento
             especializado na modalidade de Acolhimento Institucional de Longa Permanência (ILPI) para idosos a partir de 60 anos.
          </p>
          
          <p className="text-gray-600 mt-4 text-justify">
            Ao longo dos anos, mesmo sem um vínculo jurídico com a Igreja Católica, a Casa do Bom Samaritano manteve uma forte ligação afetiva com a comunidade
             religiosa. Em 2000, Dom Albano Bortoleto Cavallin, então Arcebispo de Londrina, desafiou a equipe dirigente do Encontro de Casais com Cristo (ECC)
          a assumir a administração da instituição, uma missão que segue viva até hoje, conduzida por diferentes casais ao longo do tempo. Dessa forma, a Casa
           do Bom Samaritano consolidou-se como uma entidade de assistência social essencial para Londrina, proporcionando acolhimento e esperança para aqueles
            que mais necessitam.
          </p>
        </motion.div>
        
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <img 
                src= {historiaft}
                alt="História da Casa do Bom Samaritano" 
                className="rounded-lg shadow-lg w-full h-auto"
              />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-blue-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Nossa Missão e Valores"
            subtitle="Princípios que norteiam nosso trabalho e compromisso com a transformação social."
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="bg-blue-100 text-blue-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Heart className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Compaixão</h3>
              <p className="text-gray-600">
                Acolhemos cada pessoa com amor e respeito, reconhecendo sua dignidade e valor intrínseco.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="bg-blue-100 text-blue-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Users className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Solidariedade</h3>
              <p className="text-gray-600">
                Acreditamos que juntos somos mais fortes e podemos construir uma sociedade mais justa e fraterna.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="bg-blue-100 text-blue-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Award className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Integridade</h3>
              <p className="text-gray-600">
                Atuamos com transparência, honestidade e compromisso ético em todas as nossas ações.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="bg-blue-100 text-blue-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <Calendar className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Compromisso</h3>
              <p className="text-gray-600">
                Dedicamos nossos esforços para oferecer assistência de qualidade e promover mudanças duradouras.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Direção Executiva e Conselho"
            subtitle="Conheça os profissionais que dedicam seu tempo e talentos para fazer a diferença."
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.imageSrc} 
                    alt={member.name} 
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </div>
                
                <div className="p-5">
                  <h3 className="text-xl font-semibold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gray-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SectionTitle 
                title="Objetivos Institucionais"
                subtitle="Nossos propósitos e compromissos com a sociedade"
                center
              />
              
              <div className="max-w-4xl mx-auto mt-8 text-gray-600">
                <p className="mb-6">
                  A Casa do Bom Samaritano – Instituto de Promoção Social de Londrina tem por objetivo definido em seu estatuto, a promoção da assistência social especialmente voltada para:
                </p>
                
                <ul className="list-disc pl-6 space-y-4 mb-6">
                  <li>A promoção do voluntariado;</li>
                  <li>O abrigo temporário para pessoas em situação de rua, local ou de outras cidades;</li>
                  <li>A implantação e administração por conta própria ou parceria e/ou conveniada de creches em todas as suas dimensões culturais, educacionais e sociais.</li>
                </ul>
                
                <p className="mb-6">
                  Por meio dos serviços do Acolhimento Institucional Adulto de alta complexidade para pessoas adultas, do sexo masculino em situação de vulnerabilidade e risco social e do Acolhimento de Pessoas Idosas, acima dos 60 anos do sexo masculino na modalidade de ILPI (Instituição de Longa Permanência para Idosos) busca promover a proteção integral e a garantia seus direitos fundamentais, valorizando a vida, a liberdade, o direito de escolha e opção de vida, respeitando as diferenças de raça, religião, sexo, cor e individualidade.
                </p>
                
                <p>
                  Por meio do serviço da Educação Infantil cuidar e educar as crianças baseado no verdadeiro amor através de um ambiente acolhedor e buscar de forma intencional o desenvolvimento, favorecendo o despertar do seu potencial através das ações educativas que possibilite a formação de cidadãos mais humanos, críticos e responsáveis, cientes de seus direitos e deveres.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-gray-900 text-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Nossa Trajetória"
            subtitle="Os principais marcos da história da Casa do Bom Samaritano ao longo dos anos."
            center
            light
          />
          
          <div className="mt-16 relative">
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500"></div>
            
            {milestones.map((milestone, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className={`relative mb-12 ${
                  index % 2 === 0 ? 'md:ml-auto md:mr-[50%] md:pr-12' : 'md:mr-auto md:ml-[50%] md:pl-12'
                } md:w-[45%]`}
              >
                <div className={`absolute top-0 left-1/2 transform -translate-x-1/2 md:left-auto md:translate-x-0 md:top-5 ${
            index % 2 === 0 ? 'md:-right-6' : 'md:-left-6'
          } w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center z-10`}>
            <div className="w-4 h-4 bg-white rounded-full"></div>
          </div>
          
          <div className="bg-blue-800 p-6 rounded-lg shadow-lg ml-6 md:ml-0">
            <div className="text-orange-400 font-bold text-xl mb-2">{milestone.year}</div>
            <h3 className="text-xl font-semibold text-white mb-3">{milestone.title}</h3>
            <p className="text-gray-300">{milestone.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
</section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Depoimentos"
            subtitle="O que dizem sobre nosso trabalho."
            center
          />
          
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <TestimonialCard
              quote="A Casa do Bom Samaritano é um exemplo de como o amor ao próximo pode transformar comunidades inteiras. É inspirador ver o trabalho que eles realizam."
              author="Dr. Paulo Mendes"
              role="Secretário Municipal de Assistência Social"
            />
            
            <TestimonialCard
              quote="Como parceiros da Casa do Bom Samaritano há 10 anos, testemunhamos o impacto positivo que eles têm na comunidade e a seriedade com que administram os recursos."
              author="Empresa Luz e Vida"
              role="Parceiro Institucional"
            />
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Faça Parte da Nossa História</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Junte-se a nós nessa missão de transformar vidas e construir um mundo mais justo e solidário.
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
    </>
  );
};

export default AboutPage;