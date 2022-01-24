import "./ButtonsGroup.css";
import { ReactElement } from "react";

export const ButtonsGroup = ({
  children,
}: {
  children: React.ReactNode;
}): ReactElement => {
  return <div className="buttons-group">{children}</div>;
};
