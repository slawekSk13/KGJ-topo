import "./Button.css";
import {
  EButtonTypes,
  IButtonType
} from "./ButtonTypes";

import { ReactElement } from "react";

import { useContext } from "react";
import { StateContext } from "../../state/context";

import { HoldState } from "../../state/HoldState";
import { observer } from "mobx-react-lite";
import { EHoldTypes } from "../Hold/HoldTypes";
import { resetNewBoulder, saveBoulder } from "../../utilities/helpers";

export const Button = observer(({ name, label }: IButtonType): ReactElement => {
  const { boulder, currentHold, appError } = useContext(StateContext);

  const handleButtonClick = (name: EButtonTypes | EHoldTypes) => {
    switch (name) {
      case EButtonTypes.RESET:
        resetNewBoulder(boulder, currentHold, appError);
        break;
      case EButtonTypes.SAVE:
        saveBoulder(boulder, appError);
        resetNewBoulder(boulder, currentHold, appError);
        break;
      default:
        handleHoldTypeChange(name);
    }
  };

  const isDisabled = (currentHold: HoldState): boolean => {
    return name === currentHold.getHold();
  };

  const handleHoldTypeChange = (name: EHoldTypes): void =>
    currentHold.setHold(name);

  return (
    <button
      disabled={isDisabled(currentHold)}
      className={`button button__${name}`}
      onClick={() => handleButtonClick(name)}
    >
      {label}
    </button>
  );
});
