import logo from './logo.svg';
import './App.css';
import Comentario from './components/comentario';

function App() {
  return (
    <div className="App">
      <h1>Meu Projeto</h1>
      <Comentario nome="João" email="joao@gmail.com" data={new Date(2024, 2, 9)}>
        Olá, tudo bem?
        </Comentario>
      <Comentario nome="Maria" email="maria@gmail.com" data={new Date(2024, 2, 11)}>
        Sim, aqui está tudo ótimo
        </Comentario>
    </div>
  );
}

export default App;
