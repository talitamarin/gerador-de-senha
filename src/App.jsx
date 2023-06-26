import React, { useState, useTransition } from 'react';

function App() {
  const [password, setPassword] = useState('');
  const [copyText, setCopyText] = useState('Copiar');
  const [passwordSize, setPasswordSize] = useState(12);

  const generatePassword = () => {
    const charset =
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>:?,.~()_1234567890!*#@$%';

    let result = '';
    for (let i = 0; i < passwordSize; i++) {
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
        <label htmlFor="passwordSize">Tamanho:</label>
        <input
          type="number"
          id="passwordSize"
          min={1}
          value={passwordSize}
          onChange={(ev) => setPasswordSize(ev.target.value)}
        />
      </div>
      <hr />
      <button onClick={generatePassword}>Gerar Senha</button>
      <button onClick={copytoClipboard}>{copyText}</button>
      <div>{password}</div>
    </div>
  );
}

export default App;
