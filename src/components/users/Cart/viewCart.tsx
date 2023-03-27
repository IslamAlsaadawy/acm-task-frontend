import axios from 'axios';
import React, { Fragment, useEffect, useState } from 'react'
import './viewCart.css'
const ViewCart = () => {
    interface User {
        _id:string,
        name:string,
        email:string,
        accountType:string,
        password:string,
        phoneNumber:string
    }
    interface Cart{
        subTotal:number,
        items:items[]
    }
    interface items{
        name:string,
        quantity:number,
        price:number
    }
    const[userData,setUserData] = useState<User[]>([]);
    const [userId,setUserId] = useState("");
    const [tableHtml,setTableHtml] = useState("");
    const [cartData,setCartData] = useState<Cart>();


    useEffect(() => {
        const fetchUserData = async () => {
          try{
            const response = await axios.get("http://localhost:2300/users/");
            setUserData(response.data);
            
          }catch(error){
            console.log(error);
            
          }
        };
        fetchUserData();
    
      },[])

      const handleUserChange = (event:React.ChangeEvent<HTMLSelectElement>)=>{
        setUserId(event.target.value);  
        console.log(userId);
        
      
      } 

      const handleSubmit =async  (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        try{
          const response = await axios.get(`http://localhost:2300/users/${userId}/carts`)
          if(response.data!= null){
             setCartData(response.data.data);
          }
          console.log(response.data.data);
          
        }catch(err){
          console.log(err);
          
        }
    }
    const table = () => {
        if(cartData){
            console.log(cartData.subTotal);
            
            return    <table>
            <thead>
                <tr>
                    <th>Product Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Subtotal</th>
                </tr>
            </thead>
            <tbody>
                {cartData.items.map(item => (<tr> 
                    <td>{item.name}</td>
                    <td>{item.price}</td>
                    <td>{item.quantity}</td>
                    <td>{item.quantity*item.price}</td>
                    
                </tr>))}
                <tr>
                    <td colSpan={3} className="total">Total</td>
                    <td>{cartData.subTotal}</td>
                </tr>
            </tbody>
        </table>
        }
    }

      
      return (
        <div className='viewCart'>
            <Fragment>
    <form className='form_container viewCart_container' onSubmit={handleSubmit}>

        <label>Users</label>
        <select className='dropdown_select' id="user-type" name="user-type" onChange={handleUserChange}>
             {userData.map(user  =>(
                <option key={user._id} value={user._id}>{user.name}</option>
             ))}
         </select>
         <button className='cart_button' type='submit'>View cart of user</button>
    </form>
    {table()}
    </Fragment>
                
    </div>
  )

 
}

export default ViewCart