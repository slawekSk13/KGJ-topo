import { makeAutoObservable } from "mobx";

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