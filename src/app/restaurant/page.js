'use client'
import { useState } from "react"
import RestaurentLogin from "../_components/restuarentLogin"
import RestaurentSignUp from "../_components/restaurentSignUp"
 const Restaurant = ()=>{
    const[isLogin,setIsLogin]= useState(true)
    return(
        <>
            <h1>Restaurant Login SignUp Page</h1>
            <div className="login-container">
                {isLogin?
                    <RestaurentLogin/>
                    :
                    <RestaurentSignUp/>
                }
                <button onClick={()=>{setIsLogin(!isLogin)}}>
                    {isLogin?"Do not have login? SignUp":"Already have Account?Login"}
                </button>
            </div>
        </>
    )
 }
 export default Restaurant; 