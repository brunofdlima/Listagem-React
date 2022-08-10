import React, { Component } from 'react';

import Form from './Form';
import Tarefas from './Tarefas';

import './Main.css';

export default class Main extends Component {

  state = {
    novaTarefa: '',
    tarefas: [],
    index: -1,
  };

  componentDidUpdate(prevProps, prevState) {
    const { tarefas } = this.state;

    if (tarefas === prevState.tarefas) return;

    localStorage.setItem('tarefas', JSON.stringify(tarefas))
  }

  componentDidMount(){
    const tarefas = JSON.parse(localStorage.getItem('tarefas'));

    if (!tarefas) return;

    this.setState({tarefas});
  }

  Submit = (e) => {
    e.preventDefault();
    const { tarefas, index } = this.state;
    let { novaTarefa } = this.state;
    novaTarefa = novaTarefa.trim();

    if (tarefas.indexOf(novaTarefa) !== -1) return;

    const novasTarefas = [...tarefas];

    if (index === -1) {
      this.setState({
        tarefas: [...novasTarefas, novaTarefa],
        novaTarefa: '',
      });
    } else {
      novasTarefas[index] = novaTarefa;

      this.setState({
        tarefas: [...novasTarefas],
        index: -1,
        novaTarefa: '',
      });
    }
  }

  Change = (e) => {
    this.setState({
      novaTarefa: e.target.value,
    });
  }

  Delete = (e, index) => {
    const { tarefas } = this.state;
    const novasTarefas = [...tarefas];
    novasTarefas.splice(index, 1);

    this.setState({
      tarefas: [...novasTarefas]
    })
  }

  Edit = (e, index) => {
    const { tarefas } = this.state

    this.setState({
      index,
      novaTarefa: tarefas[index],
    })
  }

  render() {
    const { novaTarefa, tarefas } = this.state

    return (
      <div className='main'>
        <h1>Listagem</h1>

        <Form Submit={this.Submit} Change={this.Change} novaTarefa={novaTarefa} />
        <Tarefas tarefas={tarefas} Edit={this.Edit} Delete={this.Delete}/>

      </div>
    );
  }
}
