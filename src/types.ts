
//homepage
type SheetQuery = { data:{
  allPrismicPag: {
    nodes: {
      id:string|number
      data: {
        bg_color: string, 
        i_am: {text: string}, 
        primary_color: string, 
        secondary_color: string, 
        sheet_name: {text: string}
        side: string,
        }
      }[]
    }
  }
}

//sheet list
interface AllSheets {
  sheets: {
      data: {
          bg_color: string, 
          i_am: {text: string}, 
          primary_color: string, 
          secondary_color: string, 
          sheet_name: {text: string}
      }
  }[]
}

type AbsPosition = {
  top: number,
  left: number
}

type SheetProps = {
   side: string,
    tW: string,
    children?: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    bg_color?: string, 
    i_am?: {text: string}, 
    primary_color?: string, 
    secondary_color?: string, 
    sheet_name:  string,
    id: string|number,
}