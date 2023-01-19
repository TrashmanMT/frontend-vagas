import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

import image0 from '../../assets/retangulo0.png';
import image1 from '../../assets/retangulo1.png';
import image2 from '../../assets/retangulo2.png';

import './style.css';

const images = [image0, image1, image2];


const Slide = () => {
  const carrosel = useRef();
  const [width, setWidth] = useState(0)

  useEffect(() => {
    setWidth(carrosel.current?.scrollWidth - carrosel.current?.offsetWidth)
  })

  return (
    <div className='Slide'>
      <motion.div ref={carrosel} className='carrosel' whileTap={{ cursor: 'grabbing'}}>
        <motion.div className='figures'
        drag='x'
        dragConstraints={{ right: 0, left: -width }} 
        >
          {images.map(image => (
            <motion.div key={image} className='image'>
            <img src={image} alt='imagem com texto'/>
            </motion.div>
          ))}
        </motion.div>
     </motion.div>
    </div>
  )
}

export default Slide