import "./Button.css";
import {
  EButtonTypes,
  IButtonType,
  IValidateBoulderReturn,
} from "./ButtonTypes";

import { ReactElement } from "react";
import { postToFirebase } from "../../utilities/firebase";

import { useContext } from "react";
import { StateContext } from "../../state/context";
import { observer } from "mobx-react-lite";
import { EHoldTypes } from "../Hold/HoldTypes";

export const Button = observer(({ name, label }: IButtonType): ReactElement => {
  const { boulder, currentHold, appError } = useContext(StateContext);

  const reset = (): void => {
    boulder.setHolds([]);
    boulder.setId();
    boulder.setName("");
    currentHold?.setHold(EHoldTypes.START);
    appError.clearCode();
  };

  const handleButtonClick = (name: EButtonTypes | EHoldTypes) => {
    switch (name) {
      case EButtonTypes.RESET:
        reset();
        break;
      case EButtonTypes.SAVE:
        save();
        break;
      default:
        handleHoldTypeChange(name);
    }
  };

  const isDisabled = () => {
    return name === currentHold?.getHold();
  };

  const validateBoulder = (): IValidateBoulderReturn => {
    const nameNotValid = boulder.getName() === "";
    const holds = boulder.getHolds();
    const startsCount = holds.filter(
      (el) => el.holdType === EHoldTypes.START
    ).length;
    const topCount = holds.filter(
      (el) => el.holdType === EHoldTypes.TOP
    ).length;
    const holdsNotValid = startsCount > 2 || startsCount < 1 || topCount !== 1;
    return { nameNotValid, holdsNotValid };
  };

  const save = async () => {
    const { nameNotValid, holdsNotValid } = validateBoulder();
    if (nameNotValid) {
      appError.setCode("noname");
    }
    if (holdsNotValid) {
      appError.setCode("holds");
    } else {
      const saveStatus = await postToFirebase(boulder);
      saveStatus.error ? appError.setCode(saveStatus.code) : reset();
      //przejście do logowania dla niezalogowanych
    }
  };

  const handleHoldTypeChange = (name: EHoldTypes): void =>
    currentHold?.setHold(name);

  return (
    <button
      disabled={isDisabled()}
      className={`button__${name}`}
      onClick={() => handleButtonClick(name)}
    >
      {label}
    </button>
  );
});
