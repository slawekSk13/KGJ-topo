import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseconfig";
import { getDatabase, ref, set, get, child } from "firebase/database";
import {
  getAuth,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  EDataTypes,
  IFirebaseReturn,
  ILoginParameters,
  IUserReturn,
  IUserToSave,
} from "./types";
import { noErrorDataObject, noErrorUserObject } from "./constants";
import { Problem } from "../state/Problem";

initializeApp(firebaseConfig);
const db = getDatabase();
const auth = getAuth();

export const handleDataError = (err: any): IFirebaseReturn => {
  return { code: err.code, error: true, data: [] };
};
export const handleUserError = (err: any): IUserReturn => {
  return { code: err.code, error: true, user: null };
};

export const handleLogin = async ({
  email,
  password,
}: ILoginParameters): Promise<IUserReturn> => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
    const user = auth.currentUser;
    // const users = await getFromFirebase(EDataTypes.USERS);
    if (user) {
      const existingUsers = await getFromFirebase(EDataTypes.USERS);

      const { uid, displayName, photoURL } = user;
      if (
        existingUsers.data.filter((el) => el.uid.toString() === uid).length < 1
      ) {
        const userToSave = { uid, displayName, photoURL };
        const userEffect = await postToFirebase(userToSave, EDataTypes.USERS);
        console.log(userEffect);
      } else {
        console.log('already in db')
      }
    }
    return { ...noErrorUserObject, user: user };
  } catch (err) {
    return handleUserError(err);
  }
};

export const handleLogout = async (): Promise<IUserReturn> => {
  try {
    await signOut(auth);
    return noErrorUserObject;
  } catch (err) {
    return handleUserError(err);
  }
};

export const handleResetPassword = async (
  email: string
): Promise<IUserReturn> => {
  try {
    sendPasswordResetEmail(auth, email);
    return noErrorUserObject;
  } catch (err) {
    return handleUserError(err);
  }
};

export const postToFirebase = async (
  dataToSave: Problem | IUserToSave | null,
  dataType: EDataTypes
): Promise<IFirebaseReturn> => {
  try {
    if (dataToSave) {
      await set(ref(db, `${dataType}/${dataToSave.uid}`), dataToSave);
    }
    return getFromFirebase(dataType);
  } catch (err) {
    return handleDataError(err);
  }
};

export const getFromFirebase = async (
  dataType: EDataTypes
): Promise<IFirebaseReturn> => {
  try {
    const dataRef = ref(db);
    return get(child(dataRef, dataType)).then((snapshot) => {
      if (snapshot) {
        const data = snapshot.val();
        return { ...noErrorDataObject, data: Object.values<Problem>(data) };
      } else return handleDataError({ code: "nodata" });
    });
  } catch (err) {
    return handleDataError(err);
  }
};
