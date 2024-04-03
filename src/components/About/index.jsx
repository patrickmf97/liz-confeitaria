import React from 'react';
import Nav from "../Nav";
import Footer from "../Footer";

export default function About() {
  return (
    <div className="flex flex-col h-screen">
      <div className="fixed top-0 w-full z-50">
        <Nav />
      </div>
      <div className="text-center flex flex-col justify-center w-screen mt-20">
        <h2 className="text-2xl mb-4 font-bold text-shadow">Sobre a Confeitaria da Liz</h2>
        <p className="text-lg mb-8">
          Confeitaria da Liz é um sonho realizado por Larissa Cardoso de Sousa Morais. Aos 28 anos, Larissa é mãe, esposa e uma empreendedora apaixonada por confeitaria. Originária da Pavuna, ela fundou a confeitaria em 2024 com o objetivo de levar alegria através de suas deliciosas criações.
        </p>
        <div className="map-container flex justify-center mb-8"> 
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.9412996388596!2d-43.35979402544232!3d-22.80463887932706!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9964ed97e4207f%3A0x674268565f07c68d!2sAv.%20Srg.%20de%20Mil%C3%ADcias%2C%20980%20-%20Pavuna%2C%20Rio%20de%20Janeiro%20-%20RJ%2C%2021532-290!5e0!3m2!1spt-BR!2sbr!4v1712154189196!5m2!1spt-BR!2sbr"
            width="300"
            height="200"
            style={{ border: '0' }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <p className="text-lg">
          Endereço: Av. Sargento de Milícias, 980 - Pavuna
        </p>
      </div>
      <div className="w-full mt-auto">
        <Footer />
      </div>
    </div>
  );
}
