import React, { useState } from 'react';

function App() {
  const [password, setPassword] = useState('');
  const [copyText, setCopyText] = useState('Copiar');

  const generatePassword = () => {
    const length = 10;
    const charset =
      'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789<>:?,.~()_1234567890!*#@$%';

    let result = '';
    for (let i = 0; i < length; i++) {
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
    <div>
      <button onClick={generatePassword}>Gerar Senha</button>
      <button onClick={copytoClipboard}>{copyText}</button>
      <p>{password}</p>
    </div>
  );
}

export default App;
