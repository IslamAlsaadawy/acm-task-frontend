import { ChangeEvent } from 'react';
import "./textField.css"
interface TextFieldProps {
    id:string
    type:string,
    onChange:(event:ChangeEvent<HTMLInputElement>)=> void;
}
const TextField =  ({ id,type, onChange}:TextFieldProps)  => {
    return (
        <input className='reusable_text'
        type={type}
        onChange={onChange}
        id = {id}
            
        />
        
        
        
        
    );
};

export default TextField;