import axios from "axios";
import React,{useState} from "react";
import { FcGoogle } from "react-icons/fc"
import { Link, useNavigate } from "react-router-dom";
import { ToastContainer,toast } from "react-toastify";
import { FaSpinner } from "react-icons/fa";

const Login=()=>{
    
    const[isLoading,setIsLoading]=useState(false)
    const navigate=useNavigate()
    const[values,setValues]=useState({
        email:"",
        password:""
});
    const handleInputChange=(e)=>{
        setValues({...values,[e.target.name]:e.target.value})
    }
 
    const handelSubmit=async(e)=>{
        setIsLoading(true)
        e.preventDefault()
        try {
            const response =await axios.post(`${process.env.REACT_APP_API_URL}/api/Trader/Userlogin`,values);
           setIsLoading(false)
            toast.success("Login success")
          console.log(response)
     localStorage.setItem('isLoggedIn', "true");

          setTimeout(() => {
            
              navigate('/dashboard')
          }, 3000);
          
        } catch (error) {
            setIsLoading(false)
            console.error('Error during login',error);
            toast.error("Invalid login credential")
        }
    }
    return(
        
        <div className="sm:w-full sm:px-5 lg:w-[25%] mx-auto h-screen my-auto sm:mt-10 lg:mt-20">
            <div>                
                <ToastContainer/>
            </div>
            <div>
            <h1 className=" text-2xl font-bold italic text-center text-[#FF698D]">INKO<span className="text-2xl font-bold text-black">MOKO</span><span className="text-[#FF698D] text-2xl font-bold">.</span> </h1>
            <div className="flex sm:my-10 lg:my-10">
                <form action="" onSubmit={handelSubmit}>
            <label className="text-xl">Email Address</label> <br />
            <input
             type="text"
             name="email"
             onChange={handleInputChange}
             placeholder="johndoe@gmail.com" className="border bg-[#F4F5F7] p-5 border-slate-500 w-full py-2 rounded-md"/><br />

            <label className="text-xl">Password</label> <br />

            <input
             type="password" 
             name="password"
             onChange={handleInputChange}
             className="border bg-[#F4F5F7] border-slate-300 w-full p-5 py-2 rounded-md"/>

               <input type="checkbox" className=""/> <span>keep me signed in</span> 
            <button type="submit" className="w-full flex items-center justify-center text-center font-semibold text-white mt-5 rounded bg-[#FF698D] h-10">
                
                {isLoading ? <FaSpinner className="animate-spin"/>: "Login"}</button>
            <p className="flex justify-center mt-5">or sign in with</p>
            
            <button type="type" className=" bg-[#D9D9D9] flex items-center justify-center gap-2 mt-5 rounded-md border w-full py-2 "><FcGoogle className="text-3xl"/>  Continue with Google</button>
            <p className=" justify-center text-center text-base mt-10 font-semibold  text-[#FF698D]"> <Link to="/Signup"> Create an accout</Link></p>
            </form>
            </div>
            </div>
        </div>
        
    )
}


export default Login