'use client'
import { useState } from "react"
import RestaurentLogin from "../_components/RestuarentLogin"
import RestaurentSignUp from "../_components/RestaurentSignUp"
import HeaderRestuarent from "../_components/HeaderRestuarent"
import FooterRestuarent from "../_components/FooterRestuarent"
 const Restaurant = ()=>{
    const[isLogin,setIsLogin]= useState(true)
    return(
        <>
            <HeaderRestuarent/>
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
            <FooterRestuarent/>    
        </>
    )
 }
 export default Restaurant; 