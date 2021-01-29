import Navbar from '../../components/Navbar' 
import {useRouter} from 'next/router'
import axios from 'axios'
import { useEffect, useState } from 'react'

export default function ficha() {
  
  const [model, setModel] = useState([])
  
  const location = useRouter()
  console.log(location)
  const path = location.asPath
  console.log(path)
  const fullHash = path.split('/')
  const id = fullHash[2]
  console.log(fullHash)
  console.log(id)

  async function fetchModel() {
    const data = await axios.get(`https://challenge.agenciaego.tech/models/${id}`)
    setModel(() => data.data)
    console.log(data.data)
  }

  useEffect(() => {
    fetchModel()
  }, [])

  
  return(
    <>
      <Navbar />
      <p>{model.name}</p>
      
    </>
  )
}