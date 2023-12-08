
import Footer from './footer';
import Gallery from './gallery';
import Infocard from './infocard';
import Navbar from './navbar';
import Sectio2 from './sectio2';
import "./style/global.scss"
import Worker from './worker';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Sectio2/>
      <Worker/>
      <Infocard/>
      <Gallery/>
      <Footer/>
      
      
    </div>
  );
}

export default App;
