import { makeObservable, observable, action } from "mobx";
import { Problem } from "./Problem";
import { IDoneBy, EGrade } from "./stateTypes";

export class HistoricalBoulders {
    boulders: Problem[];
    count: number;
    currentBoulder: Problem;
    constructor() {
      makeObservable(this, {
        boulders: observable,
        setBoulders: action,
        setBoulder: action,
        count: observable,
        increaseCount: action,
        decreaseCount: action,
        currentBoulder: observable,
        setCurrentBoulder: action,
      });
      this.boulders = [];
      this.count = 0;
      this.currentBoulder = new Problem();
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
        this.setCurrentBoulder(this.boulders[this.count]);
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
    setCurrentBoulder(historicalBoulder: Problem) {
      this.currentBoulder.setId(historicalBoulder.uid);
      this.currentBoulder.setHolds([...historicalBoulder.boulderHolds]);
      this.currentBoulder.setName(historicalBoulder.name);
      this.currentBoulder.setAuthor(historicalBoulder.authorUid);
      this.currentBoulder.setGrade(historicalBoulder.grade);
      this.currentBoulder.setType(historicalBoulder.type);
      this.currentBoulder.setAscents(historicalBoulder.doneBy);
    }
    getCurrentBoulder() {
      return this.currentBoulder;
    }
  }