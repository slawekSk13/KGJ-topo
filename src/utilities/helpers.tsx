import { EHoldTypes, IHold, IConst, IElementSize } from "./interfaces";
import { constants } from "./constants";

export const queryTargetParameters = (): IElementSize => {
  const target: HTMLElement | null = document.getElementById("target");
  const rect: DOMRect | undefined = target?.getBoundingClientRect();
  return {
    top: rect?.top || 100,
    left: rect?.left || 100,
    width: rect?.width || 400,
    height: rect?.height || 300
  };
};

export const generateNewHold = (
  e: { clientX: number; clientY: number },
  constants: { sizeX: number; sizeY: number },
  holdType: EHoldTypes
): IHold => {
  const { top, left, width, height }: IElementSize = queryTargetParameters();
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
  e: { clientX: number; clientY: number },
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
