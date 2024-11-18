import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Components/Home';
import AddE from './Components/AddE';
import Profile from './Components/Profile';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/adde' Component={AddE}/>
        <Route path='/profile' Component={Profile}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
