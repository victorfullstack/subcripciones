const Balance = ( {count}) =>{
    return(
        <div className="balance">
            <h3>presupuesto: {count} </h3>
            <h3>Disponible: {count}</h3>
            <h3>gastado: {count}</h3>
        </div>
    );


}
export default Balance;