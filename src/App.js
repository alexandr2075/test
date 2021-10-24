import React from 'react';
import './App.css';
import {BrowserRouter, Route} from 'react-router-dom';
import Profile from './Profile';
import Main from './Main';
import Navbar from './Navbar';



const App = () => {

  return (
    <BrowserRouter>
    <div className="App">
      <Navbar/>
      <Route path='/main' render={() => <Main />}/>
      <Route path='/profile' render={() => <Profile />}/>
    </div>
    </BrowserRouter>
  )
}
export default App;





