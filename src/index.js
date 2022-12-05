import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
//O App é o nosso componente, ele esta sendo renderizado dentro de um document.getElementById
//Então, podemos dizer que a const criou um root que é um elemnto que esta dentro do index.html
//Logo, nosso componente App é montado la dentro.

