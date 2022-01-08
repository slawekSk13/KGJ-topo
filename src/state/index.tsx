import { User } from "@firebase/auth";
import { makeAutoObservable } from "mobx";
import { EHoldTypes, IHold } from "../components/Hold/HoldTypes";
import { EGrade, EProblemType, IDoneBy } from "./stateTypes";

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
  uid: number;
  boulderHolds: IHold[];
  name: string;
  authorUid: string;
  grade: EGrade;
  type: EProblemType;
  doneBy: IDoneBy[];
  constructor() {
    this.uid = new Date().valueOf();
    this.boulderHolds = [];
    this.name = "";
    this.authorUid = "";
    this.grade = 0;
    this.type = EProblemType.BOULDER;
    this.doneBy = [];
    makeAutoObservable(this);
  }
  upgrade() {
    if (this.grade < 5) {
      this.grade++;
    }
  }
  setAuthor(author: string) {
    this.authorUid = author;
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
    this.uid = new Date().valueOf();
  }
  getId() {
    return this.uid;
  }
  addAscent(user: User) {
    this.doneBy = [...this.doneBy, { userUid: user.uid, date: new Date().valueOf() }];
    this.upgrade();
  }
}

export class AppError {
  code: string[];
  constructor() {
    this.code = [];
    makeAutoObservable(this);
  }
  setCode(code: string) {
    this.checkCode(code) || (this.code = [...this.code, code]);
  }
  removeCode(code: string) {
    this.code = this.code.filter((el) => el !== code);
  }
  clearCode() {
    this.code = [];
  }
  checkCode(code: string) {
    return this.code.includes(code);
  }
  getCode() {
    return this.code;
  }
}

export class LoggedUser {
  user: User | null;
  constructor() {
    this.user = null;
    makeAutoObservable(this);
  }
  setUser(user: User) {
    this.user = user;
  }
  clearUser() {
    this.user = null;
  }
  getUser() {
    return this.user;
  }
}

export const boulder = new Problem();
export const currentHold = new HoldState();
export const appError = new AppError();
export const loggedUser = new LoggedUser();
