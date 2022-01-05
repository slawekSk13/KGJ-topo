import { ITooltipTextProps } from "../utilities/interfaces";
import "./TooltipText.css";

export const TooltipText = ({
  className,
  text,
  onClick,
}: ITooltipTextProps) => {
  return (
    <span className={`tooltip-text ${className}`} onClick={onClick}>
      {text}
    </span>
  );
};
