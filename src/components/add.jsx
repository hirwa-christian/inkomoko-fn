import React,{useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Sidebar from "./sidebar";
const Add=()=>{
    const[items,setItems]=useState('');
    const[shopname,setShopname]=useState('');
    const[date,setDate]=useState('');
    const[payment,setPayment]=useState('');
    const[amount,setAmount]=useState('');

    const navigate=useNavigate()

    const addData=async(e)=>{
        e.preventDefault()
        const data={
            items:items,
            shopname:shopname,
            date:date,
            payment:payment,
            amount:amount
        }
        
        const response=await axios.post(`${process.env.REACT_APP_API_URL}/api/Trader/addTransaction`,data)
        alert(response.data)
        navigate('/table')
    }    
    return(
        <>
        <Sidebar/>
        <h1 className="flex py-7 text-3xl justify-center">Add Transaction</h1>

        <div className="flex justify-center py-6">
            
            <form action="" onSubmit={addData}>
                <label className="px-5 text-xl">Item</label><br />
                <input
                value={items}              
                onChange={(e)=>setItems(e.target.value)}
                placeholder="item"
                className="flex border p-5 w-80 rounded-md h-12"
                type="text" /> <br />

                <label className="px-5 text-xl">Shop Name</label><br />
                <input 
                value={shopname}
                onChange={(e)=>setShopname(e.target.value)}
                placeholder="Shop Name"
                className="flex border p-5 w-80 rounded-md h-12"
                type="text" /> <br />

                <label className="px-5 text-xl">Date</label><br />
                <input 
                value={date}
                onChange={(e)=>setDate(e.target.value)}               
                className="flex border p-5 w-80 rounded-md h-12"
                type="date" /> <br />

                <label className="px-5 text-xl">Payment Method</label><br />
                <input
                value={payment}
                onChange={(e)=>setPayment(e.target.value)}
                placeholder="Payment Method"
                className="flex border p-5 w-80 rounded-md h-12"
                type="text" /> <br />

                <label className="px-5 text-xl">Amount</label><br />
                <input
                value={amount}
                onChange={(e)=>setAmount(e.target.value)}
                placeholder="Amount"
                className="flex border p-5 w-80 rounded-md h-12"
                type="number" /> <br />

                <button 
           
                type="submit"
                placeholder="item"
                className="flex border bg-[#FF698D] text-white font-bold p-5 w-80 justify-center items-center rounded-md h-12"
                >ADD</button>
            </form>
        </div>
        </>
    )
}
export default Add