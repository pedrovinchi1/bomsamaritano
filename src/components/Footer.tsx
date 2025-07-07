import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Linkedin } from 'lucide-react';


import logo from '../midia/logos/hero.png'; // Adjust the path as necessary


const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <Link to="/" className="flex items-center">
            <img 
              src={logo}
              alt="Casa do Bom Samaritano Logo" 
              className="h-8 w-auto mr-2" 
            />
              <h3 className="text-xl font-semibold">Casa do Bom Samaritano</h3>
            </Link>
            <p className="text-gray-300 mb-4">
              Transformando vidas através do amor e da solidariedade desde 1983.
            </p>
            <p className="text-gray-300 mb-4">CNPJ: 78.019.734/0001-00</p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors" aria-label="Facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors" aria-label="Instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors" aria-label="Youtube">
                <Youtube size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-blue-400 transition-colors" aria-label="LinkedIn">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-blue-400 transition-colors">Início</Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-blue-400 transition-colors">Quem Somos</Link>
              </li>
              <li>
                <Link to="/programs" className="text-gray-300 hover:text-blue-400 transition-colors">Programas</Link>
              </li>
              <li>
                <Link to="/donate" className="text-gray-300 hover:text-blue-400 transition-colors">Como Doar</Link>
              </li>
              <li>
                <Link to="/volunteer" className="text-gray-300 hover:text-blue-400 transition-colors">Voluntariado</Link>
              </li>
              <li>
                <Link to="/financial" className="text-gray-300 hover:text-blue-400 transition-colors">Transparência</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-blue-400 mr-2 mt-0.5" />
                <span className="text-gray-300">(43) 3339-1379</span>
              </li>
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-blue-400 mr-2 mt-0.5" />
                <span className="text-gray-300">contato@casadobomsamaritano.org.br</span>
              </li>
              <li className="flex items-start">
                <MapPin className="h-5 w-5 text-blue-400 mr-2 mt-0.5" />
                <span className="text-gray-300">Rua José Fierli, 153 - Parque Bom Retiro, Londrina - Paraná, CEP</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 border-b border-gray-700 pb-2">Boletim Informativo</h3>
            <p className="text-gray-300 mb-4">
              Inscreva-se para receber nossas novidades e atualizações sobre nossos projetos.
            </p>
            <form className="space-y-2">
              <input
                type="email"
                placeholder="Seu e-mail"
                className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 text-white"
                required
              />
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
              >
                Inscrever-se
              </button>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 text-center text-gray-400 text-sm">
          <p>© {new Date().getFullYear()} Casa do Bom Samaritano. Todos os direitos reservados.</p>
          <p>Desenvolvido por Pedro Vinchi</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;