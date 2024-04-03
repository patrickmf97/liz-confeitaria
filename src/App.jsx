import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Page from './components/Page';
import Contact from './components/Contact';
import PedidoForm from './components/PedidoForm';
import About from './components/About'; 

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/contact" element={<Contact />} />
          <Route path="/page" element={<Page />} />
          <Route path="/pedido" element={<PedidoForm />} />
          <Route path="/about" element={<About />} /> 
          <Route path="/" element={<Page />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
