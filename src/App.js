import React, { Component } from 'react';
import Comentario from './components/comentario';
import './App.css';
import logoSankhya1 from './snakhya1.jpg'

class App extends Component {
  state = {
    comentarios: [],
    novoComentario: {
      nome: '',
      email: '',
      mensagem: '',
      selecionado: false
    }
  }

  adicionarComentario = (event) => {
    event.preventDefault();
    const novoComentario = { ...this.state.novoComentario, data: new Date(), selecionado: false };
    this.setState({
      comentarios: [...this.state.comentarios, novoComentario],
      novoComentario: { nome: '', email: '', mensagem: '' }
    });
  }

  pegarValoresForm = (event) => {
    const { name, value } = event.target;
    this.setState({ novoComentario: { ...this.state.novoComentario, [name]: value } });
  }

  selecionarComentario = (index) => {
    const novosComentarios = [...this.state.comentarios];
    novosComentarios[index].selecionado = !novosComentarios[index].selecionado;
    this.setState({ comentarios: novosComentarios });
  }

  removerComentariosSelecionados = () => {
    const comentariosNaoSelecionados = this.state.comentarios.filter(comentario => !comentario.selecionado);
    this.setState({ comentarios: comentariosNaoSelecionados });
  }

  removerComentarioUnico = comentario => {
    let lista = this.state.comentarios;
    lista = lista.filter(c => c !== comentario)
    this.setState({ comentarios: lista })
  }

  render() {
    return (
      <div className="App">

        <h1>Deixe seu comentário</h1>
        <form method="post" onSubmit={this.adicionarComentario} className="formulario">
        <img src={logoSankhya1} className='logo-sankhya' alt="Logo Sankhya" />
          <div>
            <input
              type="text"
              name="nome"
              value={this.state.novoComentario.nome}
              onChange={this.pegarValoresForm}
              placeholder='Digite seu nome'
              className="input-texto"
            />
          </div>
          <div>
            <input
              type="email"
              name="email"
              value={this.state.novoComentario.email}
              onChange={this.pegarValoresForm}
              placeholder='Digite seu email'
              className="input-email"
            />
          </div>
          <div>
            <textarea
              name="mensagem"
              rows="4"
              placeholder='Digite seu comentário'
              value={this.state.novoComentario.mensagem}
              onChange={this.pegarValoresForm}
              className="textarea"
            ></textarea>
          </div>
          <div>
            <button type="submit" className="botao-enviar">Enviar Comentário</button>
          </div>
          <div className="footer">
            <button type="button" onClick={this.removerComentariosSelecionados} className="botao-remover">Remover Comentários Selecionados</button>
          </div>
        </form>


        {this.state.comentarios.map((comentario, indice) => (
          <div key={indice} className="comentario">
            <Comentario
              nome={comentario.nome}
              email={comentario.email}
              data={comentario.data}
              onRemove={this.removerComentarioUnico.bind(this, comentario)}
              onClick={this.selecionarComentario.bind(this, indice)}
              className="comentario-detalhe">
              {comentario.mensagem}
            </Comentario>
          </div>
        ))}
      </div>

    );
  }
}

export default App;
