import { ReactElement } from "react";
import { IButtonType, EHoldTypes } from "../../utilities/interfaces";
import { currentHold, boulder } from "../../state";

export const Button = ({ name, label }: IButtonType): ReactElement => {
  const reset = (): void => {
    boulder.setHolds([]);
    currentHold.setHold(EHoldTypes.START);
  };

  const handleHoldTypeChange = (): void => currentHold.setHold(name);

  return (
    <button
      className={name}
      onClick={name === "reset" ? reset : handleHoldTypeChange}
    >
      {label}
    </button>
  );
};
