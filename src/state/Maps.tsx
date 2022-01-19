import { makeAutoObservable } from "mobx";
import { IMap } from "./stateTypes";

export class Maps {
  maps: IMap[];
  constructor() {
    this.maps = [];
    makeAutoObservable(this);
  }
  getMap(uid: string) {
    return this.maps.filter((el) => el.uid === uid)[0];
  }
  getMaps() {
    return this.maps;
  }
  setMaps(maps: IMap[]) {
    this.maps = [...maps];
  }
}
