import { makeAutoObservable } from "mobx";
import {
  IHold,
  EGrade,
  EHoldTypes,
  EProblemType,
} from "../utilities/interfaces";

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
  type: EProblemType;
  constructor() {
    this.id = new Date().valueOf();
    this.boulderHolds = [];
    this.name = "";
    this.author = "";
    this.grade = 0;
    this.type = EProblemType.BOULDER;
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
  getName() {
    return this.name;
  }
  setHolds(holds: IHold[]) {
    this.boulderHolds = holds;
  }
  getHolds() {
    return this.boulderHolds;
  }
  setType(type: EProblemType) {
    this.type = type;
  }
  getType() {
    return this.type;
  }
  setId() {
    this.id = new Date().valueOf();
  }
  getId() {
    return this.id;
  }
}

export class AppError {
code: string[];
constructor () {
  this.code = [];
  makeAutoObservable(this);
}
setCode(code: string) {
  this.code = [...this.code, code];
}
removeCode(code:string) {
  this.code = this.code.filter(el => el !== code);
}
clearCode() {
  this.code = [];
}
checkCode(code: string) {
  return this.code.includes(code);
}
getCode() {
  return this.code
}
}

export const boulder = new Problem();
export const currentHold = new HoldState();
export const appError = new AppError();