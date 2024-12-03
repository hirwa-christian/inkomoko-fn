import React,{useState,useEffect} from "react";
import axios from "axios";
import { useNavigate,useParams } from "react-router-dom";
import Sidebar1 from "./sidebar1";
const Edit=()=>{
    const {id}=useParams();
    const navigate=useNavigate()
    const[items,setItems]=useState('');
    const[shopname,setShopname]=useState('');
    const[date,setDate]=useState('');
    const[payment,setPayment]=useState('');
    const[amount,setAmount]=useState('');

    useEffect(()=>{
        const getAll=async()=>{
            try {
                const {data}=await axios.get(`${process.env.REACT_APP_API_URL}/api/Trader/getoneTransaction/${id}`)
                setItems(data.items)
                setShopname(data.shopname)
                setDate(new Date(data.date).toISOString().split('T')[0])
                setPayment(data.payment)
                setAmount(data.amount)
                console.log(data)
            } catch (error) {
                console.error('Error fetching data',error)
                alert('Failed to fecth transaction data.')
            }
        }
        getAll();
    },[id])
    
    const updateTransaction=async(e)=>{
        e.preventDefault()
        const up={
            items:items,
            shopname:shopname,
            date:date,
            payment:payment,
            amount:amount
        }
        await axios.put(`${process.env.REACT_APP_API_URL}/api/Trader/Updatetransaction/${id}`,up)
        navigate('/table')
        alert('Updated')
    }

        
    return(
        <>
        <Sidebar1/>
        <h1 className="flex py-7 text-3xl justify-center">Edit Transaction</h1>

        <div className="flex justify-center py-6">
            
            <form onSubmit={updateTransaction}>
                <label className="px-5 text-xl">Item</label><br />
                <input
                value={items}              
                onChange={(e)=>setItems(e.target.value)}
                className="flex border p-5 w-80 rounded-md h-12"
                type="text" /> <br />

                <label className="px-5 text-xl">Shop Name</label><br />
                <input 
                value={shopname}
                onChange={(e)=>setShopname(e.target.value)}
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
                className="flex border p-5 w-80 rounded-md h-12"
                type="text" /> <br />

                <label className="px-5 text-xl">Amount</label><br />
                <input
                value={amount}
                onChange={(e)=>setAmount(e.target.value)}
                className="flex border p-5 w-80 rounded-md h-12"
                type="number" /> <br />

                <button 
           
                type="submit"
                placeholder="item"
                className="flex border bg-[#FF698D] text-white font-bold p-5 w-80 justify-center items-center rounded-md h-12"
                >Edit</button>
            </form>
        </div>
        </>
    )
}
export default Edit