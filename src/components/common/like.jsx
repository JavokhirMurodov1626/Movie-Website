import React from 'react';

const Like = ({movie,onHandleLike}) => {
    return ( 
        <i onClick={()=>onHandleLike(movie)} className={movie.liked?"fa fa-heart-o":'fa fa-heart'} aria-hidden="true"></i>
     );
}
 
export default Like;