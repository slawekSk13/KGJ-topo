import { User } from "@firebase/auth";
import { action, computed, makeAutoObservable, makeObservable, observable } from "mobx";
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
  constructor() {    makeObservable(this, {
    uid: observable,
    setId: action,
    grade: observable,
    upgrade: action,
    authorUid: observable,
    setAuthor: action,
    name: observable,
    setName: action,
    boulderHolds: observable,
    setHolds: action,
    type: observable,
    setType: action,
    doneBy: observable,
    addAscent: action,
  });
    this.uid = new Date().valueOf();
    this.boulderHolds = [];
    this.name = "";
    this.authorUid = "";
    this.grade = 0;
    this.type = EProblemType.BOULDER;
    this.doneBy = [];
  }
  setId(id?: number) {
    this.uid = id ? id : new Date().valueOf();
  }
  getId() {
    return this.uid;
  }
  upgrade() {
    if (this.grade < 5) {
      this.grade++;
    }
  }
  setAuthor(author: string) {
    this.authorUid = author;
  }
  getAuthor() {
    return this.authorUid;
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
  getGrade() {
    return this.grade;
  }
  addAscent(user: User) {
    this.doneBy = [
      ...this.doneBy,
      { userUid: user.uid, date: new Date().valueOf() },
    ];
    this.upgrade();
  }
  getAscents() {
    return this.doneBy;
  }
}

export class HistoricalBoulders extends Problem {
  boulders: Problem[];
  count: number;
  constructor() {
    super();
    makeObservable(this, {
      boulders: observable,
      setBoulders: action,
      setBoulder: action,
      count: observable,
      increaseCount: action,
      decreaseCount: observable,
    })
    this.boulders = [];
    this.count = 0;
    // makeAutoObservable(this);
  }
  setBoulders(boulders: Problem[]) {
    this.boulders = [...boulders];
    this.setBoulder();
  }
  getBoulders() {
    return this.boulders;
  }
  setBoulder() {
    this.boulders.length > 0 &&
      this.setHistoricalBoulder(this.boulders[this.count]);
  }
  // getBoulder() {
  //   this.boulders.length > 0 &&
  //     this.shownBoulder.setHistoricalBoulder(this.boulders[this.count]);
  //   return this.shownBoulder;
  // }
  increaseCount() {
    if (this.count < this.boulders.length - 1) {
      this.count++;
    } else this.count = 0;
    this.setBoulder();
  }
  decreaseCount() {
    if (this.count > 0) {
      this.count--;
    } else this.count = this.boulders.length - 1;
    this.setBoulder();
  }
  setAscents(usersArray: IDoneBy[]) {
    this.doneBy = [...usersArray];
  }
  setGrade(grade: EGrade) {
    this.grade = grade;
  }
  setHistoricalBoulder(historicalBoulder: Problem) {
    this.setId(historicalBoulder.uid);
    this.setHolds([...historicalBoulder.boulderHolds]);
    this.setName(historicalBoulder.name);
    this.setAuthor(historicalBoulder.authorUid);
    this.setGrade(historicalBoulder.grade);
    this.setType(historicalBoulder.type);
    this.setAscents(historicalBoulder.doneBy);
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
export const historicalBoulders = new HistoricalBoulders();
