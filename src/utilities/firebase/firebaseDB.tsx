import { ref, set, get, child } from "firebase/database";
import { Boulder } from "../../state/Boulder";
import { noErrorDataObject } from "../constants";
import { IUserToSave, EDataTypes, IFirebaseReturn, IUsersListReturn } from "../types";
import { handleDataError } from "./firebaseErrorHandlers";
import { db } from "./firebaseInit";

export const postToFirebase = async (
    dataToSave: Boulder | IUserToSave | null,
    dataType: EDataTypes
  ): Promise<IFirebaseReturn> => {
    try {
      if (dataToSave) {
        await set(ref(db, `${dataType}/${dataToSave.uid}`), dataToSave);
      }
      return { ...noErrorDataObject };
    } catch (err) {
      console.log(err);
      return handleDataError(err);
    }
  };
  
  export const getBouldersFromFirebase = async (): Promise<IFirebaseReturn> => {
    try {
      const dataRef = ref(db);
      return get(child(dataRef, "boulders")).then((snapshot) => {
        if (snapshot) {
          const data = snapshot.val();
          return { ...noErrorDataObject, data: Object.values<Boulder>(data) };
        } else return handleDataError({ code: "nodata" });
      });
    } catch (err) {
      return handleDataError(err);
    }
  };
  
  export const getUsersListFromFirebase = async (): Promise<
    IUsersListReturn | undefined
  > => {
    try {
      const dataRef = ref(db);
      return get(child(dataRef, "users")).then((snapshot) => {
        if (snapshot) {
          const data = snapshot.val();
          return data
            ? { ...noErrorDataObject, data: Object.values(data) }
            : { ...noErrorDataObject, data: [] };
        } else return { data: [], error: true, code: "userListError" };
      });
    } catch (err) {
      // return handleDataError(err);
    }
  };