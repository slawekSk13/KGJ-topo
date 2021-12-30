import { makeAutoObservable } from "mobx";
import { Hold, grade, HoldTypes } from "../utilities/interfaces";

export class HoldState {
  private currentHold: HoldTypes;
  constructor() {
    this.currentHold = HoldTypes.START;
    makeAutoObservable(this);
  }
  setHold(hold: HoldTypes) {
    this.currentHold = hold;
  }
  getHold() {
    return this.currentHold;
  }
}

export class Problem {
  id: number;
  boulderHolds: Hold[];
  name: string;
  author: string;
  grade: grade;
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
  setHolds(holds: Hold[]) {
    this.boulderHolds = holds;
  }
}

export const boulder = new Problem();
export const currentHold = new HoldState();
