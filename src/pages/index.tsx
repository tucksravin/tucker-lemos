import * as React from "react"
//import '../styles/global.css'
import type { HeadFC, PageProps } from "gatsby"

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
     <h1 className="text-xl text-slate-600 text-center p-6">
      Hi
     </h1>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Tucker Lemos</title>
