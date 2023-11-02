import React from 'react'
import { useState, useEffect} from 'react'

const Resumen = ({meses, value}) => {

    const formatearDinero =  (valor) => {
        const formatter = new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        });
    
        return formatter.format(valor);
    }

let  totalPagar = 0;

const [cuota, setCuota] = useState(0);
const [mensualidad, setMesualidad] = useState(0)

useEffect(() => {
    if (meses === '3') {

        totalPagar = value * 1.1
        setCuota(totalPagar);
        setMesualidad(totalPagar / meses)
    }else if (meses === '6') {
        totalPagar = value * 1.2
        setCuota(totalPagar);
        setMesualidad(totalPagar / meses)
        
    }else if(meses === '12'){
        totalPagar = value * 1.5
        setCuota(totalPagar);
        setMesualidad(totalPagar / meses)
    }



},[meses, value])


  return (
    <div className='resumen-contenedor shadow'>
        <h3>Summary of <span>payments</span></h3>
        <span>{meses} Meses</span>
        <p className='amounts'>{formatearDinero(cuota)} {''} <span>Total due</span></p>
        <p className='amounts'>{formatearDinero(mensualidad)} {''} <span>Monthly Paymen</span></p>
    </div>
  )
}

export default Resumen
