import * as React from "react"
import { useRef } from "react"
import { graphql, HeadFC } from "gatsby"
import SheetList from '../components/SheetList'
import Sheet from '../components/Sheet'



const IndexPage = ({data}: SheetQuery) =>{ 


const sgRef = useRef()

const wRef = useRef()

const dRef = useRef()





  return (
    <>
    
    <Sheet ref={sgRef} tW="bg-gradient-radial from-blue-300 via-blue-400 to-blue-300" side="left">
     <h1 className = "container w-64 mx-auto mt-6 text-white text-center shadow-sm rounded-sm bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500">scene play and storygames</h1>
   </Sheet>



   <Sheet ref={wRef} tW="bg-gradient-radial from-green-400 via-green-500 to-green-400" side="right">
    <h1 className="container w-64 mx-auto mt-6 text-white shadow-sm text-center rounded-sm bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500" >scripts and other writings</h1>
  </Sheet>



  <Sheet ref={dRef} tW="bg-gradient-radial from-blue-400 to-purple-900" side="bottom">
   <h1 className="container w-64 mx-auto mt-6 text-white shadow-sm text-center rounded-sm bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500" >web development</h1>
 </Sheet>
 

    <div className="bg-gray-800 z-0 h-screen flex items-center">

        <SheetList sheets={data.allPrismicPag.nodes} />


      <button
        className="relative bg-blue-300 hover:bg-blue-400 text-center w-32 text-gray-700 rounded-lg shado-lg cursor-pointer duration-150 mx-auto"
        onClick={() => sgRef.current.toggleFromLanding()}
        >
        left
      </button>
      <button
        className="relative bg-blue-300 hover:bg-blue-400 text-center w-32 text-gray-700 rounded-lg shado-lg cursor-pointer duration-150 mx-auto"
        onClick={() => dRef.current.toggleFromLanding()}
        >
        bottom
      </button>
      <button
        className="relative bg-blue-300 hover:bg-blue-400 text-center w-32 text-gray-700 rounded-lg shado-lg cursor-pointer duration-150 mx-auto"
        onClick={() => wRef.current.toggleFromLanding()}
        >
        right
      </button>
      </div>






    </>
)
  

}

export default IndexPage

export const Head: HeadFC = () => <title>Tucker Lemos</title>

//write a graphql query to get all the sheets
 

export const query = graphql`
  query {
    allPrismicPag {
      nodes {
        data {
          bg_color
          i_am {
            text
          }
          primary_color
          secondary_color
          sheet_name {
            text
          }
        }
      }
    }
  }
`  
  
