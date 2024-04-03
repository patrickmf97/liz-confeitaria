import React from 'react';
import Nav from "../Nav";
import Footer from "../Footer";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Contact() {
  return (
    <div className="flex flex-col h-screen">
      <div className="fixed top-0 w-full z-50">
        <Nav />
      </div>
      <div className="text-center flex flex-col justify-center w-screen mt-20">
        <h2 className="text-xl mb-4">
          <a href="https://wa.me/+5521991403183" className="flex items-center justify-center space-x-2 text-primary-600 hover:text-primary-800 focus:text-primary-800">
            <FontAwesomeIcon icon={faWhatsapp} className="text-lg" />
            <span>WhatsApp</span>
          </a>
        </h2>
        <h2 className="text-xl mb-4">
          <a href="https://www.instagram.com/liz.confeitaria_" className="flex items-center justify-center space-x-2 text-primary-600 hover:text-primary-800 focus:text-primary-800">
            <FontAwesomeIcon icon={faInstagram} className="text-lg" />
            <span>Instagram</span>
          </a>
        </h2>
      </div>
      <div className="fixed bottom-0 w-full z-50">
        <Footer />
      </div>
    </div>
  );
}
