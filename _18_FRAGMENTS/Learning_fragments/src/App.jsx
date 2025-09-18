import { isValidElement, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import Fooditem from './components/Fooditems.jsx';
import Errormsg from './components/Errorms.jsx';
function App() {
  //let fooditem=[]
 let fooditem=["DAL","GREEN VEGETABLE","RICE","FISH","FRUITS"]
 
   return (
    
    <>
    
    <h1 className='h1'>healthy foods</h1>
   <Errormsg items={fooditem}/>
    <Fooditem items={fooditem}/>

</>
      
        
  )
}

export default App
