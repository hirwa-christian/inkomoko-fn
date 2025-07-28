import React, { useState } from "react";
import Image from "../assets/Image.png";
import { Link, useNavigate } from "react-router-dom";
import { SignupUser } from "../service/signupService";
import { ToastContainer,toast } from "react-toastify";
import { FaSpinner } from "react-icons/fa";
import { useMutation } from "@tanstack/react-query";


const Signup = () => {
  const navigate = useNavigate();
   const [checke, setChecke] = useState(false);
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
 
  const {mutate,isPending}=useMutation({
    mutationFn:SignupUser,
    onSuccess:()=>{
      toast.success("Signup Success");
      setTimeout(()=>navigate("/login"),3000);
    },
    onError:(error)=>{
      console.error("Signup failed",error);
      toast.error("Signup failed")
    }
  })
  const handleInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!checke) {
      alert("Please confirm you're not a robot.");
      return;
    }
    mutate(values)
  };

  return (
   <>
    <div>
    <ToastContainer/>
    </div>
    <div className="flex h-screen bg-white w-full overflow-hidden">

      {/* image */}
      <div className="sm:block md:hidden w-1/2 md:w-full h-screen relative">
        <img src={Image} alt="" className="w-full bg-white object-cover h-screen" />
      </div> 

      {/* form */}
      <div className="lg:px-10 sm:w-full sm:py-2 sm:px-5 lg:w-1/2 h-full ">
        <h1 className="sm:mt-5 lg:mt-10 text-4xl font-semibold">Create an account</h1>
        <form onSubmit={handleSubmit}>
          <p className="text-lg mt-5">
            Already have an account? Login in
          </p>
         <div className="flex flex-col gap-2">
         <label htmlFor="name" className="text-[#666666] text-lg">
            Company Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            onChange={handleInputChange}
            value={values.name}
            className="flex border sm:p-2 lg:p-3  rounded-xl border-slate-400 "
          />
         </div>
         <div className="flex flex-col gap-2">
         <label htmlFor="email" className="text-[#666666] text-lg">
            Email address
          </label>
          <input
            id="email"
            type="text"
            name="email"
            value={values.email}
            onChange={handleInputChange}
            className="flex border sm:p-2 lg:p-3 border-slate-400 rounded-xl"
          />
         </div>
        <div className="flex flex-col gap-2">
        <label htmlFor="password" className="text-[#666666] border-slate-500 text-lg">
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={handleInputChange}
            value={values.password}
            className="border border-slate-500 sm:p-2 lg:p-3 rounded-xl"
          />
        </div>
          <p className="flex text-lg text-[#666666] mt-2">
            Use 8 or more characters with a mix of letters, numbers & symbols.
          </p>
          <p className="sm:mt-5 lg:mt-10 text-lg text-[#666666]">
            By creating an account, you agree to our{" "}
            <span className="border-b-2 border-black">Terms of Use</span> and{" "}
            <span className="border-b-2 border-black">Privacy Policy</span>.
          </p>
          <div className="flex border p-2 border-slate-400 lg:w-96 lg:py-4 mt-5 rounded-xl">
            <input
              type="checkbox"
              checked={checke}
              onChange={(e) => setChecke(e.target.checked)}
              className="flex h-6 ml-2"
            />
            <span className="flex text-base text-[#666666] ml-2">
              I'm not a robot
            </span>
          </div>
          <button
            className="flex border text-xl rounded-full bg-[#FB3F6C] text-white justify-center sm:py-2 lg:py-5 w-60 mt-5"
            type="submit"
          >
            {isPending ? <FaSpinner  className="animate-spin"/>:"Create an Account"}
          </button>
          <p className="flex text-lg text-[#666666]">
            Already have an account?{" "}
            <span className="ml-3 border-b-2 text-black border-black">
              <Link to="/login">Log in</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
    </>
  );
};

export default Signup;
