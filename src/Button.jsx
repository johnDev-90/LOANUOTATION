

import React from 'react'

const Button = ({fn, value}) => {
  return (

    <div className='btn'>
     <a onClick={fn}>{value}</a>
    </div>
  )
}

export default Button
