import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class Header extends React.Component {
  render() {
    var titulo = {
      fontSize: 50,
      textTransform: 'uppercase'
    }
    return (
      <h1 style={titulo}>Lista de Tarefa</h1>
    )
  }
}

function List(props) {
  return (
    <ul className='lista'>
      <li>Limpar a casa</li>
      <li>Arrumar a cama</li>
      {props.tarefas.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  )
}

function ListaTarefa() {
  const [novatarefa, setTask] = useState("");
  const [tarefas, setItemsList] = useState([]);

  function handleChangeInput(event) {
    const inputTask = event.target.value;
    
    setTask(inputTask);
  }
  
  function handleAddItemToList(event) {
    event.preventDefault(); 

    if (!novatarefa) { 
      alert('preencha com uma tarefa');
      return
    };
    
    setItemsList([...tarefas, novatarefa]);
    setTask("");
  }

  return (
    <div>
      <form onSubmit={handleAddItemToList}>
        <input type="text" placeholder="Adicione uma tarefas" onChange={handleChangeInput} value={novatarefa} />
        <button type="submit">Adicionar</button>
      </form>

     <List tarefas={tarefas} />
    </div>
  );
}

const root = document.getElementById('root')
ReactDOM.render(
  <div className='center'>
    <Header/>
    <ListaTarefa/>
  </div>
  , root
)