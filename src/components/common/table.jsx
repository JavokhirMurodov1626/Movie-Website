import React from 'react';

import TableBody from './tableBody';
import TableHeader from './tableHeader';


const Table = ({onLike,data,onDelete,columns}) => {
    return ( 
        <table className='table table-striped'>
            <TableHeader
            columns={columns}
            />
            <TableBody
            data={data}
            onDelete={onDelete}
            onLike={onLike}
            columns={columns}
            />
        </table>
     );
}
 
export default Table;