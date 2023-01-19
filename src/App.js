import './App.css';
import Footer from './components/footer/Footer';
import Newsletter from './components/newsletter/Newsletter';
import SectionSlide from './components/section-slide/SectionSlide';
import Slider from './components/section-slider/slider';
import SectionCards from './components/sectionCard/sectionCards';

function App() {
  return (
    <div className="App">
      <Slider/>
      <SectionCards />
      <SectionSlide />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;
