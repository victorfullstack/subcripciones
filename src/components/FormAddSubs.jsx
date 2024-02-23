import { useState } from "react";

const FormAddSubs = ({setType, setPrice, type, price, setSubs, subs }) =>{
   const[ error, setError] = useState(false);
    const hanldleSubs = e =>{
        e.preventDefault();
        if (price === "" || Number(price) < 0 || type ==="") {
            setError(true);
            return;
        }
        setError(false);
        const data ={
            type: type,
            price: price,
            id: Date.now()
        }
        setSubs([...subs, data]);
        setType("");
        setPrice("");
        // console.log(subs);
        // console.log(type);
        // console.log(price);
    }
    return(
        <div className="add-subscription">
            <h3>Agregar suscripciones</h3>
            <form onSubmit={ hanldleSubs}>
                <p>servicios</p>
                <select onChange={e => setType(e.target.value)} value={type}>
                    <option value="">--- Elegir ---</option>
                    <option value="netflix">Netflix</option>
                    <option value="disneyplus">Disney plus</option>
                    <option value="hboMax">HBO Max</option>
                    <option value="starplus">Star Plus</option>
                    <option value="primevideos">Prime Videos</option>
                    <option value="spotify">Spotify</option>
                    <option value="Apletv">Aple tv</option>
                </select>
                <p>cantidad</p>
                <input type="number" placeholder="20$" onChange={e => setPrice(e.target.value)} value={price}/>
                <input type="submit" value="agregar" />
            </form>
            {error ? <p className="error">campos invalidos</p> : null}
        </div>

    );
}
export default FormAddSubs;