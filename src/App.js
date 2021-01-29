import logo from './logo.svg';
import './App.css';
import NameProp from './components/NameProp';
import Contacts from './components/Contacts';
import State from './components/State'

function App() {  // this is the root component
  return (
    <div className="App">
    <Contacts name="Abigail" age="26" school="Noblesville High School" graduationYear="2012"/>
    <State />
    </div>

  );
}

export default App;
