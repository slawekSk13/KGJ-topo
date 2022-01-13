import { makeAutoObservable } from "mobx";

export class Loading {
  loading: boolean;
  constructor() {
    this.loading = false;
    makeAutoObservable(this);
  }
  setLoading() {
    this.loading = true;
  }
  clearLoading() {
    this.loading = false;
  }
  getLoading() {
    return this.loading;
  }
}
