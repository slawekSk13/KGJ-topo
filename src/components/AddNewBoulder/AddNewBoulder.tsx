import "./AddNewBoulder.css";
import { ReactElement, useContext } from "react";
import { handleNewHold } from "../../utilities/helpers";

import { StateContext } from "../../state/context";
import { HoldsMap } from "../HoldsMap/HoldsMap";
import { observer } from "mobx-react-lite";
import { TooltipText } from "../../TooltipText/TooltipText";

export const AddNewBoulder = observer((): ReactElement => {
  const { boulder, currentHold, appError } = useContext(StateContext);
  const handleMapClick = (e: { clientX: number; clientY: number }): void => {
    currentHold &&
      boulder.setHolds(
        handleNewHold(e, boulder.getHolds(), currentHold.getHold())
      );
  };
  const handleChange = (e: { target: { value: string } }) => {
    const { value } = e.target;
    boulder.setName(value);
  };

  return (
    <>
      <div className="tooltip">
        <input
          onChange={handleChange}
          className={"boulder-name-input clickable"}
          value={boulder.getName()}
          placeholder="nazwa"
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
