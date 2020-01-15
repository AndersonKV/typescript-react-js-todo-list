import React, { useState, useEffect, MouseEvent, ChangeEvent, } from "react";

import {RouteComponentProps, withRouter} from "react-router-dom";
import { KeyboardEvent } from "react";
import api from '../../services/api';

import Navbar from '../Navbar';

interface User {
    _id: string;
    email: string;
    password: string;
}

interface Todo {
    _id: string;
    owner: string;
    description: string;
}


function ReactTodo({history}: RouteComponentProps): JSX.Element {
    const [user, setUser] = useState<User>();
    const [todo, setTodo] = useState<Todo[]>();
    const [newTodo, setNewTodo] = useState<string>('');
    const [searchTodo, setSearchTodo] = useState<string>('');

	useEffect(() => {
		async function loadVaga() {
            try {		
                const _id = localStorage.getItem('user')

                const response = await api.get('/getuser', { headers: { _id }})                
                const todoList = await api.get('/gettodo', { headers: { _id }})
 				setUser(response.data)
                setTodo(todoList.data.todo)
 			} catch (err) {
				console.log(err)
			}

		}
		loadVaga()
    },[]);
 
    async function handleClick(event: MouseEvent<HTMLButtonElement>) {
        event.preventDefault();
        if(newTodo.length == 0) {
            alert('mais que uma letra')
        } else {
            const _id = localStorage.getItem('user')
            const data = {"description": newTodo}
            console.log(newTodo)
            await api.post('/todo', data, { headers: { _id }} )  
        }      
          
    }

    function handleChangeTodo(event : ChangeEvent<HTMLInputElement>) {
        event.preventDefault();
        setNewTodo(event.target.value)
    }

    async function handleDelete(event: MouseEvent<HTMLButtonElement>) {
        let getTodo = todo && todo.filter((animal) => {
            return animal._id === event.currentTarget.value            
        })
        
        let _id = getTodo && getTodo[0]._id

        await api.delete('/todo', { headers: { _id }} )
        //console.log(deleteTodo)
    }


    function editName(str:string) { return str.split("@gmail.com") }

      return (
        <>
        <Navbar/>
        <div className="Dashboard">
            <div className="title-todo">
                <h1>Todo List:</h1>
                {/* <input id="searchTodo" type="text" placeholder="search"
                value={searchTodo} onChange={handleChangeUpdate} onKeyPress={handleClickUpdate}/>
              */}
              </div>
              


            <div className="table-principal">
                <div>#</div>
                <div>User</div>
                <div>Description</div>
                <div></div>
            </div>
            
            { todo && todo.map((home, n) => (
            <div className="table-principal" key={n}>
                <div>{n}</div>
                <div>{user ? editName(user.email) : ''}</div>
                <div className="desc">{home.description}</div>
                <div className="box-x">
                    <button type="button" value={home._id} 
                    onClick={handleDelete}>X</button>
                </div>
            </div>
            ))}

            <div className="group-todo-btn">
                <input id="todo" type="text" placeholder="Description"
                    value={newTodo} onChange={handleChangeTodo}/>

                <button type="button" onClick={handleClick}>Add</button>
            </div>
                   
        </div> 
      
        </>
       
    )
}

 export default withRouter(ReactTodo);
