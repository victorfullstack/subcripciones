import { moneyFormat } from "../helpers";
const SimgleItems = ({price, type, id ,eliminarItem, editItem}) =>{

    const urlImage = ` /src/images/${type}.png`;

    const handleDelete = (e) =>{
        e.preventDefault();
        const answer = window.confirm(`Borrar Suscripcion a ${type}`);
        if (answer) {
        eliminarItem(id);
            
        }
    }
    const handleEdit = e =>{
        e.preventDefault();
        editItem(id);
    }

    return(
         <div className="single-item">
            <img src={urlImage} alt="services" />
            <h3>precio: {price}</h3>
            <a href="" className="delete" onClick={handleDelete} >Borrar</a>
            <a href="" className="edit" onClick={handleEdit}>editar</a>
         </div>
    );
}
export default SimgleItems;