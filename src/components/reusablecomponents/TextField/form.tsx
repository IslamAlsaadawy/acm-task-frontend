import { ChangeEvent } from "react";
import TextField from "./textField";
import "./form.css"

interface InputFormProps {
    value: string,
    htmlfor: string,
    type: string,
    onChange: (event: ChangeEvent<HTMLInputElement>) => void,
    error?: string
}

const InputForm = ({ value, htmlfor, type, onChange, error }: InputFormProps) => {
    return (
        <div className="reusable_form">
            <label htmlFor={htmlfor}>{value}</label>
            <TextField id={htmlfor} onChange={onChange} type={type} />
            {error && <span className="error_message">{error}</span>}
        </div>
    );
};

export default InputForm;