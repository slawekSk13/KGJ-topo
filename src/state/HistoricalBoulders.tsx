import { makeObservable, observable, action } from "mobx";
import { Problem } from "./Problem";
import { IDoneBy, EGrade } from "./stateTypes";

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
      });
      this.boulders = [];
      this.count = 0;
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