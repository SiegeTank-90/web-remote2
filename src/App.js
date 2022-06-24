import './App.css';
import Header from './components/header';
import NavPad from './components/buttons/navpad';
import ButtonGroup from './components/buttonGroup';

function App() {
 return (
  <div className='App'>
   <div className='Background'>
    <Header />
    <NavPad />
    <ButtonGroup />
   </div>
  </div>
 );
}

export default App;
