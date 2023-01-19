import React from 'react';

import pc from '../../assets/fotoPC.png';

import './style.css';

const Newsletter = () => {
  return (
    <div className='Newsletter' id='newsletter'>
     {/* <div className='centroNewsletter'> */}
       <h2>Tire suas duvidas ou nos deixe alguma opinião</h2>
       <div className='flexColumn'>
      <div className='primeiraParte'>
        <p>Caso tenha alguma duvida nos diga que o mais breve possível responderemos.</p>
        <p>Sua opinião também é muito importante para nós.</p>
        <img className='img' src={pc} alt='asudhaudauh'/>
      </div>
      <form className='formulario'>
       <label> 
        Nome:
        <input type='text' id='nome' name='nome'/>
       </label>
       <label> 
        Email:
        <input type='email' id='email' name='email'/>
       </label>
       <label>
        Faça sua pergunta:
        <textarea id='quest' name='quest' rows="9" cols="100"></textarea>
       </label>
       <button type='submit'>Enviar</button>
      </form>
       </div>
     </div>
     // </div>
  )
}

export default Newsletter