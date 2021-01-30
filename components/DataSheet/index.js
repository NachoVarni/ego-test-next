import Navbar from "../Navbar";
import DataSheetHero from '../DataSheetHero'
import {useState, useEffect} from 'react'
import {useRouter} from 'next/router'
import axios from 'axios'
import {DataSheetProvider} from '../../Context/DataSheetContext'

export default function DataSheet() {
  
  const [model, setModel] = useState([])
  const [features, setFeatures] = useState([])
  
  const location = useRouter()
  const path = location.asPath
  
  const fullHash = path.split('/')
  const id = fullHash[2]
  

  async function fetchModel() {
    const data = await axios.get(`https://challenge.agenciaego.tech/models/${id}`)
    setModel(() => data.data)
    setFeatures(() => data.data.model_features)
  }

  useEffect(() => {
    fetchModel()
  }, [])
  
  const context = {
    model,
    features
  }

  return(
    <DataSheetProvider value={context} >
      <Navbar />
      <DataSheetHero />
    </DataSheetProvider>
  )
}