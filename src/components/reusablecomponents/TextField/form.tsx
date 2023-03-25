import { ChangeEvent } from "react";
import TextField from "./textField";
import "./form.css"

interface InputFormProps {
    value:string,
    htmlfor:string
    type:string,
    onChange:(event:ChangeEvent<HTMLInputElement>)=> void;
}
const InputForm = ({value,htmlfor,type,onChange}:InputFormProps) => {
    
    return (
        <div className="reusable_form">
        <label htmlFor={htmlfor}>{value}</label>
        <TextField id = {htmlfor} onChange={onChange} type= {type}  />

        </div>
        
        
        
    );
};

export default InputForm;