import * as React from "react"
import { graphql, HeadFC } from "gatsby"
import SheetList from '../components/SheetList'

type SheetQuery = { data:{
  allPrismicPag: {
    nodes: {
      data: {
        bg_color: string, 
        i_am: {text: string}, 
        primary_color: string, 
        secondary_color: string, 
        sheet_name: {text: string}
        }
      }[]
    }
  }
}


const IndexPage = ({data}: SheetQuery) => (
  <main>
    <h1 className="text-xl text-slate-600 text-center p-6">
      Hi
    </h1>

    <div className="container mx-auto p-10">
      <SheetList sheets={data.allPrismicPag.nodes} />
    </div>
  </main>
)

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
  
