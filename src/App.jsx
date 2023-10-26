import { useState } from 'react'
import './App.css'



function App() {

  function mostrar() {

    var teste = document.getElementById('id').value;
    var n2 = document.getElementById('limpar2').value;

    var soma = ((parseInt(teste) + parseInt(n2)));

    alert(soma);

    //alert('Meu primeiro alert');

    limpar();
  }

  function limpar() {


    const limpar = document.querySelector('#id');
    limpar.value = '';

    const limpar2 = document.querySelector('#limpar2');
    limpar2.value = '';


  }


  const [currentTask, setCurrentTask] = useState("");

  return (

    <div>
      <div className='topo'>

        <p className='index'>Calcular combustivel</p>
        <div className='conteudo'>

          <label for='' id='txt1'> N1:</label>
          <input className='edt' id='id'></input>

          <label for='' id='txt2'> N2:</label>
          <input className='edt2' id='limpar2'></input>

        </div>

        <button className='btn-start' type='submit' onClick={mostrar}>Calcular</button>

      </div>

    </div>

  )
}

export default App
