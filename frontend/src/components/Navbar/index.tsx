import React, { useState, useEffect  } from "react";
import {RouteComponentProps, withRouter} from "react-router-dom";
import api from '../../services/api';

import { Link } from 'react-router-dom';
 
function Navbar({history}: RouteComponentProps): JSX.Element {
    const [loggin, setLoggin] = useState<string>('');
 

    useEffect(() => {
		async function loadSpots() {
            const _id = localStorage.getItem('user')

            if(_id) {
                const response = await api.get('/getuser', { headers: { _id }})
                setLoggin(response.data.email);
                console.log('existe')
            } else {
                history.push('/'); 

            }
 		}
		loadSpots()
    },[]);

 

    function cutName(str:string) {
         return str.split("@gmail.com");
    }


    return(
    <nav>
        <ul>
            <li><Link to="/"><i className="fas fa-home"></i></Link></li>
            <li><Link to="/">Todo List</Link></li>
            <li><Link to="/">{loggin ? cutName(loggin) : 'loggin'}</Link></li>
        </ul>
    </nav>
    )
}

export default withRouter(Navbar);
