import { useStaticQuery, graphql } from 'gatsby';
import * as React from 'react'


function SheetList(): React.ReactElement {

    const query = useStaticQuery(graphql`
     query SheetListQuery{
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
    `)
    
    const sheets: any[] = query.allPrismicPag.nodes;

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