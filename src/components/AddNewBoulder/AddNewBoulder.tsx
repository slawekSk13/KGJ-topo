import "./AddNewBoulder.css";
import { IClick } from "./AddNewBoulderTypes";
import { ReactElement, useContext } from "react";
import { handleNewHold } from "../../utilities/helpers";

import { StateContext } from "../../state/context";
import { HoldsMap } from "../HoldsMap/HoldsMap";
import { observer } from "mobx-react-lite";
import { TooltipText } from "../TooltipText/TooltipText";
import { Input } from "../Input/Input";
import { EInputTypes, IChange } from "../Input/InputTypes";

export const AddNewBoulder = observer((): ReactElement => {
  const { boulder, currentHold, appError } = useContext(StateContext);
  const handleMapClick = (e: IClick): void => {
    currentHold &&
      boulder.setHolds(
        handleNewHold(e, boulder.getHolds(), currentHold.getHold())
      );
  };
  const handleChange = (e: IChange): void => {
    const { value } = e.target;
    boulder.setName(value);
  };

  return (
    <>
      <div className="tooltip">
        <Input
          onChange={handleChange}
          value={boulder.getName()}
          placeholder="nazwa"
          type={EInputTypes.TEXT}
          name='boulder-name'
        />
        {appError.checkCode("noname") && boulder.getName() === "" && (
          <TooltipText
            className="tooltip-text__bottom clickable"
            text="Nazwiesz to jakoś?"
            onClick={() => appError.removeCode("noname")}
          />
        )}
      </div>
      <HoldsMap boulder={boulder} handleMapClick={handleMapClick} />
    </>
  );
});
