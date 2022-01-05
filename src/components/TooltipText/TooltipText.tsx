
import "./TooltipText.css";
import { ITooltipTextProps } from "./TooltipTextTypes";

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
