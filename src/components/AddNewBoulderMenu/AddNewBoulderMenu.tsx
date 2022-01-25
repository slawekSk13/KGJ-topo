import "./AddNewBoulderMenu.css";
import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { StateContext } from "../../state/context";
import { Button } from "../Button/Button";
import { ButtonsGroup } from "../ButtonsGroup/ButtonsGroup";
import { Input } from "../Input/Input";
import { IChange, EInputTypes } from "../Input/InputTypes";
import { MapInput } from "../MapInput/MapInput";
import { Select } from "../Select/Select";
import { Switch } from "../Switch/Switch";

export const AddNewBoulderMenu = observer(
  ({ handleShowOptions }: { handleShowOptions: VoidFunction }) => {
    const { boulder, appMessage, allUsers } = useContext(StateContext);
    const handleNameInputChange = (e: IChange): void => {
      const { value } = e.target;
      boulder.setName(value);
    };
    const handleSwitchChange = () => {
      boulder.switchType();
    };
    const handleMapInputChange = (uid: string) => {
      boulder.setMap(uid);
    };
    const handleAuthorInputChange = (uid: string) => {
      boulder.setAuthor(uid);
    };
    const handleGoFurther = () => {
      boulder.getName() ? handleShowOptions() : appMessage.setCode("noname");
    };
    return (
      <div className="new-menu">
        <Input
          onChange={handleNameInputChange}
          value={boulder.getName()}
          placeholder="nazwa"
          type={EInputTypes.TEXT}
          name="boulder-name"
        />
        <Switch
          onChange={handleSwitchChange}
          firstValue="Boulder"
          secondValue="Obwód"
        />
        <MapInput
          onChange={handleMapInputChange}
          currentMaps={[boulder.getMap()]}
        />
        <Select
          onChange={handleAuthorInputChange}
          label="Autor"
          options={allUsers.getUsers()}
          value={boulder.getAuthor()}
        />
        <ButtonsGroup>
          <Button label="Dalej" handleButtonClick={handleGoFurther} />
        </ButtonsGroup>
      </div>
    );
  }
);
