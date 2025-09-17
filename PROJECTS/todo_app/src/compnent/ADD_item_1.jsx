function ADD_item_1(){
    let todo_name="buy milk";
    let todo_date="4/1/25"
    return(
      <div class="container">
    <div class="row m-row" >
      <div class="col-6" ><h2>{todo_name}</h2></div>
      <div class="col-4"><h2>{todo_date}</h2></div>
      <div class="col-2"><h1><button type="button" class="btn btn-danger">DELETE</button></h1></div>
    </div>
    </div>
 );
}
export default ADD_item_1
