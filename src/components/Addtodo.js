import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {baseurl} from '../config/baseurl';
import Grocery   from './Grocery';
import Grocerylist from './Grocerylist';
import {Month} from './Month'

function Addtodo() {
    const [grocery,setGrocery]=useState("")
    const [groceryList,setGrocerylist]=useState([])


    const addGrocery=async(e)=>{
        e.preventDefault()

        const createTask=await axios.post(`${baseurl}/grocery/add`,{
            groceryItem: grocery,
            isPurchased: false
    });
    console.log(createTask.data)
    const response=await axios.get(`${baseurl}/grocery/getall`);
        setGrocerylist(response.data)
    setGrocery("")
    }
    useEffect(async()=>{
        const response=await axios.get(`${baseurl}/grocery/getall`);
        setGrocerylist(response.data)


    },[])
    return (
        <div style={{marginTop:"150px"}}>
            <h2 className="d-flex flex-verticle m-5 ">Plan for the Month of < Month/> </h2>
            <form>
                <input type="text" className="form-control roundeed-0"  value={grocery} onChange={(e)=>{setGrocery(e.target.value)}} placeholder="Write Your Grocery Plan"/>
                <button className="form-control roundeed-0 btn-secondary" onClick={(e)=>{addGrocery(e)}}>Add</button>

            </form>
            {
               groceryList.map(item=>(
                //    <h1>{item.groceryItem}</h1>
                   <Grocery grocery={item} setGrocerylist={setGrocerylist}/>
               ))
           } 
        </div>
    )
}

export default Addtodo
