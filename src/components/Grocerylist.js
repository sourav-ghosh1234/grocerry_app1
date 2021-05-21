import React, { Component, useEffect, useState } from 'react'
import Grocery   from './Grocery';
import {Consumer} from './Context'
import {baseurl} from '../config/baseurl';
import axios from 'axios';


const Grocerylist=()=>  {
    const [groceryList,setGrocerylist]=useState([])


    useEffect(async()=>{
        const response=await axios.get(`${baseurl}/grocery/getall`);
        setGrocerylist(response.data)


    },[])
    

    
    return (
        <>
        
           {
               groceryList.map(item=>(
                   <h1>{item.groceryItem}</h1>
               ))
           } 
               
            
        
        </>
        
    )
    
}
export default Grocerylist


