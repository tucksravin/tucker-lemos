
//homepage
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
