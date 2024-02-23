import SimgleItems from "./SimgleItems";

const DisplayItems = ({ subs , eliminarItem }) => {
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
        eliminarItem={eliminarItem}/>
       ))
     }
     </>
    );
    
}
export default DisplayItems;