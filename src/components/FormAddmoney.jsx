import { useState } from "react";


const FormAddmoney =({setCount, setIsValid}) =>{
 
const[input, setInput] = useState("");
const[error, setError] = useState(false);
const handleForm = e =>{
    e.preventDefault();
    if(input === "" || Number(input) < 0){
        setError(true);
        return;

    }
   setError(false);
   setCount(Number(input));
   setIsValid(true);
//    console.log(input);
}

    return(
      <div className="form-add-money">
      <form onSubmit={handleForm}>
        <p>Agregar presupuesto</p>
        <input type="number" placeholder="300$" onChange={e => setInput(e.target.value)}/>
        <input type="submit" value="agregar" /> 
      </form>
      {error ? <p className="error"> presupuesto invalido</p> : null }
      </div>
    );

}
export default FormAddmoney;