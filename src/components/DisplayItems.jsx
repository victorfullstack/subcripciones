import SimgleItems from "./SimgleItems";

const DisplayItems = ({ subs , eliminarItem, editItem }) => {
    return(
        <>
     <h2>suscripciones</h2>
     {
       subs.map(item =>(
        <SimgleItems
        key={item.id}
        id={item.id}
        price={item.price}
        type={item.type} 
        eliminarItem={eliminarItem}
        editItem={editItem}/>
       ))
     }
     </>
    );
    
}
export default DisplayItems;