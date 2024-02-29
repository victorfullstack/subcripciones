import { useEffect, useState } from "react";

const Balance = ( {count, subs, spent, setSpent}) =>{
    

    const upadateBalance = () =>{
        
        const spent = subs.reduce((total, item) => Number(item.price) + total, 0);
        setSpent(spent);
    }

    useEffect(() =>{
        upadateBalance();
    },[subs]);
        
    
    return(
        <div className="balance">
            <h3>presupuesto: {count} </h3>
            <h3>Disponible: {count - spent}</h3>
            <h3>gastado: {spent}</h3>
        </div>
    );


}
export default Balance;