import React, { useState } from 'react';
import './App.css';
import Header from './components/header';
import RemoveView from './components/views/RemoteView';
import AppsView from './components/views/AppsView';
import Menu from './components/Menu';

function App() {
 const [menuIndex, setMenuIndex] = useState(1);
 let View = false;
 if (menuIndex === 1) {
  View = <RemoveView />;
 } else if (menuIndex === 2) {
  View = <AppsView />;
 }

 return (
  <div className='App'>
   <div className='Background'>
    <Header />
    {View ? View : null}
    <Menu menuIndex={menuIndex} setMenuIndex={setMenuIndex} />
   </div>
  </div>
 );
}

export default App;
