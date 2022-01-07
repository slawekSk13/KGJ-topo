import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseconfig";
import { getDatabase, ref, set, get, child } from "firebase/database";
import { Problem } from "../state";
import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { IFirebaseReturn, ILoginParameters, IUserReturn } from "./types";
import { noErrorDataObject, noErrorUserObject } from "./constants";

initializeApp(firebaseConfig);
const db = getDatabase();
const auth = getAuth();

const handleDataError = (err: any): IFirebaseReturn => {
  return { code: err.code, error: true, data: [] };
};
const handleUserError = (err: any): IUserReturn => {
  return {code: err.code, error: true, user: null}
}

const handleLogin = async ({email, password}: ILoginParameters): Promise<IUserReturn> => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    const user = auth.currentUser;
      return {...noErrorUserObject, user};
  } catch (err) {
    return handleUserError(err);
  }
};

const handleLogout = async (): Promise<IUserReturn> => {
  try {
    await signOut(auth);
    return noErrorUserObject;
  } catch (err) {
    return handleUserError(err);
  }
};

const handleResetPassword = async (email: string): Promise<IUserReturn> => {
  try {
    sendPasswordResetEmail(auth, email);
    return noErrorUserObject;
  } catch (err) {
    return handleUserError(err);
  }
};

export const postToFirebase = async (dataToSave: Problem): Promise<IFirebaseReturn> => {
  try {
    await set(ref(db, `boulders/${dataToSave.id}`), dataToSave);
    return getFromFirebase();
  } catch (err) {
    return handleDataError(err);
  }
};

export const getFromFirebase = async (): Promise<IFirebaseReturn> => {
  try {
    const dataRef = ref(db);
    return get(child(dataRef, `boulders`)).then((snapshot) => {
      if (snapshot) {
        const data = snapshot.val();
        return {...noErrorDataObject, data: Object.values<Problem>(data)};
      } else return handleDataError({ code: "nodata" });
    });
  } catch (err) {
    return handleDataError(err);
  }
};
