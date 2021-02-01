import Navbar from "../Navbar";
import DataSheetHero from '../DataSheetHero'
import {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import axios from 'axios'
import {DataSheetProvider} from '../../Context/DataSheetContext'

export default function DataSheet({modelStatic}) {
  
  console.log(modelStatic)

  const [model, setModel] = useState([])
  const [features, setFeatures] = useState([])
  const [highlights, setHighlights] = useState([])
  const [showSideNav, setShowSideNav] = useState(false)

  const handleShowSide = () => {
    setShowSideNav((prevState) => !prevState)
  }
  
  const location = useRouter()
  const id = location.query.ficha
  
  async function fetchModel() {
    const data = await axios.get(`https://challenge.agenciaego.tech/models/${id}`)
    
    setModel(data.data)
    setHighlights(data.data.model_highlights)
    setFeatures(data.data.model_features)
    
  }

  useEffect(() => {
    if (id) {
      fetchModel()
    }
  }, [id])
  
  const context = {
    model,
    features,
    highlights
  }

  return(
    <DataSheetProvider value={context} >
      <Navbar showSideNav={showSideNav} handleShowSide={handleShowSide} />
      {!showSideNav && <DataSheetHero />}
    </DataSheetProvider>
  )
}

