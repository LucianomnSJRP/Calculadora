import { useState } from 'react'
import './App.css'



function App() {

  function mostrar() {

    var teste = document.getElementById('edtlitros').value;
    var n2 = document.getElementById('limpar2').value;

    var soma = ((parseInt(n2) / parseInt(teste)));

    alert(soma);

    //alert('Meu primeiro alert');

    limpar();
  }

  function limpar() {


    const limpar = document.querySelector('#id');
    limpar.value = '';

    const limpar2 = document.querySelector('#limpar2');
    limpar2.value = '';

    const edtlitros = document.querySelector('#edtlitros');
    edtlitros.value = '';

  }


  const [currentTask, setCurrentTask] = useState("");

  return (

    <div>
      <div className='topo'>

        <p className='index'>Calcular combustivel</p>
        <div className='conteudo'>

          <label for='' id='txt1'> Valor Combustivel:R$ </label>
       
          <input className='edt' id='id'></input>
          <label for='' id='txt2'> Km Rodados:</label>
          <input className='edt2' id='limpar2'></input>

        </div>
        <div className='topo2'>

        <label for='' id='txtLitros'> Qtd Litros </label>
        <input className='edtLitros' id='edtlitros'></input>

        </div>
      
        
        
        
        
         <div/>

        <button className='btn-start' type='submit' onClick={mostrar}>Calcular</button>

      </div>

    </div>

  )
}

export default App
