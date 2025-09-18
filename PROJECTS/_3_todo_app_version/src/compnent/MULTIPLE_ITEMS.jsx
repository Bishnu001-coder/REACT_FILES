import ADD_item from "./ADD_item";
function MULTIPLE_ITEMS({todoitem}){
    return (
        <>
     {todoitem.map((item)=><ADD_item todo_name={item.name} todo_date={item.duedate}/>)}

        </>
            

    );
}
export default MULTIPLE_ITEMS;