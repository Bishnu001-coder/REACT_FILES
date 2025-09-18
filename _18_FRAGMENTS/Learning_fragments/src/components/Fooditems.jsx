import Item from "./items";
function Fooditems({items}){
    
    return(
        <ul className="list-group box1">
            {items.map((items)=>(<Item key={items} foodItem={items}/>))}
        </ul>

    );
}
export default Fooditems;   