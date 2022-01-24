import { ISelectProps } from "./SelectTypes";
import "./Select.css";

export const Select = ({ label, options, onChange, value }: ISelectProps) => {
  return (
    <div className="select-wrapper">
      {label}:
      <select className='select clickable' value={value} onChange={(e) => onChange(e.target.value)}>
        {value === "" && <option value="">Wybierz autora</option>}
        {options.map((el) => (
          <option key={el.uid} value={el.uid}>
            {el.displayName}
          </option>
        ))}
      </select>
    </div>
  );
};
