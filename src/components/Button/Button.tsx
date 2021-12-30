import { ReactElement } from "react";
import { ButtonType, HoldTypes } from "../../utilities/interfaces";
import { currentHold, boulder } from "../../state";

export const Button = ({ name, label }: ButtonType): ReactElement => {
  const reset = (): void => {
    boulder.setHolds([]);
    currentHold.setHold(HoldTypes.START);
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
