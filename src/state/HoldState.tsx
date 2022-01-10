import { makeAutoObservable } from "mobx";
import { EHoldTypes } from "../components/Hold/HoldTypes";

export class HoldState {
    currentHold: EHoldTypes;
    constructor() {
      this.currentHold = EHoldTypes.START;
      makeAutoObservable(this);
    }
    setHold(hold: EHoldTypes) {
      this.currentHold = hold;
    }
    getHold() {
      return this.currentHold;
    }
  }