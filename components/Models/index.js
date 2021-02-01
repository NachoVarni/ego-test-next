import axios from "axios"
import { useEffect, useState } from "react"
import Navbar from '../Navbar'
import Hero from '../Hero'  
import {FieldProvider} from '../../Context/FieldContext'

function Models() {
  
  const [products, setProducts] = useState([])
  const [buttons, setButtons] = useState([])
  const [showSideNav, setShowSideNav] = useState(false)

  const handleShowSide = () => {
    setShowSideNav((prevState) => !prevState)
  }
  
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
    handleShowSide,
    showSideNav
  }
  
  return(
    <FieldProvider value={fieldData}>
      <Navbar handleShowSide={handleShowSide} showSideNav={showSideNav} />
      {!showSideNav && <Hero />}
      
    </FieldProvider>
  )
}

export default Models