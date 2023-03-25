import { useState } from 'react';
import axios from 'axios';
import InputForm from '../reusablecomponents/TextField/form';
import './addUser.css'

const AddUser = () => {
  const [name,setName] = useState("");
const [Email,setEmail] = useState("");
const [password,setPassword] = useState("");
const [phoneNo,setphoneNo] = useState("");
const [accountType,setAccountType] = useState("seller");


const handleNameChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
    setName(event.target.value);  
}
const handleEmailChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
  setEmail(event.target.value);  

}
const handlePasswordChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
  setPassword(event.target.value);  

}
const handlePhoneNoChange = (event:React.ChangeEvent<HTMLInputElement>)=>{
  setphoneNo(event.target.value);  

}

const handleAccountTypeChange = (event:React.ChangeEvent<HTMLSelectElement>)=>{
  setAccountType(event.target.value);  
  console.log(accountType);
  

}
const handleSubmit =async  (event: React.FormEvent<HTMLFormElement>) => {
  event.preventDefault();
try{
  
  const response = await axios.post("http://localhost:2300/users/",{
    name:name,
    email:Email,
    password:password,
    phoneNumber:phoneNo,
    accountType:accountType
  })
  console.log(response.data);
}catch(err){
  console.log(err);
  
}
  
}
    return (
      <form className='user_container' onSubmit={handleSubmit}>
          <InputForm htmlfor='name' value='Name' type='Text' onChange={handleNameChange}/>
          <InputForm htmlfor='email' value='E-mail' type='Text' onChange={handleEmailChange}/>
          <InputForm htmlfor='password' value='Password' type='Password' onChange={handlePasswordChange}/>
          <InputForm htmlfor='phoneNo' value='Phone number' type='text' onChange={handlePhoneNoChange}/>
          <div className="dropdown">
          <label htmlFor="user-type">Choose your account type</label>
          <select className='dropdown_select' id="user-type" name="user-type" onChange={handleAccountTypeChange}>
              <option value="seller">Seller</option>
            <option value="buyer">Buyer</option>
            </select>
          </div>
          <button className='user_button' type='submit'>Save</button>




      </form>
    );
};

export default AddUser;