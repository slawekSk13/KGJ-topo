import { AddNewBoulder } from "../components/AddNewBoulder/AddNewBoulder";
import { holdSwitchButtons } from "../utilities/constants";
import { useContext, useState } from "react";
import { AddNewBoulderMenu } from "../components/AddNewBoulderMenu/AddNewBoulderMenu";
import { HoldSwitch } from "../components/HoldSwitch/HoldSwitch";
import { ButtonsGroup } from "../components/ButtonsGroup/ButtonsGroup";
import { Button } from "../components/Button/Button";
import { observer } from "mobx-react-lite";
import { resetNewBoulder, saveBoulder } from "../utilities/helpers";
import { StateContext } from "../state/context";

export const Home = observer(() => {
  const { boulder, currentHold, appError, loggedUser } =
    useContext(StateContext);
  const [showOptions, setShowOptions] = useState(true);
  const handleShowOptions = () => {
    setShowOptions((prev) => !prev);
  };
  const handleReset = () => {
    resetNewBoulder(boulder, currentHold, appError);
    setShowOptions(true);
  };
  const handleSave = async () => {
    try {
      const saveStatus = await saveBoulder(boulder, appError, loggedUser);
      saveStatus.error || resetNewBoulder(boulder, currentHold, appError);
    } catch (err) {
      console.log(err);
    }
  };
  return showOptions ? (
    <>
      <AddNewBoulderMenu handleShowOptions={handleShowOptions} />
    </>
  ) : (
    <>
      <AddNewBoulder />
      <HoldSwitch holdSwitchButtons={holdSwitchButtons} />
      <ButtonsGroup>
        <Button label="Cofnij" handleButtonClick={handleShowOptions} />
        <Button
          label="Reset"
          className="button__reset"
          handleButtonClick={handleReset}
        />
        <Button
          label="Zapisz"
          className="button__save"
          handleButtonClick={handleSave}
        />
      </ButtonsGroup>
    </>
  );
});
