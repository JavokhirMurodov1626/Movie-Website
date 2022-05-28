import React from 'react';

const Input = ({name,label,type,onChange,value,error}) => {
    return ( 
        <div className="form-group">
            <label htmlFor={name}>{label}</label>
            <input  
            className="form-control"
            name={name}
            value={value} 
            type={type} 
            id={name}  
            placeholder={label}
            onChange={onChange}
            /> 
            {error && <div className='alert alert-danger'>{error}</div>}           
        </div>
        
        
     );
}
 
export default Input;