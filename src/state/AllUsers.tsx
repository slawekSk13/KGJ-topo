import { makeAutoObservable } from "mobx";
import { IUserToSave } from "../utilities/types";

export class AllUsers {
  users: IUserToSave[];
  constructor() {
    this.users = [];
    makeAutoObservable(this);
  }
  getUser(uid: string) {
    return this.users.filter((el) => el.uid === uid)[0];
  }
  getUserDisplayName(uid: string) {
      return this.getUsers().length > 0 ? this.getUser(uid).displayName : 'poczekaj...';
  }
  setUserDisplayName(uid: string, name: string) {
    this.getUser(uid).displayName = name;
  }
  getUserPhotoURL(uid: string) {
    return this.getUsers().length > 0 ? this.getUser(uid).photoURL : '/logo512.png';
}
  getUsers() {
      return this.users;
  }
  setUsers(users: IUserToSave[]) {
    this.users = [...users];
  }
}
