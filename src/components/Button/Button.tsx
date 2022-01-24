import "./Button.css";
import { IButtonType } from "./ButtonTypes";

import { ReactElement } from "react";

export const Button = ({
  handleButtonClick,
  label, className
}: IButtonType): ReactElement => {
  return (
    <button className={`button ${className}`} onClick={handleButtonClick}>
      {label}
    </button>
  );
};
