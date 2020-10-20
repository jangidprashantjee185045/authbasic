import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';
import Form from './components/form';
import Navbar from './components/navbar';
import Signin from './components/signin';
import Signup from './components/signup';
const App=()=>{
  return (
    <Router>
       <Navbar/>
       <Route path="/" exact><Form/></Route>
       <Route path="/signup"><Signup/></Route>
       <Route path="/signin"><Signin/></Route>
    </Router>
 
  )
}

export default App;
