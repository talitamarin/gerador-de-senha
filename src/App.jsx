import React, { useState, useTransition } from 'react';

function App() {
  const [password, setPassword] = useState('');
  const [copyText, setCopyText] = useState('Copiar');
  const [passwordSize, setPasswordSize] = useState(8);
  const [showInput, setShowInput] = useState(false);

  const passSize = showInput ? passwordSize : 8;

  const generatePassword = () => {
    const charset =
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>:?,.~()_1234567890!*#@$%';

    let result = '';
    for (let i = 0; i < passSize; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      result += charset[randomIndex];
    }

    setPassword(result);
    setCopyText('Copiar');
  };

  function copytoClipboard() {
    window.navigator.clipboard.writeText(password);
    setCopyText('Copiado!');
  }

  return (
    <div className="app">
      <h1>Gerador de senhas</h1>
      <div>
        <label htmlFor="showInput"> Customizar tamanho: </label>
        <input
          type="checkbox"
          id="showInput"
          value={showInput}
          onChange={() => setShowInput((currentState) => !currentState)}
        />
      </div>

      {showInput && (
        <div>
          <label htmlFor="passwordSize">Tamanho:</label>
          <input
            type="number"
            id="passwordSize"
            min={1}
            value={passwordSize}
            onChange={(ev) => setPasswordSize(ev.target.value)}
          />
        </div>
      )}

      <button onClick={generatePassword}>
        Gerar Senha de {passSize} caracteres{' '}
      </button>
      <button onClick={copytoClipboard}>{copyText}</button>
      <div>{password}</div>
    </div>
  );
}

export default App;
