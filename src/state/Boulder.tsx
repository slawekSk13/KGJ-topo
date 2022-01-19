import { User } from "firebase/auth";
import { action, makeObservable, observable } from "mobx";
import { IHold } from "../components/Hold/HoldTypes";
import { EGrade, EBoulderType, IDoneBy } from "./stateTypes";

export class Boulder {
  uid: number;
  boulderHolds: IHold[];
  name: string;
  authorUid: string;
  grade: EGrade;
  type: EBoulderType;
  doneBy: IDoneBy[];
  mapUid: string;
  constructor() {
    makeObservable(this, {
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
      mapUid: observable,
      setMap: action,
    });
    this.uid = new Date().valueOf();
    this.boulderHolds = [];
    this.name = "";
    this.authorUid = "";
    this.grade = 0;
    this.type = EBoulderType.BOULDER;
    this.doneBy = [];
    this.mapUid = "20211017_210955";
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
  setType(type: EBoulderType) {
    this.type = type;
  }
  switchType() {
    this.getType() === EBoulderType.BOULDER
      ? this.setType(EBoulderType.CIRCUIT)
      : this.setType(EBoulderType.BOULDER);
  }
  getType() {
    return this.type;
  }
  getGrade() {
    return this.grade;
  }
  addAscent(user: User) {
    if (!this.checkAscents(user)) {
      this.doneBy = [
        ...this.doneBy,
        { userUid: user.uid, date: new Date().valueOf() },
      ];
      this.upgrade();
    }
  }
  getAscents() {
    return this.doneBy;
  }
  checkAscents(user: User) {
    return this.getAscents().some((el) => el.userUid === user.uid);
  }
  setAscents(usersArray: IDoneBy[]) {
    this.doneBy = [...usersArray];
  }
  setGrade(grade: EGrade) {
    this.grade = grade;
  }
  setMap(mapUid: string) {
    this.mapUid = mapUid;
  }
  getMap() {
    return this.mapUid;
  }
}
