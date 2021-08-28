import React from 'react'
import axios from 'axios'
import { Redirect } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logoutdonefunc } from '../../Redux/Auth/action'
import { saveData } from '../../Utils/LocalStore/LocalData'
import { useHistory } from 'react-router'


const Home = () => {
  
    const { isAuth } = useSelector((state) => state.auth)
    const history = useHistory()
    const dispatch = useDispatch()
    let getdata = JSON.parse(localStorage.getItem("user")) || {username:"admin"}
    console.log(getdata.username)
    const handleLogout = () => {
        if (isAuth) {

            dispatch(logoutdonefunc())
            saveData("token", "")
            saveData("user",{username:"admin"})
            history.push("/signin")
        }
        
    }

 



   
    return (
        <div>
            <h1>Welcome to home page:--{getdata.username}</h1>
            <div>
                <button onClick={handleLogout}>{isAuth ? "SIGNOUT" : "SIGNIN"}</button>
            </div>
        </div>
    )
}

export default Home
