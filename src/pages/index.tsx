import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import SheetList from '../components/SheetList'

const IndexPage: React.FC<PageProps> = () => {
  return (
    <main>
     <h1 className="text-xl text-slate-600 text-center p-6">
      Hi
     </h1>

     <div className="container mx-auto p-10">
        <SheetList />
     </div>
    </main>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Tucker Lemos</title>
