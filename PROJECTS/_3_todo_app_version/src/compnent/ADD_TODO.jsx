function ADD_TODO(){
return (
      <div className="container">
    <div className="row">
      <div className="col-6"><h5><input type="text" placeholder="enter the task here" /></h5></div>
      <div className="col-4"><h5><input type="date" /></h5></div>
      <div className="col-2" style={{'margin-top':'10px'}}><h5><button type="button" class="btn btn-success">ADD</button></h5></div>
    </div>
    </div>
);
}
export default ADD_TODO;