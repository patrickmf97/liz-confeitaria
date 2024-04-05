import React from 'react';
import Nav from "../Nav";
import Footer from "../Footer";
import FormularioPedido from '../FormularioPedido';

const PedidoForm = () => {
  return (
    <>
      <div className="fixed top-0 w-full z-50">
        <Nav />
      </div>
      <div className="flex bg-primary-200 items-center justify-center mt-16 min-h-screen max-h-3screean max-w-screen">
        <FormularioPedido />
      </div>
      <div className="w-full mt-auto">
        <Footer />
      </div>
    </>
  );
};

export default PedidoForm;
