import { makeAutoObservable } from "mobx";
import { IHold, EGrade, EHoldTypes } from "../utilities/interfaces";

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

export class Problem {
  id: number;
  boulderHolds: IHold[];
  name: string;
  author: string;
  grade: EGrade;
  constructor() {
    this.id = new Date().valueOf();
    this.boulderHolds = [];
    this.name = "";
    this.author = "";
    this.grade = 0;
    makeAutoObservable(this);
  }
  upgrade() {
    if (this.grade < 5) {
      this.grade++;
    }
  }
  setAuthor(author: string) {
    this.author = author;
  }
  setName(name: string) {
    this.name = name;
  }
  setHolds(holds: IHold[]) {
    this.boulderHolds = holds;
  }
  getHolds() {
    return this.boulderHolds;
  }
}

export const boulder = new Problem();
export const currentHold = new HoldState();
