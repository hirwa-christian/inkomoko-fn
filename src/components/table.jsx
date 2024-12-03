import React from "react";
import Sidebar1 from "./sidebar1";
import { useState,useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Table=()=>{
    const navigate=useNavigate()
    const[transactions,setTransactions]=useState([])
    const[showpopup,setShowpopup]=useState(false);
    const[deleteid,setDeleteid]=useState(null);
    const[search,setSearch]=useState("")
    useEffect(()=>{
     const getAlltransaction =async()=>{
        const {data} = await axios.get(`${process.env.REACT_APP_API_URL}/api/Trader/getAlltransactions`)
        console.log(data)
        setTransactions(data)
        
     } 
     getAlltransaction()  
    },[])
    const handleAdd=()=>{
        navigate('/add')
    }
    const handleUpdate=(id)=>{
        navigate(`edit/${id}`)
    }

    const confirmDelete=(id)=>{
        setDeleteid(id);
        setShowpopup(true)
    }



    const handleDelete=async(id)=>{
        try {
            await axios.delete(`${process.env.REACT_APP_API_URL}/api/Trader/deleteTransaction/${deleteid}`)
            setShowpopup(false);
            setTransactions((prevTransactions)=>prevTransactions.filter((transaction)=>transaction.id !==deleteid))
            
        } catch (error) {
            console.error('Error deleting transaction',error);
        }finally{
            setShowpopup(false)
            setDeleteid(null)
        }



        
    }
    return(
        <>
        <div className="flex w-full mx-auto">
        <Sidebar1/>
        <div className="ml-64 max-sm:[640px] max-md:[768px] max-lg:[1024px] max-lg:[1280px] max-2xl:[1536px] px-5 md:w-full lg:w-full mx-auto">
            <div className="">
                <div className="md:w-full lg:w-full border-b-2">
                    <div className="flex justify-between w-full my-6">
                
                        <span className="text-[#9f9f9f] mt-3">May 19,2023</span> 
                                
                    <span>
                    <input
                    value={search}
                    onClick={(e)=>setSearch(e.target.value)}
                     type="text" 
                     placeholder="search here"
                      className="p-6 w-96 h-5 rounded-md"/>   
                    
                    </span>
                    </div>
                    </div>
                    <h1 className="flex my-5 text-[#9f9f9f] text-2xl">Recent Transaction</h1>
                    <div className="flex font-semibold w-60 justify-between">
                        <span className="font-semibold border-b-2 text-[#FF698D] border-[#FF698D]">All</span>
                        <span className="font-semibold text-[#525256]">Revenue</span>
                        <span className="font-semibold text-[#525256]">Expenses</span>
                    </div>
                    <div className="flex justify-end px-10">
                        <button onClick={handleAdd} className="border mt-[-40px] w-40 font-bold bg-[#FF698D] rounded-md text-white  h-10">ADD</button>
                    </div>
            </div>
            <div className="text-center mt-10 rounded-2xl px-10 shadow-2xl  bg-[white]">
            <table className="justify-center rounded-2xl md:w-full lg:w-full">
                <thead>
                    <tr>
                        <th className=" border-b-2 p-5 text-base ">Items</th>
                        <th className="  border-b-2 p-5 text-base ">Shop Name</th>
                        <th className="  border-b-2 p-5 text-base ">Date</th>
                        <th className="  border-b-2 p-5 text-base w-80">Payment Method</th>
                        <th className="  border-b-2 p-5 text-base  w-40">Amount</th>
                        <th className="  border-b-2 p-5 text-base  w-40">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {transactions.map((transaction)=>(
                        <tr key={transaction.id}>
                               <td  className="  border-b-2 p-5 text-md w-20 font-bold">  {transaction.items}</td> 
                               <td  className="  border-b-2 p-5 text-md w-20">  {transaction.shopname}</td> 
                               <td  className="  border-b-2 p-5 text-md w-80">{transaction.date}</td> 
                               <td  className="  border-b-2 p-5 text-md w-20">  {transaction.payment}</td> 
                               <td  className="  border-b-2 p-5 text-md w-20 font-bold">{transaction.amount}</td> 
                               <td className="  border-b-2 p-5 text-md w-80">
                                <button onClick={()=>confirmDelete(transaction.id)} className="border w-20 font-bold bg-[#191919]   rounded-md text-white  h-10 m-2">Delete</button>
                                <button onClick={()=>handleUpdate(transaction.id)} className="border w-20 font-bold bg-[#191919]  rounded-md text-white  h-10">Update</button>
                               </td>
                               
                        </tr>


                    ))} 
                   
                   


                </tbody>
             
                
            </table>
          
            </div>
           
        </div>
        </div>
        {showpopup &&(
            <div className="fixed inset-0 bg-black bg-opacity-20 flex justify-center items-center">
            <div className="bg-white p-6 rounded shadow-lg text-center">
                <p className="text-lg font-semibold mb-4">Are you sure you want to delete this item?</p>
                <div className="flex-justify-center gap-4">
                    <button
                    onClick={handleDelete}
                    className="bg-red-500 text-white py-2 px-4 rounded hover:bg-gray-600"
                    >Yes</button>

                    <button 
                    onClick={()=>setShowpopup(false)}
                    className="bg-gray-500  text-white py-2 m-5 w-14 px-4 rounded hover:bg-black">No</button>
                </div>

            </div>
            </div>
        )}
        </>
    )
}
export default Table