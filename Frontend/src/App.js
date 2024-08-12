import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import AboutUs from './components/aboutUs';
import Latest from './components/latest';
import CurrentPlay from './components/currentPlay';
import Comingsoon from './components/comingsoon';
import Pearls from './components/pearls';

function App() {
  return (
    <div className="App">

      <Header/>
      <CurrentPlay/>
      <Comingsoon/>
      <Pearls/>
      <AboutUs/>
      <Latest/>
      <Footer/>
    </div>
  );
}

export default App;
