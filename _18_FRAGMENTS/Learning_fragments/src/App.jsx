import { isValidElement, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
function App() {
  let fooditem=[]
 //let fooditem=["DAL","GREEN VEGETABLES","RICE","FISH","FRUITS"]
 
 
  return (
    
    <>
    
    <h1>healthy food</h1>
    {fooditem.length===0 && <h3>list is empty</h3>}
<ul className="list-group">
  {fooditem.map((items)=>( <li key={items} className="list-group-item">{items}</li>))}
 
</ul>

</>
      
        
  )
}

export default App
