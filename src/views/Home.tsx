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
  const { boulder, currentHold, appMessage, loggedUser, loading } =
    useContext(StateContext);
  const [showOptions, setShowOptions] = useState(true);
  const handleShowOptions = () => {
    setShowOptions((prev) => !prev);
  };
  const handleReset = () => {
    resetNewBoulder(boulder, currentHold, appMessage);
    setShowOptions(true);
  };
  const handleSave = async () => {
    loading.setLoading();
    try {
      const saveStatus = await saveBoulder(boulder, appMessage, loggedUser);
      saveStatus.error || resetNewBoulder(boulder, currentHold, appMessage);
      saveStatus.error
        ? appMessage.setCode("boulder-not-added")
        : appMessage.setCode("boulder-added");
    } catch (err) {
      console.log(err);
      appMessage.setCode("boulder-not-added");
    } finally {
      loading.clearLoading();
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
