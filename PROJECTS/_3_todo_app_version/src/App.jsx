
import APP_NAME from "./compnent/APP_NAME"
import ADD_TODO from "./compnent/ADD_TODO"
import './APP.css';
import MULTIPLE_ITEMS from "./compnent/MULTIPLE_ITEMS";

function App() {
  let todoitem=[{name:"buy milk", duedate:"12/2/25"},
    { name:"buy vege",duedate:"12/3/25"}
    ,{name:"buy fruits",duedate:"4/1/25 "},
      {name:" go to college",duedate:"right now "}]

return <div class="container">
 <center> <APP_NAME/></center>
  <ADD_TODO/>
  <div className="item-container">
   <MULTIPLE_ITEMS todoitem={todoitem}/>
  </div>
  
</div>


}

export default App
