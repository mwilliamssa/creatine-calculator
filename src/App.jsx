import { useState } from 'react';
import './App.css';

function App() {
  const [nome, setNome] = useState('');
  const [peso, setPeso] = useState('');
  const [resultado, setResultado] = useState('');

  const handleChangeNome = (e) => {
    setNome(e.target.value);
  };

  const handleChangePeso = (e) => {
    setPeso(e.target.value);
  };

  const calcularCreatina = () => {
    if (nome.trim() === '' || peso.trim() === '') {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    const quantidadeCreatina = peso * 0.07;
    setResultado(
      `${nome}, você deve usar ${quantidadeCreatina.toFixed(2)}g de creatina.`,
    );
    setNome('');
    setPeso('');
  };

  return (
    <div className="container">
      <h1>Calculadora de Creatina</h1>
      <div className="input">
        <label>Nome:</label>
        <input type="text" value={nome} onChange={handleChangeNome} />
      </div>
      <div className="input">
        <label>Peso (kg):</label>
        <input type="number" value={peso} onChange={handleChangePeso} />
      </div>
      <button onClick={calcularCreatina}>Calcular</button>
      {resultado && <p>{resultado}</p>}
    </div>
  );
}

export default App;
