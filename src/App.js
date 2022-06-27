import './App.css';
import Header from './components/header';
import NavPad from './components/buttons/navpad';
import ButtonGroup from './components/buttonGroup';
import Menu from './components/Menu';

function App() {
 return (
  <div className='App'>
   <div className='Background'>
    <Header />
    <NavPad />
    <ButtonGroup />
    <Menu />
   </div>
  </div>
 );
}

export default App;
