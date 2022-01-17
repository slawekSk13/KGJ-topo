import { EDataTypes, IConst, IElementSize, TResetNewBoulder } from "./types";
import { constants } from "./constants";
import { EHoldTypes, IHold } from "../components/Hold/HoldTypes";
import { IClick } from "../components/AddNewBoulder/AddNewBoulderTypes";
import { Boulder } from "../state/Boulder";
import { HoldState } from "../state/HoldState";
import { AppError } from "../state/AppError";
import { IValidateBoulderReturn } from "../components/Button/ButtonTypes";
import { postToFirebase } from "./firebase/firebaseDB";

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

export const resetNewBoulder: TResetNewBoulder = (
  boulder: Boulder,
  currentHold: HoldState,
  appError: AppError
) => {
  boulder.setHolds([]);
  boulder.setId();
  boulder.setName("");
  currentHold.setHold(EHoldTypes.START);
  appError.clearCode();
};

export const validateBoulder = (boulder: Boulder): IValidateBoulderReturn => {
  const nameNotValid = boulder.getName() === "";
  const holds = boulder.getHolds();
  const startsCount = holds.filter(
    (el) => el.holdType === EHoldTypes.START
  ).length;
  const topCount = holds.filter((el) => el.holdType === EHoldTypes.TOP).length;
  const holdsNotValid = startsCount > 2 || startsCount < 1 || topCount !== 1;
  return { nameNotValid, holdsNotValid };
};

export const saveBoulder = async (boulder: Boulder, appError: AppError) => {
  const { nameNotValid, holdsNotValid } = validateBoulder(boulder);
  if (nameNotValid) {
    appError.setCode("noname");
  }
  if (holdsNotValid) {
    appError.setCode("holds");
  } else {
    const saveStatus = await postToFirebase(boulder, EDataTypes.BOULDERS);
    console.log(saveStatus);
    saveStatus.error && appError.setCode(saveStatus.code);

    //przejście do logowania dla niezalogowanych
  }
};
