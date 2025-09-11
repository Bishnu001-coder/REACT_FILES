
import APP_NAME from "./compnent/APP_NAME"
import ADD_TODO from "./compnent/ADD_TODO"
import ADD_item_1 from "./compnent/ADD_item_1"
import ADD_item_2 from "./compnent/ADDD_item_2"
import './APP.css';

function App() {
return <div class="container">
 <center> <APP_NAME/></center>
  <ADD_TODO/>
  <div className="item-container">
    <ADD_item_1/>
  <ADD_item_2/>
  </div>
  
</div>


}

export default App
