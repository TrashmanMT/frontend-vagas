import React from 'react'
import Header from '../header/header';
import { Carousel } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import pinguinu from '../../assets/pinguinu.png';
import leao from '../../assets/leiao.png';
import raposa from '../../assets/raposa.png';
import './style.css';



function Slider() {
    return (
      <section className='slider'>
       <Header/>
       <div className="Carousel-data">
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={pinguinu}
            alt="First slide"
          />
          <Carousel.Caption style={{right: '130px', top: '140px', left: '885px'}}>
            <h3 className='titulo'>QualQuer coisa</h3>
            <p className='paragrafo'>aQUI ESCREVE QUALQUER COISA TBM QUE EU VOU PENSAR.
e AQUI TAMBEM VAI ESCREVER ALGUMA COISA TAMBEM PRA DAR UM TEXTO MAIOR QUE QUE O DE CIMA</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={raposa}
            alt="Second slide"
          />
          <Carousel.Caption style={{left: '145px', top: '350px'}}>
            <h3 className='titulo2'>QualQuer coisa</h3>
            <p className='paragrafo2'>aQUI ESCREVE QUALQUER COISA TBM QUE EU VOU PENSAR.
e AQUI TAMBEM VAI ESCREVER ALGUMA COISA TAMBEM PRA DAR UM TEXTO MAIOR QUE QUE O DE CIMA</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src={leao}
            alt="Third slide"
          />
          <Carousel.Caption style={{ top: '250px', left: '950px'}}>
            <h3 className='titulo'>QualQuer coisa</h3>
            <p className='paragrafo'>aQUI ESCREVE QUALQUER COISA TBM QUE EU VOU PENSAR.
e AQUI TAMBEM VAI ESCREVER ALGUMA COISA TAMBEM PRA DAR UM TEXTO MAIOR QUE QUE O DE CIMA</p>
          </Carousel.Caption>
        </Carousel.Item>
        </Carousel>
        </div>
      </section>
    )

}

export default Slider