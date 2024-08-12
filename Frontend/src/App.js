import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import Navs from './components/navs';
function App() {
  return (
    <div className="App">
      <Navs/>
      <Header/>
      <h1>Movies</h1>
      <Footer/>
    </div>
  );
}

export default App;
