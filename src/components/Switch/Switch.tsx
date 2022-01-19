import "./Switch.css";
import { ISwitchProps } from "./SwitchTypes";

export const Switch = ({ onChange, firstValue, secondValue }: ISwitchProps) => {
  return (
    <div className="switch-button" data-secondvalue={secondValue}>
      <input
        className="switch-button-checkbox"
        type="checkbox"
        id="switch"
        onChange={onChange}
      />
      <label className="switch-button-label" htmlFor="switch">
        <span className="switch-button-label-span">{firstValue}</span>
      </label>
    </div>
  );
};
