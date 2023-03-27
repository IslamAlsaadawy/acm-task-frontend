import { useState } from 'react';
import axios from 'axios';
import Joi from 'joi';
import InputForm from '../reusablecomponents/TextField/form';
import './addUser.css';

interface FormErrors {
  name?: string;
  email?: string;
  password?: string;
  phoneNo?: string;
  accountType?: string;
}
interface ValidationErrors {
  [key: string]: string;
}

const schema = Joi.object().keys({
  name: Joi.string().required(),
  email: Joi.string().email({ tlds: { allow: false } }).required(),
  password: Joi.string().min(8).required(),
  phoneNo: Joi.string().required(),
  accountType: Joi.string().valid('seller', 'buyer').required(),
});

const AddUser = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [accountType, setAccountType] = useState('seller');
  const [errors, setErrors] = useState<FormErrors>({});

  const handleNameChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handlePhoneNoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPhoneNo(event.target.value);
  };

  const handleAccountTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setAccountType(event.target.value);
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const user = { name, email, password, phoneNo, accountType };
    const result = schema.validate(user, { abortEarly: false });
    if (result.error) {
      const validationErrors: ValidationErrors = {};
      for (let item of result.error.details) {
        validationErrors[item.path[0]] = item.message;
      }
      setErrors(validationErrors);
      return;
    }
    try {
      await axios.post("http://localhost:2300/users/", {
        name:name,
        email:email,
        password:password,
        phoneNumber:phoneNo,
        accountType:accountType
      });
      console.log('User added successfully');
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="add_user_form_container">
      <form onSubmit={handleSubmit}>
        <InputForm
          value="Name"
          htmlfor="name"
          type="text"
          onChange={handleNameChange}
          error={errors?.name}
        />
        <InputForm
          value="Email"
          htmlfor="email"
          type="email"
          onChange={handleEmailChange}
          error={errors?.email}
        />
        <InputForm
          value="Password"
          htmlfor="password"
          type="password"
          onChange={handlePasswordChange}
          error={errors?.password}
        />
        <InputForm
          value="Phone Number"
          htmlfor="phoneNo"
          type="text"
          onChange={handlePhoneNoChange}
          error={errors?.phoneNo}
        />
        <div className="dropdown">
          <label htmlFor="user-type">Choose your account type</label>
          <select className='dropdown_select' id="user-type" name="user-type" onChange={handleAccountTypeChange}>
              <option value="seller">Seller</option>
            <option value="buyer">Buyer</option>
            </select>
          </div>
        <button className='user_button' type="submit">Add User</button>
      </form>
    </div>
  );
};

export default AddUser;