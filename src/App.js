import Header from './components/Header';
import './App.css';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import Carousel from './components/Carousel';

function App() {
  return (
    <div className="container">
      <Header/>
      <Carousel/>
      <Footer/>
    </div>
  );
}

export default App;
