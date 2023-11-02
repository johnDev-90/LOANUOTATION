
import React from 'react'


const Meses = ({setMeses}) => {




  return (
    <div className='resumen-container'>
        <p>Choose a <span>payment term</span></p>
      <select onChange={(e) => setMeses(e.target.value)} className='select shadow'>
        <option  value="3">3 Month</option>
        <option value="6">6 Month</option>
        <option  value="12">12 Month</option>
        <option  value="24">24 Month</option>

      </select>
    </div>
  )
}

export default Meses
