import React from 'react'
import Cards from '../cards/Cards'
import './style.css'

const SectionCards = () => {
  return (
    <div id='cards' className='SectionCards'>
     <h2>Imagens de animais aleatorios.</h2>
      <Cards />
    </div>
  )
}

export default SectionCards