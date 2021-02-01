import Navbar from '../../components/Navbar' 
import DataSheet from '../../components/DataSheet'
import axios from 'axios'

export default function ficha() {
  
  

  return(
    <>
      <DataSheet />
    </>
  )
}

// export async function getStaticPaths() {
//   // Call an external API endpoint to get posts
//   const modelStatic = await axios.get(`https://challenge.agenciaego.tech/models`)
//   console.log(modelStatic)
//   // Get the paths we want to pre-render based on posts
//   const paths = modelStatic.data.map((model) => ({
//     params: { id: model.id },
//   }))

//   // We'll pre-render only these paths at build time.
//   // { fallback: false } means other routes should 404.
//   return { paths, fallback: false }
// }

// // This also gets called at build time
// export async function getStaticProps({ params }) {
//   console.log(params.id)
//   // params contains the post `id`.
//   // If the route is like /posts/1, then params.id is 1
//   const data = await axios.get(`https://challenge.agenciaego.tech/models/${id}`)
//   const modelStatic = data.data

//   // Pass post data to the page via props
//   return { props: { modelStatic } }
// }

// export async function getServerSideProps({params}) {
  
//   console.log(params)
//   // Fetch data from external API
//   const data = await fetch(`https://challenge.agenciaego.tech/models/${params.id}`)
//   model = data.json()

//   // Pass data to the page via props
//   return { props: { model } }
// }
