import React, { useState, useEffect } from 'react';
import Nav from "../Nav";
import Footer from "../Footer";

const PedidoForm = () => {
  const [items, setItems] = useState([]);
  const [item, setItem] = useState({
    tipo: '',
    recheio: '',
    massa: '',
    quantidade: 1,
    nome: localStorage.getItem('nome') || '',
    telefone: localStorage.getItem('telefone') || ''
  });

  const [deliveryDate, setDeliveryDate] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem({ ...item, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (item.nome && item.telefone) {
      setItems([item, ...items]); // Adiciona o novo item no início do array
    }
    setItem({
      tipo: '',
      recheio: '',
      massa: '',
      quantidade: 1,
      nome: item.nome,
      telefone: item.telefone
    });
    localStorage.setItem('nome', item.nome);
    localStorage.setItem('telefone', item.telefone); // Armazena o telefone no localStorage
  };

  const enviarPedido = () => {
    const address = `O pedido deve ser retirado no endereço abaixo, na data acordada.\nEndereço:\nAv. Sargento de Milícias, 980 - Pavuna\nhttps://maps.app.goo.gl/AwXnLSMfnHUpLL5E7`;

    const message = `Novo Pedido:\nNome: ${item.nome}, Telefone: ${item.telefone}\n\n${items.map(item => 
      `Tipo: ${item.tipo}, Massa: ${item.massa}, Recheio: ${item.recheio || 'Nenhum'}, Quantidade: ${item.quantidade}\n`
    ).join('\n')}\nData de entrega: ${deliveryDate}\n${address}`;
    window.open(`https://wa.me/+5521991403183?text=${encodeURIComponent(message)}`, '_blank');
  };

  useEffect(() => {
    const now = new Date();
    const cutoffTime = new Date();
    cutoffTime.setHours(16, 0, 0); // Define o horário limite para 16:00

    if (now < cutoffTime) {
      // Se a hora atual for antes de 16:00, permite a entrega a partir do dia seguinte
      const tomorrow = new Date(now);
      tomorrow.setDate(tomorrow.getDate() + 1);
      setDeliveryDate(tomorrow.toISOString().split('T')[0]);
    } else {
      // Caso contrário, permite a entrega a partir de dois dias depois
      const afterTomorrow = new Date(now);
      afterTomorrow.setDate(afterTomorrow.getDate() + 2);
      setDeliveryDate(afterTomorrow.toISOString().split('T')[0]);
    }
  }, []);

  return (
    <>
      <div className="fixed top-0 w-full z-50">
        <Nav />
      </div>
      <div className="flex bg-primary-200 items-center justify-center mt-16 min-h-screen max-h-3screean max-w-screen">
        <div className="p-4 bg-primary-100 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold mb-4 text-white">Faça seu Pedido</h2>
          <form onSubmit={handleSubmit} className="text-gray-800">
            <div className="mb-4">
              <label className="block font-bold mb-2" htmlFor="nome">
                Nome:
              </label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={item.nome}
                onChange={handleChange}
                className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-white"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block font-bold mb-2" htmlFor="telefone">
                Telefone:
              </label>
              <input
                type="text"
                id="telefone"
                name="telefone"
                value={item.telefone}
                onChange={handleChange}
                className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-white"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block font-bold mb-2" htmlFor="tipo">
                Tipo:
              </label>
              <select
                name="tipo"
                id="tipo"
                className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-white"
                value={item.tipo}
                onChange={handleChange}
                required
              >
                <option value="">Selecione o Tipo</option>
                <option value="Com recheio tradicional">Com recheio tradicional</option>
                <option value="Com recheio especial">Com recheio especial</option>
                <option value="Sem recheio">Sem recheio</option>
              </select>
            </div>
            {item.tipo === 'Com recheio tradicional' || item.tipo === 'Com recheio especial' ? (
              <div className="mb-4">
                <label className="block font-bold mb-2" htmlFor="recheio">
                  Recheio:
                </label>
                <select
                  name="recheio"
                  id="recheio"
                  className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-white"
                  value={item.recheio}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecione o Recheio</option>
                  {item.tipo === 'Com recheio tradicional' ? (
                    <>
                      <option value="Brigadeiro">Brigadeiro</option>
                      <option value="Doce de leite">Doce de leite</option>
                    </>
                  ) : (
                    <>
                      <option value="Brigadeiro de ninho">Brigadeiro de ninho</option>
                      <option value="Nutella">Nutella</option>
                      <option value="Morango">Morango</option>
                    </>
                  )}
                </select>
              </div>
            ) : null}
            <div className="mb-4">
              <label className="block font-bold mb-2" htmlFor="massa">
                Massa:
              </label>
              <select
                name="massa"
                id="massa"
                className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-white"
                value={item.massa}
                onChange={handleChange}
                required
              >
                <option value="">Selecione a Massa</option>
                <option value="Chocolate">Chocolate</option>
                <option value="Meio a meio (Chocolate e baunilha)">Meio a meio (Chocolate e baunilha)</option>
                <option value="Baunilha (Tradicional)">Baunilha (Tradicional)</option>
                <option value="Churros">Churros</option>
                <option value="Ninho">Ninho</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block font-bold mb-2" htmlFor="data-entrega">
                Data de Entrega:
              </label>
              <input
                type="date"
                id="data-entrega"
                name="data-entrega"
                value={deliveryDate}
                onChange={(e) => setDeliveryDate(e.target.value)}
                min={deliveryDate}
                className="appearance-none border rounded w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-white"
                required
              />
            </div>
            <div className="mb-4">
              <label className="block font-bold mb-2" htmlFor="quantidade">
                Quantidade:
              </label>
              <input
                type="number"
                id="quantidade"
                name="quantidade"
                value={item.quantidade}
                onChange={handleChange}
                min="1"
                className="appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-primary-600 hover:bg-primary-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Adicionar Item
            </button>
          </form>
          {items.length > 0 && (
            <div className="mt-4">
              <h3 className="text-xl font-bold mb-2 text-gray-800">Itens do Pedido:</h3>
              <ul>
                {items.map((item, index) => (
                  <li key={index} className='flex text-gray-800'>
                    Tipo: {item.tipo}, Massa: {item.massa}, Recheio: {item.recheio || 'Nenhum'}, Quantidade: {item.quantidade}
                  </li>
                ))}
              </ul>
              <button
                onClick={enviarPedido}
                className="mt-4 bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Fazer Pedido
              </button>
            </div>
          )}
          <div className="mt-4">
            <p className="font-bold text-gray-800">Data de entrega: {deliveryDate}</p>
          </div>
        </div>
      </div>
      <div className="w-full mt-auto">
        <Footer />
      </div>
    </>
  );
};

export default PedidoForm;
