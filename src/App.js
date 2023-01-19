
import './App.css';
import  {openModal, openModalAccount } from './components/openModal';

function App() {

  function handleOpenModal(){
    openModal();
  }

  function handleOpenModal2(){
    openModalAccount();
  }


  return (
    <div className="App">
      <button onClick={handleOpenModal}>abrir</button>

      <button onClick={handleOpenModal2}>Cuenta</button>
    </div>
  );
}

export default App;
