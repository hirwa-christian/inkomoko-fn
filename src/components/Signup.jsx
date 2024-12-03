import React, { useState } from "react";
import Image from "../assets/Image.png";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signup = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [checke, setChecke] = useState(false);

  const handleInputChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!checke) {
      alert("Please confirm you're not a robot.");
      return;
    }
    try {
      const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/Trader/addUser`, values);
      console.log(response.data);
      navigate("/login");
    } catch (error) {
      console.error("Error during signup", error);
      alert("Signup failed");
    }
  };

  return (
    <div className="flex bg-[white] md:w-full lg:w-full w-full grid-cols-2 h-screen overflow-y-auto">
      <div className="w-1/2 h-[1024px]">
        <img src={Image} alt="" className="w-full bg-[white]" />
      </div>
      <div className="w-1/2 p-4 h-full">
        <h1 className="flex mt-10 ml-28 text-4xl font-semibold">Create an account</h1>
        <form onSubmit={handleSubmit}>
          <p className="flex text-lg mt-5 ml-28">
            Already have an account? Login in
          </p>
          <label htmlFor="name" className="flex mt-5 text-[#666666] text-lg ml-28">
            Company Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            onChange={handleInputChange}
            value={values.name}
            className="flex border p-5 py-4 rounded-xl border-slate-400 w-[600px] ml-28"
          />
          <label htmlFor="email" className="ml-28 text-[#666666] text-lg">
            Email address
          </label>
          <input
            id="email"
            type="text"
            name="email"
            value={values.email}
            onChange={handleInputChange}
            className="flex w-[600px] border p-5 border-slate-400 py-4 rounded-xl ml-28"
          />
          <label htmlFor="password" className="text-[#666666] border-slate-500 ml-28 text-lg">
            Password
          </label>
          <input
            id="password"
            type="password"
            name="password"
            onChange={handleInputChange}
            value={values.password}
            className="border border-slate-500 py-4 p-5 rounded-xl w-[600px] ml-28"
          />
          <p className="flex text-lg text-[#666666] mt-2 ml-28">
            Use 8 or more characters with a mix of letters, numbers & symbols.
          </p>
          <p className="mt-10 text-lg text-[#666666] ml-28">
            By creating an account, you agree to our{" "}
            <span className="border-b-2 border-black">Terms of Use</span> and{" "}
            <span className="border-b-2 border-black">Privacy Policy</span>.
          </p>
          <div className="flex border p-2 border-slate-400 ml-28 w-96 py-4 mt-5 rounded-xl">
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
            className="flex border text-xl rounded-full bg-[#FB3F6C] text-white justify-center py-5 ml-28 w-60 mt-5"
            type="submit"
          >
            Create an account
          </button>
          <p className="ml-28 flex text-lg text-[#666666]">
            Already have an account?{" "}
            <span className="ml-3 border-b-2 text-black border-black">
              <Link to="/login">Log in</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
