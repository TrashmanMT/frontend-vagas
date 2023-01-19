import React from 'react';
import axios from 'axios';

// import ariranha from '../../assets/ariranha.png';
// import mamaco from '../../assets/mamaco.png';
// import veado from '../../assets/veado.png';

import './style.css';

// let animais = [ariranha, veado, mamaco];
// let nomeAnimal = [
//   {nome: 'ariranha'}, {nome:'Cervo-do-pantanal'}, {nome:'Cuxiú-preto'}
// ]

const Cards = () => {
  const [imagens, setImagens] = React.useState([]);

  React.useEffect(() =>{
    axios.get('https://api.thecatapi.com/v1/images/search?limit=10')
    .then(response => {
      setImagens(response.data)
    })
  },[]);

  return (
    <div className='max_width'>
      <ul className="cardAnimal">
     {imagens.map(image => (
      <li key={image.id}><img src={image.url} alt='gatinho'/></li>
      ))}
      </ul>
    </div>
  )
}

export default Cards