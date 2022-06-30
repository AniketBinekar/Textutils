
// import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import alert from './components/alert';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
// import { Switch, Route } from "react-router-dom";

// import { Routes ,Route } from 'react-router-dom';

function App() {
  const [mode,setMode] = useState('light');
  const [alert, setalert] = useState(null);

  const showalert=(message,type)=>
  {
      setalert({
        msg:message,
        type:type

      })
     setTimeout(() => {
       setalert(null);
     }, 3000);
  }
   const toggleMode=()=>
  {
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showalert("dark mode has been enable","success");
      document.title='TextUtils-DarkMode';
      // setInterval(() => {
      //   document.title='TextUtils-Is Amazing';
      // }, 2000);
      // setInterval(() => {
      //   document.title='TextUtils-Aniket Binekar';
      // }, 1500);
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor='white';
      showalert("Light mode has been enable","success");
      document.title='TextUtils-LightMode';
    }
    
  }
  return (

   <>
    <Router>
    <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
    <alert alert={alert}/>
    <div className="container my-3">
    <Switch>
          <Route  exact path="/about">
            <About />
          </Route>
          <Route exact path='/'>
          <TextForm showalert={showalert} heading="Enter the text to analyze below"mode={mode} /> 
          </Route>
    </Switch>
    </div>
    </Router>
    
   </>
   
    
  );
}

export default App;
