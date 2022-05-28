import React from 'react';
import Joi from 'joi-browser';
import Form from './common/form';

class Login extends Form {
    constructor(props){
        super(props);
        this.state={
            data:{username:"",password:""},
            errors:{}
        }
    }
    schema={
        username:Joi.string().required().label('Username'),
        password:Joi.string().required().label('Password')
    }
    render(){
        return ( 
            <div className="row">
                <div className="col-4 offset-4 mt-4">
                    <h1 className='mb-4 text-primary'>Login</h1>
                    <form onSubmit={this.handleSubmit}>
                        {this.renderInput('username','Username')}
                        {this.renderInput('password','Password','pas')}
                        {this.renderButton('Login')}
                    </form>
                </div>
            </div>
            
         );
    }
    
}
 
export default Login;