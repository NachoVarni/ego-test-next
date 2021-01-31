import axios from "axios"
import { useEffect, useState } from "react"
import Navbar from '../Navbar'
import Hero from '../Hero'  
import {FieldProvider} from '../../Context/FieldContext'
import Select from '../Select'

const options = [
  { value: 'blues', label: 'Blues' },
  { value: 'rock', label: 'Rock' },
  { value: 'jazz', label: 'Jazz' },
  { value: 'orchestra', label: 'Orchestra' } 
];

function Models() {
  
  const [products, setProducts] = useState([])
  const [buttons, setButtons] = useState([])
  
  async function fetchData() {
    const data = await axios.get('https://challenge.agenciaego.tech/models')
    setProducts(() => data.data)
    const allSegments = ['Todos', ...new Set(data.data.map(car => car.segment))]
    setButtons(allSegments)  
  }

  
  useEffect(() => {
    fetchData()
    
  }, [])


  const fieldData = {
    products,
    buttons,
    options
  }
  
  return(
    <FieldProvider value={fieldData}>
      <Navbar />
      <Hero />
      {/* <Select /> */}
    </FieldProvider>
  )
}

export default Models