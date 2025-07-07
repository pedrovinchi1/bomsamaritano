import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';

import Hero from '../components/Hero';
import SectionTitle from '../components/SectionTitle';
import ContactForm from '../components/ContactForm';


import contatoft from '../midia/fotos/sistema/contato.webp'

const ContactPage: React.FC = () => {
  return (
    <>
      <Hero 
        title="Entre em Contato"
        subtitle="Estamos à disposição para atender suas dúvidas e receber suas sugestões"
        backgroundImage={contatoft}
      />

      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <SectionTitle 
                title="Fale Conosco"
                subtitle="Preencha o formulário e entraremos em contato o mais breve possível."
              />
              
              <ContactForm />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-blue-50 p-8 rounded-lg"
            >
              <h3 className="text-2xl font-semibold text-gray-800 mb-6">Informações de Contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-600 p-3 rounded-full mr-4">
                    <Phone className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Telefone</h4>
                    <p className="text-gray-600">(43) 3339-1379</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-600 p-3 rounded-full mr-4">
                    <Mail className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">E-mail</h4>
                    <p className="text-gray-600">contato@casadobomsamaritano.org.br</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-600 p-3 rounded-full mr-4">
                    <MapPin className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Endereço</h4>
                    <p className="text-gray-600">
                      Rua José Fierli, 153 - Parque Bom Retiro<br />
                      Londrina - Paraná, CEP 86025-250
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="bg-blue-100 text-blue-600 p-3 rounded-full mr-4">
                    <Clock className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-800 mb-1">Horário de Funcionamento</h4>
                    <p className="text-gray-600">
                      Segunda a Sexta: 8h às 18h<br />
                      Sábado: 8h às 12h
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="mt-8">
                <h4 className="font-medium text-gray-800 mb-3">Redes Sociais</h4>
                <div className="flex space-x-4">
                  <a href="#" className="bg-blue-100 text-blue-600 p-3 rounded-full hover:bg-blue-200 transition-colors" aria-label="Facebook">
                    <Facebook size={20} />
                  </a>
                  <a href="#" className="bg-blue-100 text-blue-600 p-3 rounded-full hover:bg-blue-200 transition-colors" aria-label="Instagram">
                    <Instagram size={20} />
                  </a>
                  <a href="#" className="bg-blue-100 text-blue-600 p-3 rounded-full hover:bg-blue-200 transition-colors" aria-label="Youtube">
                    <Youtube size={20} />
                  </a>
                  <a href="#" className="bg-blue-100 text-blue-600 p-3 rounded-full hover:bg-blue-200 transition-colors" aria-label="LinkedIn">
                    <Linkedin size={20} />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-gray-100">
        <div className="container mx-auto px-4">
          <SectionTitle 
        title="Localização"
        subtitle="Visite nossa sede e conheça nosso trabalho de perto."
        center
          />
          
          <div className="mt-12">
        <div className="rounded-lg overflow-hidden shadow-md aspect-video max-w-5xl mx-auto relative">
          <iframe
            title="Localização da Casa do Bom Samaritano"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3665.4114257255423!2d-51.155256599999996!3d-23.2949925!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94eb449157642305%3A0x986ad54c66ece059!2sR.%20Jos%C3%A9%20Fierli%2C%205%20-%20Rica%2C%20Londrina%20-%20PR%2C%2086025-250!5e0!3m2!1spt-BR!2sbr!4v1654321234567!5m2!1spt-BR!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
          <div className="absolute bottom-4 right-4 w-1/3 md:w-1/4 aspect-video shadow-lg rounded-md overflow-hidden border-2 border-white">
            <iframe 
          src="https://www.google.com/maps/embed?pb=!4v1749563526582!6m8!1m7!1sx6-YdQGL7BiYNNL3WTDpYg!2m2!1d-23.29526703516651!2d-51.15270547556154!3f19.55408689092168!4f-23.039236215104708!5f0.7820865974627469" 
          width="100%" 
          height="100%" 
          style={{ border: 0 }} 
          allowFullScreen 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
          title="Street View da Casa do Bom Samaritano"
            ></iframe>
          </div>
        </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Venha Conhecer Nosso Trabalho</h2>
          <p className="text-xl max-w-3xl mx-auto mb-8">
            Agendamos visitas para apresentar nossos projetos e mostrar como sua ajuda pode fazer a diferença.
          </p>
          <button 
            className="bg-white text-blue-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-md transition-colors"
            onClick={() => document.getElementById('contact-form')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Agendar uma Visita
          </button>
        </div>
      </section>
    </>
  );
};

export default ContactPage;