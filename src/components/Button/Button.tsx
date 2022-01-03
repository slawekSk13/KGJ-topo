import { ReactElement } from "react";
import { IButtonType, EHoldTypes } from "../../utilities/interfaces";
import { postToFirebase } from "../../utilities/firebase";

import { useContext } from "react";
import { StateContext } from "../../state/context";
import { observer } from "mobx-react-lite";

export const Button = observer(({ name, label }: IButtonType): ReactElement => {
  const { boulder, currentHold } = useContext(StateContext);

  const reset = (): void => {
    boulder.setHolds([]);
    boulder.setId();
    boulder.setName("");
    currentHold?.setHold(EHoldTypes.START);
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
    const saveStatus = await postToFirebase(boulder);
    saveStatus ? reset() : console.log(saveStatus);
  };

  const handleHoldTypeChange = (): void => currentHold?.setHold(name);

  return (
    <button
      disabled={isDisabled()}
      className={name}
      onClick={() => handleButtonClick(name)}
    >
      {label}
    </button>
  );
});
