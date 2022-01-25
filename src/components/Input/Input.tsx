import "./Input.css";
import { IInput } from "./InputTypes";

export const Input = ({ onChange, value, type, placeholder, name, children }: IInput) => {
  return (
    <label className='text-input-label'>
    <input
      onChange={onChange}
      value={value}
      type={type}
      placeholder={placeholder}
      name={name}
      className='input clickable'
      autoFocus
    />
    {children}
    </label>
  );
};
