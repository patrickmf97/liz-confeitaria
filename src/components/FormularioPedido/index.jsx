import React, { useState, useEffect } from 'react';

const FormularioPedido = () => {
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
  const [totalPrice, setTotalPrice] = useState(0);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setItem({ ...item, [name]: value });
  };

  const handleIncrement = () => {
    setItem({ ...item, quantidade: item.quantidade + 1 });
  };

  const handleDecrement = () => {
    if (item.quantidade > 1) {
      setItem({ ...item, quantidade: item.quantidade - 1 });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (item.nome && item.telefone) {
      setItems([item, ...items]);
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
    localStorage.setItem('telefone', item.telefone);
  };

  const enviarPedido = () => {
    const address = `O pedido deve ser retirado no endereço abaixo, na data acordada.\nEndereço:\nAv. Sargento de Milícias, 980 - Pavuna\nhttps://maps.app.goo.gl/AwXnLSMfnHUpLL5E7`;

    const message = `Novo Pedido:\nNome: ${item.nome}, Telefone: ${item.telefone}\n\n${items.map(item => 
      `Tipo: ${item.tipo}, Massa: ${item.massa}, Recheio: ${item.recheio || 'Nenhum'}, Quantidade: ${item.quantidade}, Preço: R$${calculatePrice(item)}\n`
    ).join('\n')}\nTotal: R$${totalPrice}\nData de entrega: ${deliveryDate}\n${address}`;
    window.open(`https://wa.me/+5521991403183?text=${encodeURIComponent(message)}`, '_blank');
  };

  const calculatePrice = (item) => {
    let basePrice;
    
    switch (item.recheio.toLowerCase()) {
      case 'especial':
        basePrice = 4.00;
        break;
      case 'tradicional':
        basePrice = 3.50;
        break;
      default:
        basePrice = 2.50;
    }
  
    switch (item.tipo) {
      case 'Com recheio tradicional':
        basePrice += 1.00;
        break;
      case 'Com recheio especial':
        basePrice += 1.50;
        break;
      default:
        break;
    }
    
    return (basePrice * item.quantidade).toFixed(2);
  };

  useEffect(() => {
    const now = new Date();
    const cutoffTime = new Date();
    cutoffTime.setHours(16, 0, 0);

    if (now < cutoffTime) {
      const tomorrow = new Date(now);
      tomorrow.setDate(tomorrow.getDate() + 1);
      setDeliveryDate(tomorrow.toISOString().split('T')[0]);
    } else {
      const afterTomorrow = new Date(now);
      afterTomorrow.setDate(afterTomorrow.getDate() + 2);
      setDeliveryDate(afterTomorrow.toISOString().split('T')[0]);
    }

    let total = 0;
    items.forEach(item => {
      total += parseFloat(calculatePrice(item));
    });
    setTotalPrice(total.toFixed(2));
  }, [items]);

  return (
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
            className="appearance-none border rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-white"
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
            className="appearance-none border rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-white"
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
            className="appearance-none border rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-white"
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
              className="appearance-none border rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-white"
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
            className="appearance-none border rounded-lg w-full py-2 px-3 leading-tight focus:outline-none focus:shadow-outline text-white"
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
          <label className="block font-bold mb-2" htmlFor="quantidade">
            Quantidade:
          </label>
          <div className="flex items-center">
            <button type="button" className="py-1 px-2 rounded-full bg-primary-600 text-white font-bold" onClick={handleDecrement}>-</button>
            <input
              type="number"
              id="quantidade"
              name="quantidade"
              value={item.quantidade}
              onChange={handleChange}
              min="1"
              className="appearance-none border rounded-lg py-1 px-2 leading-tight focus:outline-none focus:shadow-outline text-white w-16"
              required
            />
            <button type="button" className="py-1 px-2 rounded-full bg-primary-600 text-white font-bold" onClick={handleIncrement}>+</button>
          </div>
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
                Tipo: {item.tipo}, Massa: {item.massa}, Recheio: {item.recheio || 'Nenhum'}, Quantidade: {item.quantidade}, Preço: R${calculatePrice(item)}
              </li>
            ))}
          </ul>
          <p className="font-bold text-gray-800">Total do Pedido: R${totalPrice}</p>
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
  );
};

export default FormularioPedido;
