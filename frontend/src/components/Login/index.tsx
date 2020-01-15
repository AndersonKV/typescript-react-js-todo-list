import React, { useState, ChangeEvent, MouseEvent  } from "react";
import {RouteComponentProps, withRouter} from "react-router-dom";


import api from '../../services/api';
import Navbar from '../Navbar';

 
function ReactForm({history}: RouteComponentProps): JSX.Element {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');


    localStorage.removeItem('user');

    async function handleClick(event: MouseEvent<HTMLButtonElement>) {
        event.preventDefault();

        let response = await api.get('/getusers', {email, password});

        for (let lista of response.data) {
            if(email === lista.email && password === lista.password) {

                const { _id } = lista
                localStorage.setItem('user', _id);
                history.push('/dashboard'); 
            
            } else {
                //console.log('nada foi encontrado')
            }          
        }
          
    }

    function handleChangeEmail(event : ChangeEvent<HTMLInputElement>) {
        event.preventDefault();
        setEmail(event.target.value)
    }

    function handleChangePassword(event : ChangeEvent<HTMLInputElement>) {
        event.preventDefault();
        setPassword(event.target.value)
    }
 
    
    return (
        <>
        <Navbar/>
        <form >
            <div className="content-loggin">
            
            <h5>Login</h5>
            
            <div className="input-group">
                <i className="fas fa-user"></i>
                <input id="email" type="email" placeholder="email" value={email}
                    onChange={handleChangeEmail}/>
            </div>

            <div className="input-group">
                <i className="fas fa-lock"></i>  
                <input id="password" type="password" placeholder="password" 
                value={password} onChange={handleChangePassword}/>
 			</div> 

            <div className="group-btn">
                <button type="submit" onClick={handleClick}>
                    <i className="fas fa-door-open"></i>
                    loggin
                    </button>
                </div>        
            </div>
        </form>

        </>
       
    )
}

 export default withRouter(ReactForm);
