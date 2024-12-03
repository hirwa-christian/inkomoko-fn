import React from "react";
import Wallet from '../assets/wallet.svg'
import Transaction from '../assets/Transaction.svg'
import Bill from '../assets/Bill (1).svg'
import Expenses from '../assets/Group.svg'
import Goals from '../assets/Goal.svg'
import Setting from '../assets/Settings.svg'
import Overview from '../assets/Overview.svg'
import { Link } from "react-router-dom";
const Sidebar=()=>{
    return(
        <div className="fixed h-screen w-60 bg-[#191919]">
            <div className="justify-start p-3 ">
            <h1 className=" text-2xl font-bold text-center mt-5  text-[#FF698D]">INKO<span className="text-2xl font-bold text-white">MOKO</span><span className="text-[white] text-2xl font-bold">.</span> </h1>
            <ul className="flex my-2 flex-col p-3 ml-5 ">
               
            <li className="flex p-2 bg-[#FF698D] rounded-md flex-row items-center cursor-pointer gap-3 my-5 text-[#F4F5F7] h-10 ">
            <span><img className="w-[20px]" src={Overview} alt="" /></span><Link to="/dashboard">Overview</Link> </li>

                    <li className="flex p-2 flex-row cursor-pointer hover:bg-blue-950 gap-3 text-[#F4F5F7]  h-10 ">
                    <span><img src={Wallet}  alt="" /></span> Project</li>

                <li className="flex flex-row p-2 items-center cursor-pointer hover:bg-blue-950 gap-3 my-2 text-[#F4F5F7] h-10 ">
                    <span><img src={Transaction} alt="" /></span><Link to="/table">Transactions</Link> </li>

                <li className="flex flex-row p-2 items-center cursor-pointer hover:bg-blue-950 gap-3 my-2 text-[#F4F5F7] h-10 "><span>
                    <img src={Bill} alt="" /></span> Bills</li>

                <li className="flex flex-row p-2 items-center cursor-pointer hover:bg-blue-950 gap-3 my-2 text-[#F4F5F7] h-10 "><span>
                    <img src={Expenses} alt="" /></span> Expenses</li>

                <li className="flex flex-row p-2 items-center cursor-pointer hover:bg-blue-950 gap-3 my-2 text-[#F4F5F7] h-10 ">
                    <span><img src={Goals} alt="" /></span> Goals</li>

                <li className="flex flex-row p-2 items-center cursor-pointer hover:bg-blue-950 gap-3 text-[#F4F5F7] h-10 "><span><img src={Setting} alt="" /></span> Settings</li>

                <button className="bg-[#FF698D] rounded-md flex  justify-center py-2 mt-20 text-white text-xl"><Link to="/Logout">Logout</Link></button>
            </ul>
            </div>
        </div>
    )
}
export default Sidebar