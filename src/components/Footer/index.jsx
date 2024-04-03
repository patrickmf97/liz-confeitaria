import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-primary-800 py-12 ">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="md:flex md:justify-between md:items-center h-full">
          <div className="flex justify-center md:order-2">
            <Link to="/about" className="text-gray-100 hover:text-white">
              Sobre nós
            </Link>
            <span className="mx-4 text-gray-100">•</span>
            <Link to="/contact" className="text-gray-100 hover:text-white">
              Contato
            </Link>
          </div>
          <div className="flex flex-col mt-8 md:mt-0 text-center md:text-right text-gray-100">
            <p className="mb-4">
              &copy; 2024 Confeitaria da Liz. Todos os direitos reservados.
            </p>
            <p className='text-center md:text-start lg:text-start'>
              Powered by <a href="https://www.linkedin.com/in/patrickmf97/" className="text-gray-100 hover:text-white">Patrick M. Ferreira</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
