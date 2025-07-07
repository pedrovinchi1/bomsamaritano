import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Banknote, Gift, ShoppingBag, ChevronDown, ChevronUp } from 'lucide-react';

import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import DonateCard from '../components/DonateCard';

import doeft from '../midia/fotos/sistema/doe.webp'


const DonatePage: React.FC = () => {
  const [openFaq, setOpenFaq] = React.useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  const donationOptions = [
    {
      title: "Doação Única",
      description: "Contribua com qualquer valor para ajudar em nossos projetos e ações emergenciais.",
      icon: <CreditCard size={24} />,
      buttonText: "Doar Agora",
      buttonAction: () => console.log("Doar agora")
    },
    {
      title: "Doação Mensal",
      description: "Torne-se um mantenedor e ajude a sustentar nossas atividades de forma contínua.",
      icon: <Banknote size={24} />,
      buttonText: "Ser Mantenedor",
      buttonAction: () => console.log("Ser mantenedor")
    },
    {
      title: "Doe Alimentos",
      description: "Contribua com alimentos não perecíveis para nossas cestas básicas e refeições.",
      icon: <ShoppingBag size={24} />,
      buttonText: "Saiba Como Doar",
      buttonAction: () => console.log("Doar alimentos")
    },
    {
      title: "Doe Roupas e Itens",
      description: "Doe roupas, calçados, cobertores e outros itens em bom estado de conservação.",
      icon: <Gift size={24} />,
      buttonText: "Ver Pontos de Coleta",
      buttonAction: () => console.log("Pontos de coleta")
    }
  ];

  const faqs = [
    {
      question: "Como posso fazer uma doação financeira?",
      answer: "Você pode fazer doações através de transferência bancária, PIX, boleto ou cartão de crédito. Todas as informações estão disponíveis nesta página. Se preferir, entre em contato conosco pelos telefones disponíveis."
    },
    {
      question: "Posso escolher para qual projeto minha doação será destinada?",
      answer: "Sim! Ao fazer sua doação, você pode indicar para qual projeto ou área deseja destinar os recursos. Caso não haja indicação, os recursos serão utilizados onde houver maior necessidade no momento."
    },
    {
      question: "Como posso me tornar um doador mensal?",
      answer: "Para se tornar um doador mensal, basta clicar no botão 'Ser Mantenedor' e preencher o formulário com seus dados e o valor que deseja contribuir mensalmente. Você pode cancelar ou alterar sua contribuição a qualquer momento."
    },
    {
      question: "Quais itens posso doar além de dinheiro?",
      answer: "Aceitamos doações de alimentos não perecíveis, roupas e calçados em bom estado, produtos de higiene pessoal, material escolar, cobertores, móveis e eletrodomésticos em bom estado de funcionamento, entre outros itens."
    },
    {
      question: "Como obter o recibo da minha doação para fins de imposto de renda?",
      answer: "Após a confirmação da sua doação, enviaremos automaticamente um recibo para o e-mail cadastrado. Caso necessite de um recibo específico para dedução no imposto de renda, entre em contato com nosso departamento financeiro."
    },
    {
      question: "Onde posso ver como minha doação está sendo utilizada?",
      answer: "Publicamos relatórios trimestrais de prestação de contas em nossa página de Transparência. Além disso, enviamos informativos periódicos aos nossos doadores com atualizações sobre os projetos e impacto das doações."
    }
  ];

  return (
    <>
      <Hero 
        title="Faça Sua Doação"
        subtitle="Sua contribuição transforma vidas e faz a diferença na comunidade"
        backgroundImage={doeft}
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Como Você Pode Ajudar"
            subtitle="Existem várias formas de contribuir com nossa missão e fazer a diferença na vida de quem precisa."
            center
          />
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {donationOptions.map((option, index) => (
              <DonateCard
                key={index}
                title={option.title}
                description={option.description}
                icon={option.icon}
                buttonText={option.buttonText}
                buttonAction={option.buttonAction}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="bg-blue-50 py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SectionTitle 
                title="Doação Financeira"
                subtitle="Sua contribuição financeira é fundamental para mantermos nossos projetos e atendermos mais pessoas."
              />
              
              <p className="text-gray-600 mt-6 mb-8">
                Ao fazer uma doação financeira, você contribui diretamente para:
              </p>
              
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-1 mr-3 mt-0.5">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">
                    <strong className="font-medium">Assistência alimentar:</strong> Distribuição de cestas básicas e refeições
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-1 mr-3 mt-0.5">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">
                    <strong className="font-medium">Atendimento médico:</strong> Consultas, medicamentos e exames básicos
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-1 mr-3 mt-0.5">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">
                    <strong className="font-medium">Educação:</strong> Material escolar, cursos profissionalizantes e oficinas
                  </span>
                </li>
                <li className="flex items-start">
                  <div className="bg-blue-100 rounded-full p-1 mr-3 mt-0.5">
                    <svg className="w-4 h-4 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"></path>
                    </svg>
                  </div>
                  <span className="text-gray-700">
                    <strong className="font-medium">Infraestrutura:</strong> Manutenção da sede e equipamentos necessários
                  </span>
                </li>
              </ul>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-white p-6 md:p-8 rounded-lg shadow-md"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Dados Bancários</h3>
              
              <div className="space-y-6">
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">Transferência ou Depósito</h4>
                  <ul className="space-y-2 text-gray-600">
                    <li><strong>Banco:</strong> Banco do Brasil</li>
                    <li><strong>Agência:</strong> 1234-5</li>
                    <li><strong>Conta Corrente:</strong> 12345-6</li>
                    <li><strong>CNPJ:</strong> 78.019.734/0001-00</li>
                    <li><strong>Favorecido:</strong> Casa do Bom Samaritano</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-medium text-gray-700 mb-2">PIX</h4>
                  <p className="text-gray-600 mb-2">
                    <strong>CNPJ:</strong> 78.019.734/0001-00
                  </p>
                  <div className="bg-gray-100 p-3 rounded-md flex items-center justify-between">
                    <span className="text-gray-800 font-medium">78.019.734/0001-00</span>
                    <button 
                      className="text-blue-600 hover:text-blue-800"
                      onClick={() => {
                        navigator.clipboard.writeText('12.345.678/0001-90');
                        alert('CNPJ copiado!');
                      }}
                    >
                      Copiar
                    </button>
                  </div>
                </div>
                
                <div className="pt-4 border-t border-gray-200">
                  <button 
                    className="w-full bg-orange-500 hover:bg-orange-600 text-white font-medium py-3 px-4 rounded-md transition-colors"
                    onClick={() => window.open('#', '_blank')}
                  >
                    Fazer Doação Online
                  </button>
                  
                  <p className="text-center text-gray-500 text-sm mt-4">
                    Doações online via cartão de crédito, débito ou pix
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle 
            title="Perguntas Frequentes"
            subtitle="Tire suas dúvidas sobre como fazer doações para a Casa do Bom Samaritano."
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Precisamos do Seu Apoio</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Cada doação, independente do valor, faz diferença e nos ajuda a continuar transformando vidas.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-md transition-colors"
              onClick={() => window.open('#', '_blank')}
            >
              Doar Agora
            </button>
            <a 
              href="/contact" 
              className="bg-blue-700 hover:bg-blue-800 text-white font-medium py-3 px-8 rounded-md transition-colors border border-white"
            >
              Fale Conosco
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default DonatePage;