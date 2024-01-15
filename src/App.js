import './App.css';
import Footer from './Footer';
import Navbar from './Navbar';
import Homebanner from './Homebanner';
import Zigzag from './Zigzag';
import Card from './Card';
// import App1 from './test';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Homebanner/>
      <Zigzag />
      <Card />
      <Footer/>
    </div>
  );
}

export default App;
