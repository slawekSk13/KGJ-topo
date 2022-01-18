import { changeLocation } from "../../utilities/helpers";
import { ISmallLinkProps } from "./SmallLinkTypes";
import "./SmallLink.css";

export const SmallLink = ({ text, location }: ISmallLinkProps) => {
  const handleClick = () => changeLocation(location);
  return (
    <p className="link__small clickable" onClick={handleClick}>
      {text}
    </p>
  );
};
