import React from 'react';
import { Link } from 'react-router-dom';
import Nav from "../Nav";
import Card from '../Card';
import Footer from '../Footer';
import D1 from "../../assets/D1.jpeg"
import D2 from "../../assets/D2.jpeg"
import D3 from "../../assets/D3.jpeg"
import D4 from "../../assets/D4.jpeg"
import D5 from "../../assets/D5.jpeg"

const Page = () => {
  
  return (
    <div>
      <div className="fixed top-0 w-full z-50">
        <Nav />
      </div>
      <section className="bg-primary-200 py-16 min-h-screen flex flex-col lg:flex-row justify-center items-center overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-extrabold bg-gradient-to-r  text-gray-900">Bem-vindo à <span className="bg-gradient-to-r from-primary-700 to-secondary-500 bg-clip-text text-transparent">Confeitaria da Liz</span></h2>
            <p className="mt-4 text-lg text-gray-600">Satisfação em cada mordida!</p>
            <p className="mt-4 text-lg text-gray-600">Deliciosos mini cake donuts feitos com amor.</p>
            <div className="mt-6">
              <Link to="/pedido" className="inline-block bg-secondary-600 hover:bg-secondary-700 text-white font-bold py-3 px-8 rounded-lg shadow-lg">Faça seu pedido</Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-8 mt-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-center items-center h-40 transform scale-110 -rotate-6">
            <img src={D1} alt="Donuts" loading="lazy" className="max-w-full max-h-full" />
          </div>
          <div className="flex justify-center items-center h-40 transform scale-75 rotate-6">
            <img src={D2} alt="Donuts" loading="lazy" className="max-w-full max-h-full" />
          </div>
          <div className="flex justify-center items-center h-40 transform scale-150">
            <img src={D3} alt="Donuts" loading="lazy" className="max-w-full max-h-full" />
          </div>
          <div className="flex justify-center items-center h-40 transform">
            <img src={D4} alt="Donuts" loading="lazy" className="max-w-full max-h-full" />
          </div>
          <div className="flex justify-center items-center h-40 transform translate-x-20 translate-y-4">
            <img src={D5} alt="Donuts" loading="lazy" className="max-w-full max-h-full" />
          </div>
        </div>
      </section>
      <main id="main-content" className="flex flex-col bg-primary-200 items-center justify-center pb-20"> 
        <h2 className="text-3xl flex text-center font-extrabold bg-gradient-to-r text-gray-900 relative pb-4">
          <span className="bg-gradient-to-r from-primary-700 to-secondary-500 bg-clip-text text-transparent">Feedback dos nossos Clientes</span>
          <span className="absolute top-0 left-0 h-0.5 bg-primary-700 w-1/4"></span>
          <span className="absolute top-0 right-0 h-0.5 bg-primary-700 w-1/4"></span>
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 gap-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card texto="Uma delícia, adoro!!! O de leite ninho então..."></Card>
          <Card texto="Posso te pedir um favor? Nunca mais pare de vender isso"></Card>
          <Card texto="Ameeeeei. A de brigadeiro então, nossa!!! Muito bom"></Card>
          <Card texto="Eu amei. Massa leve, fofinha, não era gordurosa. Recheio delicioso..."></Card>
          <Card texto="Super recomendo os mini cake donuts da @liz.confeitaria_"></Card>
          <Card texto="Os melhores que eu já comi. Não percam tempo..."></Card>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Page;
