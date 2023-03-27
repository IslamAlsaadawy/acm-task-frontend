import React, { useEffect, useState } from 'react';
import axios from "axios";
import "./addToCart.css"

const AddToCart =  () => {

  interface User {
    _id:string,
    name:string,
    email:string,
    accountType:string,
    password:string,
    phoneNumber:string
}

interface Product {
  _id:string,
  name:string,
  description:string,
  imgpath:string,
  quantity:Number,
  created_by:string,
  created_at:Date,
  category:string
}

  const[userData,setUserData] = useState<User[]>([]);
  const[productData,setProductData] = useState<Product[]>([]);
  const [productId,setProductId] = useState("");
  const [userId,setUserId] = useState("");
  const [quantaity,setQuantaity] = useState("");



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

    const fetchProductData = async () => {
      try{
      const productResponse = await axios.get("http://localhost:2300/products/");
      setProductData(productResponse.data);
      
      }catch(error){
        console.log(error);
        
      }
    };
    fetchProductData();
  },[])
 
  const handleUserChange = (event:React.ChangeEvent<HTMLSelectElement>)=>{
    setUserId(event.target.value);  
    
  
  }
  
  const handleProductChange = (event:React.ChangeEvent<HTMLSelectElement>)=>{
    setProductId(event.target.value);  
    
  
  }
  const quanityHandle = (event:React.ChangeEvent<HTMLInputElement>)=>{
    setQuantaity(event.target.value);  
    
  
  }
  const handleSubmit =async  (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try{
      await axios.post(`http://localhost:2300/users/${userId}/carts/${productId}`,{
      quantity:quantaity
    })
    }catch(err){
      console.log(err);
      
    }
}
  return (
    <form className='form_container' onSubmit={handleSubmit}> 

      <div className="cart_container">
        <h2>Cart!</h2>
        <label>Users</label>
        <select className='dropdown_select' id="user-type" name="user-type" onChange={handleUserChange}>
             {userData.map(user  =>(
              <option key={user._id} value={user._id}>{user.name}</option>
             ))}
            </select>
              <label>Products</label>
            <select className='dropdown_select' id="user-type" name="user-type" onChange={handleProductChange}>
             {productData.map(product  =>(
              <option key={product._id} value={product._id}>{product.name}</option>
             ))}
            </select>

            <label>Quantity</label>
            <input type="number" max={100} onChange={quanityHandle}/>
            <button  className='cart_button' type='submit'>Add to cart</button>

      </div>




    </form>
  )
}

export default AddToCart