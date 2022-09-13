import Header from './components/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import PicSlides from './components/PicSlides';

function App() {
  return (
    <div className="container">
      <Header/>
     <div className='body'>
    <PicSlides/>
     </div>
      <Footer/>
    </div>
  );
}

export default App;
