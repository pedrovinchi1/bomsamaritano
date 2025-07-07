import React from 'react';
import { motion } from 'framer-motion';
import { FileText, BarChart2, PieChart, Shield, Download, ChevronDown, ChevronUp } from 'lucide-react';

import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';

import transparenciaft from '../midia/fotos/sistema/transparencia.webp';



const FinancialPage: React.FC = () => {
  const [openSection, setOpenSection] = React.useState<number | null>(null);

  const toggleSection = (index: number) => {
    setOpenSection(openSection === index ? null : index);
  };

  const reports = [
    {
      year: "2024",
      quarters: [
        { 
          title: "1º Trimestre", 
          description: "Janeiro a Março de 2024",
          file: "#"
        }
      ]
    },
    {
      year: "2023",
      quarters: [
        { 
          title: "4º Trimestre", 
          description: "Outubro a Dezembro de 2023",
          file: "#"
        },
        { 
          title: "3º Trimestre", 
          description: "Julho a Setembro de 2023",
          file: "#"
        },
        { 
          title: "2º Trimestre", 
          description: "Abril a Junho de 2023",
          file: "#"
        },
        { 
          title: "1º Trimestre", 
          description: "Janeiro a Março de 2023",
          file: "#"
        }
      ]
    },
    {
      year: "2022",
      quarters: [
        { 
          title: "Relatório Anual", 
          description: "Janeiro a Dezembro de 2022",
          file: "#"
        }
      ]
    }
  ];

  const financialData = {
    expenses: [
      { category: "Alimentação", percentage: 35 },
      { category: "Saúde", percentage: 25 },
      { category: "Educação", percentage: 20 },
      { category: "Infraestrutura", percentage: 15 },
      { category: "Administrativo", percentage: 5 }
    ],
    income: [
      { category: "Doações de Pessoas Físicas", percentage: 45 },
      { category: "Doações de Empresas", percentage: 30 },
      { category: "Eventos Beneficentes", percentage: 15 },
      { category: "Parcerias Governamentais", percentage: 10 }
    ]
  };

  const certifications = [
    {
      title: "Utilidade Pública Municipal",
      number: "Lei Municipal nº XXXX/XXXX",
      description: "Reconhecimento da relevância dos serviços prestados à comunidade local."
    },
    {
      title: "Utilidade Pública Estadual",
      number: "Lei Estadual nº XXXX/XXXX",
      description: "Declaração que reconhece os serviços relevantes prestados à sociedade estadual."
    },
    {
      title: "CEBAS - Certificado de Entidade Beneficente de Assistência Social",
      number: "Portaria nº XXX de XX/XX/XXXX",
      description: "Certificação que atesta o cumprimento das normas de assistência social."
    },
    {
      title: "Inscrição no Conselho Municipal de Assistência Social",
      number: "Registro nº XXX/XXXX",
      description: "Habilitação para funcionamento como entidade de assistência social no município."
    }
  ];

  return (
    <>
      <Hero 
        title="Transparência"
        subtitle="Prestação de contas e transparência na aplicação dos recursos"
        backgroundImage= {transparenciaft}
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Nosso Compromisso"
            subtitle="A Casa do Bom Samaritano preza pela transparência e prestação de contas a todos os seus doadores, parceiros e à sociedade."
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="bg-blue-100 text-blue-600 p-4 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                <FileText className="h-8 w-8" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Relatórios Financeiros</h3>
              <p className="text-gray-600">
                Publicamos trimestralmente relatórios detalhados sobre a movimentação financeira da instituição, 
                incluindo receitas, despesas e investimentos em projetos.
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
                <PieChart className="h-8 w-8" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Alocação de Recursos</h3>
              <p className="text-gray-600">
                Demonstramos de forma clara como os recursos são distribuídos entre os diferentes 
                programas e projetos, priorizando sempre o atendimento direto aos beneficiários.
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
                <Shield className="h-8 w-8" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-800 mb-3">Certificações e Registros</h3>
              <p className="text-gray-600">
                Mantemos em dia todos os registros e certificações necessários para o funcionamento legal 
                e transparente de uma organização do terceiro setor.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-blue-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Relatórios Financeiros"
            subtitle="Acesse os relatórios trimestrais e anuais de prestação de contas da Casa do Bom Samaritano."
            center
          />
          
          <div className="mt-12 max-w-4xl mx-auto">
            {reports.map((report, reportIndex) => (
              <div key={reportIndex} className="mb-6">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{report.year}</h3>
                
                <div className="space-y-4">
                  {report.quarters.map((quarter, quarterIndex) => (
                    <motion.div
                      key={quarterIndex}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: quarterIndex * 0.1 }}
                      className="bg-white p-5 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300"
                    >
                      <div className="flex justify-between items-center">
                        <div>
                          <h4 className="font-medium text-gray-800">{quarter.title}</h4>
                          <p className="text-gray-500 text-sm">{quarter.description}</p>
                        </div>
                        <a 
                          href={quarter.file} 
                          className="flex items-center text-blue-600 hover:text-blue-800 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Download className="mr-1 h-4 w-4" />
                          <span>Baixar PDF</span>
                        </a>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Distribuição de Recursos"
            subtitle="Conheça como os recursos são distribuídos entre os diferentes programas e projetos da Casa do Bom Samaritano."
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-12 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                <BarChart2 className="mr-2 h-5 w-5 text-blue-600" />
                <span>Despesas por Área</span>
              </h3>
              
              <div className="space-y-4">
                {financialData.expenses.map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700">{item.category}</span>
                      <span className="text-gray-700 font-medium">{item.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-blue-600 h-2.5 rounded-full" 
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              
              <p className="mt-6 text-gray-600 text-sm">
                * Dados referentes ao primeiro trimestre de 2024
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 rounded-lg shadow-md"
            >
              <h3 className="text-xl font-semibold text-gray-800 mb-6 flex items-center">
                <PieChart className="mr-2 h-5 w-5 text-blue-600" />
                <span>Fontes de Recursos</span>
              </h3>
              
              <div className="space-y-4">
                {financialData.income.map((item, index) => (
                  <div key={index}>
                    <div className="flex justify-between mb-1">
                      <span className="text-gray-700">{item.category}</span>
                      <span className="text-gray-700 font-medium">{item.percentage}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div 
                        className="bg-orange-500 h-2.5 rounded-full" 
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
              
              <p className="mt-6 text-gray-600 text-sm">
                * Dados referentes ao primeiro trimestre de 2024
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-blue-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Certificações e Registros"
            subtitle="A Casa do Bom Samaritano mantém todos os registros e certificações necessários para operar legalmente como organização social."
            center
          />
          
          <div className="mt-12 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {certifications.map((cert, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="border border-gray-200 rounded-lg p-4"
                  >
                    <h3 className="text-lg font-semibold text-gray-800 mb-2">{cert.title}</h3>
                    <p className="text-blue-600 font-medium text-sm mb-2">{cert.number}</p>
                    <p className="text-gray-600 text-sm">{cert.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Perguntas Frequentes"
            subtitle="Tire suas dúvidas sobre nossa prestação de contas e transparência."
            center
          />
          
          <div className="mt-12 max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-4"
            >
              <button
                onClick={() => toggleSection(0)}
                className={`w-full flex justify-between items-center p-5 rounded-lg text-left font-medium transition-colors ${
                  openSection === 0 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                <span>Como são aplicados os recursos doados?</span>
                {openSection === 0 ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              
              {openSection === 0 && (
                <div className="bg-white p-5 border border-gray-200 rounded-b-lg mt-1">
                  <p className="text-gray-600">
                    Os recursos doados são aplicados diretamente nos programas e projetos da Casa do Bom Samaritano, 
                    seguindo a distribuição apresentada nos gráficos acima. Priorizamos sempre que a maior parte dos 
                    recursos seja destinada ao atendimento direto dos beneficiários, com um percentual mínimo para 
                    despesas administrativas.
                  </p>
                </div>
              )}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="mb-4"
            >
              <button
                onClick={() => toggleSection(1)}
                className={`w-full flex justify-between items-center p-5 rounded-lg text-left font-medium transition-colors ${
                  openSection === 1 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                <span>Como posso verificar a idoneidade da instituição?</span>
                {openSection === 1 ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              
              {openSection === 1 && (
                <div className="bg-white p-5 border border-gray-200 rounded-b-lg mt-1">
                  <p className="text-gray-600">
                    Além dos relatórios financeiros publicados em nosso site, você pode consultar nossas 
                    certificações e registros nos órgãos competentes. Também estamos abertos a visitas para 
                    conhecer nossos projetos e verificar como os recursos são aplicados. Para agendar uma 
                    visita, entre em contato conosco através dos canais disponíveis.
                  </p>
                </div>
              )}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-4"
            >
              <button
                onClick={() => toggleSection(2)}
                className={`w-full flex justify-between items-center p-5 rounded-lg text-left font-medium transition-colors ${
                  openSection === 2 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                <span>Quem audita as contas da instituição?</span>
                {openSection === 2 ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              
              {openSection === 2 && (
                <div className="bg-white p-5 border border-gray-200 rounded-b-lg mt-1">
                  <p className="text-gray-600">
                    Nossas contas são auditadas anualmente por uma empresa de auditoria independente, 
                    garantindo a conformidade com as normas contábeis e legais. Além disso, prestamos 
                    contas regularmente aos órgãos governamentais aos quais estamos vinculados, como o 
                    Ministério Público e os Conselhos Municipais.
                  </p>
                </div>
              )}
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="mb-4"
            >
              <button
                onClick={() => toggleSection(3)}
                className={`w-full flex justify-between items-center p-5 rounded-lg text-left font-medium transition-colors ${
                  openSection === 3 
                    ? 'bg-blue-600 text-white' 
                    : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                }`}
              >
                <span>Posso direcionar minha doação para um projeto específico?</span>
                {openSection === 3 ? <ChevronUp size={20} /> : <ChevronDown size={20} />}
              </button>
              
              {openSection === 3 && (
                <div className="bg-white p-5 border border-gray-200 rounded-b-lg mt-1">
                  <p className="text-gray-600">
                    Sim, oferecemos a possibilidade de doações direcionadas para projetos específicos. 
                    Ao fazer sua doação, basta indicar para qual programa ou projeto você deseja destinar 
                    os recursos, e garantimos que eles serão aplicados conforme sua vontade. Posteriormente, 
                    você receberá um relatório sobre o impacto da sua doação.
                  </p>
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ajude a Manter Nossos Projetos</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Sua doação é fundamental para continuarmos transformando vidas. Com transparência e responsabilidade, garantimos o melhor uso dos recursos.
          </p>
          <a 
            href="/donate" 
            className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-md transition-colors inline-block"
          >
            Faça uma Doação
          </a>
        </div>
      </section>
    </>
  );
};

export default FinancialPage;