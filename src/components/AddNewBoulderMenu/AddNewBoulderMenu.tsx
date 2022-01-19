import { observer } from "mobx-react-lite";
import { useContext } from "react";
import { StateContext } from "../../state/context";
import { Input } from "../Input/Input";
import { IChange, EInputTypes } from "../Input/InputTypes";
import { MenuWrapper } from "../MenuWrapper/MenuWrapper";
import { ESide } from "../MenuWrapper/MenuWrapperTypes";
import { Switch } from "../Switch/Switch";
import { TooltipText } from "../TooltipText/TooltipText";

export const AddNewBoulderMenu = observer(() => {
  const { boulder, appError } = useContext(StateContext);
  const handleChange = (e: IChange): void => {
    const { value } = e.target;
    boulder.setName(value);
  };
  const handleSwitchChange = () => {
    boulder.switchType();
  };
  return (
    <MenuWrapper side={ESide.RIGHT}>
      <div>
        <Input
          onChange={handleChange}
          value={boulder.getName()}
          placeholder="nazwa"
          type={EInputTypes.TEXT}
          name="boulder-name"
        >
          {appError.checkCode("noname") && boulder.getName() === "" ? (
            <TooltipText
              className="tooltip-text__bottom clickable"
              text="Przydałaby się jakaś nazwa..."
              onClick={() => appError.removeCode("noname")}
            />
          ) : null}
        </Input>
        <Switch
          onChange={handleSwitchChange}
          firstValue="Boulder"
          secondValue="Obwód"
        />
      </div>
    </MenuWrapper>
  );
});
