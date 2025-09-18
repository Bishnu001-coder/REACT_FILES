function ADD_item_1({todo_name,todo_date}){
    
    return(
      <div className="container">
    <div className="row m-row" >
      <div className="col-6" ><h2>{todo_name}</h2></div>
      <div className="col-4"><h2>{todo_date}</h2></div>
      <div className="col-2"><h1><button type="button" class="btn btn-danger">DELETE</button></h1></div>
    </div>
    </div>
 );
}
export default ADD_item_1
