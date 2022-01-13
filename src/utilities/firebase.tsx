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
  IUsersListReturn,
  IUserToSave,
} from "./types";
import { noErrorDataObject, noErrorUserObject } from "./constants";
import { Boulder } from "../state/Boulder";

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
    const users = await getUsersListFromFirebase();
    if (user) {
      const { uid, displayName, photoURL } = user;
      if (
        users && users.data.filter((el) => el.uid.toString() === uid).length < 1
      ) {
        const userToSave = { uid, displayName, photoURL };
        await postToFirebase(userToSave, EDataTypes.USERS);
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
  dataToSave: Boulder | IUserToSave | null,
  dataType: EDataTypes
): Promise<IFirebaseReturn> => {
  try {
    if (dataToSave) {
      await set(ref(db, `${dataType}/${dataToSave.uid}`), dataToSave);
    }
    return {...noErrorDataObject};
  } catch (err) {
    return handleDataError(err);
  }
};

export const getBouldersFromFirebase = async (
): Promise<IFirebaseReturn> => {
  try {
    const dataRef = ref(db);
    return get(child(dataRef, 'boulders')).then((snapshot) => {
      if (snapshot) {
        const data = snapshot.val();
        return { ...noErrorDataObject, data: Object.values<Boulder>(data) };
      } else return handleDataError({ code: "nodata" });
    });
  } catch (err) {
    return handleDataError(err);
  }
};

export const getUsersListFromFirebase = async (): Promise<IUsersListReturn | undefined> => {
  try {
    const dataRef = ref(db);
    return get(child(dataRef, 'users')).then((snapshot) => {
      if (snapshot) {
        const data = snapshot.val();
        return { ...noErrorDataObject, data: Object.values(data) };
      } else return {data: [], error: true, code: 'userListError'};
    });
  } catch (err) {
    // return handleDataError(err);
  }
};