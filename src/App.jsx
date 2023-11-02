
import Header from "./Header"
import Formulario from "./Formulario"
import { useState } from "react"

function App() {
  const [meses, setMeses] = useState('3')
  console.log(meses)

  return (
    <div className="container">
   <Header />
   <Formulario 
   setMeses = {setMeses}
   meses = {meses}
   />

    </div>

  )
}

export default App
