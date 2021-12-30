import { Button } from "../Button/Button";
import { ButtonType, ButtonsGroupProps } from "../../utilities/interfaces";
import { ReactElement } from "react";

export const ButtonsGroup = ({
  buttonsArray
}: ButtonsGroupProps): ReactElement => {
  return (
    <div className="buttonsGroup">
      {buttonsArray.map((buttonType: ButtonType) => {
        const { name, label } = buttonType;
        return <Button key={name} name={name} label={label} />;
      })}
    </div>
  );
};
