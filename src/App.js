//essa aqui é a pagina principal do seu primeiro componente
//as alterações aqui aparecerão na div root
import { useState } from 'react';
import { FiSearch } from 'react-icons/fi';
import './style.css';
import api from './services/api'

function App() {

  const [input,setInput]= useState('')	
  
  async function handleSearch(){

    if(input===''){
      alert("preencha seu CEP");
      return;
    }
    try{
      const response = await api.get('${input}/json');
      console.log(response)
    }catch{
      alert("Ops! Parece que houve um erro!");
      setInput("")
    }
  }
//nosso try logo abaixo do if statement faz uma requisição
//essa requisição vai para a API
//como pode ser que mesmo com todas as informações certas
//a API pode não devolver um resposta por n* motivos
//usamos try para tentar fazer a requisição
//e usamos o catch para recuperar e devolver uma informação

  return (
    <div className="container">

      <h1 className= "title"> Busque seu CEP aqui</h1>

      <div className="containerInput">
      <input
      type="text"       
      placeholder="Digite o Seu CEP aqui..."
      value={input}
      onChange={(event) =>setInput(event.target.value)}
      />
      
      <button className="buttonSearch" onClick={handleSearch}>
      	<FiSearch size={20} color="#000"/>
      </button>
      
      </div>

     
       <main className="main">
       	<h2>CEP: 08141570</h2>
       	<span> Rua Lagoa Garopaga 168</span>
        <span> Itaim Paulista</span>
        <span> São Paulo-SP</span>
       </main>
      </div>
  );
}

//para adicionar icones instale via npm
//npm install react-icons --save
//o onChange vai salvar a informação dentro do input
//quando eu coloco dentro do onChange eu passo um valor para o setInput
//poderemos passar um valor para nossa const. input.
//event.target.value é como teremos acesso ao valor repassado

export default App;