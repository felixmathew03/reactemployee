import React from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Home from './Components/Home';
import AddE from './Components/AddE';
import Profile from './Components/Profile';
import Edit from './Components/Edit';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' Component={Home}/>
        <Route path='/adde' Component={AddE}/>
        <Route path='/profile/:id' Component={Profile}/>
        <Route path='/edit/:id' Component={Edit}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App
