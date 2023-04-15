import { graphql} from 'gatsby'
import * as React from 'react'


const SheetList: React.FC<AllSheets> = ({sheets}) => { 

    console.log(sheets);

    let items: React.ReactElement[] = [];

    sheets.forEach(e => {
        items.push( <li className='p-4'>{e.data.sheet_name.text}</li>)
    });

    return  (
        <ul className='container mx-auto p-6 text-center'>
            {items}
        </ul>
    );
}

export default SheetList;