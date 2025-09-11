import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import spiderManImg from './assets/Web_of_Spider-Man_Vol_1_129-1.png'

function App() {
  const [count, setCount] = useState(0)

   return  <div>This is the first card using react
    <div class="card bg-secondary text-white">
    <div class="card-header ">
      <img src={spiderManImg} alt="this is a spiderman"  class="img-fluid" />
      <div class="card-body">this is a spiderman from marvel comics</div>
      <button type="button" class="btn btn-outline-danger">spider click here</button>
  </div>
  </div>
  
  </div>
  
}

export default App
