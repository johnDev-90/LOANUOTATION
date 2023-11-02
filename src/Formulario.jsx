import { useState } from "react"
import Button from "./Button";
import Meses from "./Meses";
import Resumen from "./Resumen";


const Formulario = ({setMeses, meses}) => {
const [value, setValue] = useState(0);

const STEP = 100;

console.log(value);

function handleDecremento(){
    const valor = Number(value - STEP);
    if (valor < 0) {

        return
        
    }

    setValue(valor)
}

function handleIncremento(){
    const valor = Number(value + STEP);

    if (valor >= 50000) {
        return;
        
    }

    setValue(valor)

}

const formatearDinero =  (valor) => {
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    });

    return formatter.format(valor);
}


  return (
    <div className="text-center inputRange">

    <div className="btn-container">

    <Button
       value = {'-'}
       fn = {handleDecremento}
       />
       <Button
       value = {'+'}
       fn = {handleIncremento}

       />

    </div>
      
        <div> <input  onChange={(e) => setValue(Number(e.target.value)) } type="range" min={0} max={50000}/></div>
        <div className="amount">
            
            <h2><span>{formatearDinero(value)}</span></h2>
            <Meses
            setMeses = {setMeses}

            />
            <Resumen
            meses = {meses}
            value = {value}
            />
        </div>
     
    </div>
  )
}

export default Formulario
