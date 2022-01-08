import "./Input.css";
import { IInput } from "./InputTypes";

export const Input = ({ onChange, value, type, placeholder, name }: IInput) => {
  return (
    <input
      onChange={onChange}
      value={value}
      type={type}
      placeholder={placeholder}
      name={name}
      className='input clickable'
    />
  );
};
