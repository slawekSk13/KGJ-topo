import "./Button.css";

import { ReactElement } from "react";
import { IButtonType, EHoldTypes } from "../../utilities/interfaces";
import { postToFirebase } from "../../utilities/firebase";

import { useContext } from "react";
import { StateContext } from "../../state/context";
import { observer } from "mobx-react-lite";

export const Button = observer(({ name, label }: IButtonType): ReactElement => {
  const { boulder, currentHold, appError } = useContext(StateContext);

  const reset = (): void => {
    boulder.setHolds([]);
    boulder.setId();
    boulder.setName("");
    currentHold?.setHold(EHoldTypes.START);
    appError.clearCode();
  };

  const handleButtonClick = (name: EHoldTypes) => {
    switch (name) {
      case "reset":
        reset();
        break;
      case "save":
        save();
        break;
      default:
        handleHoldTypeChange();
    }
  };

  const isDisabled = () => {
    return name === currentHold?.getHold();
  };

  const save = async () => {
    const nameCondition = boulder.getName() === "";
    const holds = boulder.getHolds();
    const startsCount = holds.filter(
      (el) => el.holdType === EHoldTypes.START
    ).length;
    const topCount = holds.filter(
      (el) => el.holdType === EHoldTypes.TOP
    ).length;
    const holdsCondition = startsCount > 2 || startsCount < 1 || topCount !== 1;
    if (nameCondition) {
      appError.setCode("noname");
    }
    if (holdsCondition) {
      appError.setCode("holds");
    } else {
      const saveStatus = await postToFirebase(boulder);
      saveStatus ? reset() : console.log(saveStatus);
    }
  };

  const handleHoldTypeChange = (): void => currentHold?.setHold(name);

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
