import logo from './logo.svg';
import './App.css';
import Header from './components/Header'
import TwoTruths from './components/challenges/day01/TwoTruths'
import Footer from './components/challenges/day01/Footer'
import Home from './components/challenges/day01/Home'

function App() {  // this is the root component
  const name = 'Abby'
  return (
    <div className="App">
      <Header /> { /* this is how you mount a component */ }
      <hr></hr>
      <TwoTruths />
      <Home />
      <Footer />
    </div>
    
  );
}

export default App;
