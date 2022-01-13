import { User } from "firebase/auth";
import { makeAutoObservable } from "mobx";

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
  getUserDisplayName() {
    return this.user?.displayName || "";
  }
  getUserUid() {
    return this.user?.uid || "";
  }
  getUserImage() {
    return this.user?.photoURL;
  }
}
