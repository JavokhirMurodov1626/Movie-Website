import React from 'react';
import _ from "lodash";
import {Link} from "react-router-dom";

const TableBody = ({columns,data}) => {
    const raiseCell=(column,item)=>{
        if(column.content) return column.content(item);
        if(column.path==='title') return <Link to={`/movies/${item._id}`} >{_.get(item,column.path)}</Link>
        return _.get(item,column.path);
    }
    const generateKey=(item,column)=>{
        return (item._id+(column.path||column.key));
    } 
    return ( 
        <tbody className='text-center'>
            {data.map(item=> 
            <tr key={item._id}>
                {columns.map(column=>
                <td key={generateKey(item,column)}>{raiseCell(column,item)}</td>)}
            </tr> )}
            {data.length===0}
        </tbody>
        
     );
}
 
export default TableBody;