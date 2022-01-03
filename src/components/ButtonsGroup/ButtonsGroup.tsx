import { Button } from "../Button/Button";
import { IButtonType, IButtonsGroupProps } from "../../utilities/interfaces";
import { ReactElement } from "react";

export const ButtonsGroup = ({
  buttonsArray
}: IButtonsGroupProps): ReactElement => {
  return (
    <div className='tooltip'>
    <div className="buttonsGroup">
      {buttonsArray.map((buttonType: IButtonType) => {
        const { name, label } = buttonType;
        return <Button key={name} name={name} label={label} />;
      })}
    </div>
    <span className='tooltip-text'>1-2 chwyty na start, 1 top i coś pośrodku</span>
    </div>
  );
};
