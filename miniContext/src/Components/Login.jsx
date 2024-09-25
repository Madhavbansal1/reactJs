import { useState, useContext, useSyncExternalStore } from "react";
import UserContext from "../Contest/UserContext";


import React from 'react'
import UserContextProvider from "../Contest/UserContextProvider";

function Login() {
    const [UserName,SetUserName] = useState("")
    const [Password,SetPassword] = useState("")

    const {setuser} = useContext(UserContext)
    const submitHandler = (e) =>{
        e.preventDefault()
        setuser({UserName,Password})
    }
    return (
        <div>
            <h1>LogIn Page</h1>
            <input type="text"
            value={UserName}
            onChange={(e)=>SetUserName(e.target.value)}
             placeholder="UserName" />

             {/*  only for space */ "     "}


            <input type="text" 
            value={Password}
            onChange={(e)=>SetPassword(e.target.value)}
            placeholder="Password" />

            {/*  only for space */ "     "}
            <button onClick={submitHandler}>Submit</button>        
        </div>
    )
}

export default Login
