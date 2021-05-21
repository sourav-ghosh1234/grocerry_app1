import React, { useEffect, useState } from 'react';
import {Consumer} from './Context';
import {baseurl} from '../config/baseurl';
import axios from 'axios';

function Grocery(props) {
    
    const style=()=>{
        
        

        return {textDecoration: props.grocery.isPurchased ?"line-through" : "none"}
    }
    const toggle=(id,dispatch)=>{
        dispatch({type:"TOGGLE",payload:id})

    }


    const deleteGrocery=async(props,e)=>{
        e.preventDefault();
        console.log(props.grocery._id)

         const createTask=await axios.delete(`${baseurl}/grocery/deletegroceritem/${props.grocery._id}`);
    console.log(createTask.data)
    const response=await axios.get(`${baseurl}/grocery/getall`);
        props.setGrocerylist(response.data)
        console.log(response.data)
    

    }

    const updateGrocery=async(props,e)=>{
         const updateData = await axios.put(
          `${baseurl}/grocery/updatepurchasestatus`,
          {
            _id: props.grocery._id,
            isPurchased: !props.grocery.isPurchased,
          }
        );
        const response=await axios.get(`${baseurl}/grocery/getall`);
        props.setGrocerylist(response.data)
        console.log(response.data)
        
        
    }
   
    return (
        
                
                <div style={{padding:"3px"}}>
           <h3 className="text-dark text-center p-1 bg-light border-bottom" style={style()}>
               <p>{props.grocery.groceryItem}</p>
           <input type="submit"  value="purchased" onClick={(e)=>{updateGrocery(props,e)}}/>
               <input type="submit"  value="X" onClick={(e)=>{deleteGrocery(props,e)}} />

            {/* <p className="float-left">Item</p> */}
            {/* <button className="float-right btn-secondary">X</button>  */}
           </h3>


        </div>

                
           
        
    )
}

export default Grocery
