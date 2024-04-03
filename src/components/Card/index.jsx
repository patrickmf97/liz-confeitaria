import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons"; 
import Logo from "../../assets/Logo.png";

export default function Card({ texto }) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    
    handleResize();

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const calcFontSize = (text) => {
    const maxLength = 100; 
    const defaultFontSize = 16; 
    const textLength = text.length;
    const fontSizeIncrement = -0.5; 
    const minFontSize = 12; 

    let fontSize = defaultFontSize;
    if (textLength > maxLength) {
      fontSize += (textLength - maxLength) * fontSizeIncrement;
      fontSize = Math.max(fontSize, minFontSize);
    }
    return fontSize;
  };

  return (
    <div > 
      <figure className={`card flex flex-col lg:flex-row rounded-xl mx-11 p-8 md:p-0 dark:bg-primary-800 max-w-[25rem] overflow-hidden `}>
        <div className="md:w-48 md:h-48 md:max-w-none md:max-h-none md:rounded-full rounded-full mx-auto">
          <img
            src={Logo}
            alt="Descrição da imagem"
            className="w-24 h-auto md:w-48 md:h-48 md:max-w-none md:max-h-none md:rounded-full rounded-full mx-auto"
          />
        </div>
        <div className="pt-6 md:p-8 text-center md:text-left space-y-4 overflow-hidden">
          <blockquote className="text-lg font-medium" style={{ fontSize: `${calcFontSize(texto)}px`, maxWidth: '100%' }}>
            <p>
              {texto}
            </p>
          </blockquote>
          <figcaption className="font-medium flex items-center">
            <a href="https://www.instagram.com/liz.confeitaria_/" target="_blank" rel="noopener noreferrer" className="text-primary-500 dark:text-primary-400">Via Instagram</a> 
            <FontAwesomeIcon icon={faInstagram} className="text-primary-500 dark:text-primary-400 ml-2" /> {/* Ícone do Instagram */}
          </figcaption>
        </div>
      </figure>
    </div>
  );
}
