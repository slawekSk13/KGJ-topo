import { IConst, IElementSize } from "./types";
import { constants } from "./constants";
import { EHoldTypes, IHold } from "../components/Hold/HoldTypes";
import { IClick } from "../components/AddNewBoulder/AddNewBoulderTypes";

export const changeLocation = (newLocation?: string): void => {
  const adress = newLocation ? newLocation : "";
  window.location.href = `/#/${adress}`; // dev
  //window.location.href = `/sumator/#/${newLocation}`; //production
};

export const queryElementParameters = (elementId: string): IElementSize => {
  const target: HTMLElement | null = document.getElementById(elementId);
  const rect: DOMRect | undefined = target?.getBoundingClientRect();
  return {
    top: rect?.top || 100,
    left: rect?.left || 100,
    width: rect?.width || 400,
    height: rect?.height || 300,
  };
};

export const generateNewHold = (
  e: IClick,
  constants: IConst,
  holdType: EHoldTypes
): IHold => {
  const { top, left, width, height }: IElementSize =
    queryElementParameters("holdsMap");
  const x = ((e.clientX - left) / width) * constants.sizeX;
  const y = ((e.clientY - top) / height) * constants.sizeY;
  return { x, y, holdType };
};
export const filterCondition = (
  el: IHold,
  holdToCheck: IHold,
  constants: IConst
): boolean =>
  Math.abs(el.x - holdToCheck.x) < constants.radius &&
  Math.abs(el.y - holdToCheck.y) < constants.radius;

export const handleNewHold = (
  e: IClick,
  holds: IHold[],
  holdType: EHoldTypes
): IHold[] => {
  const newHold: IHold = generateNewHold(e, constants, holdType);

  const clickedHold: IHold = holds.filter((el: IHold): boolean =>
    filterCondition(el, newHold, constants)
  )[0];

  const filteredHolds = holds.filter(
    (el: IHold): boolean => !filterCondition(el, newHold, constants)
  );
  if (clickedHold?.holdType === newHold.holdType) {
    return [...filteredHolds];
  } else return [...filteredHolds, newHold];
};
