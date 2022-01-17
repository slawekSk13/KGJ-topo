import { updateProfile } from "firebase/auth";
import {
    getDownloadURL,
    ref,
    uploadBytes,
  } from "firebase/storage";
import { IUserToSave, EDataTypes } from "../types";
import { postToFirebase } from "./firebaseDB";
import { handleUserError } from "./firebaseErrorHandlers";
import { auth, storage } from "./firebaseInit";

  export const uploadProfileImage = async (file: File, userUid: string) => {
    try {
      const fileExtension = file.name.split(".");
      const profilePictureRef = ref(
        storage,
        `profileImages/${userUid}.${fileExtension[fileExtension.length - 1]}`
      );
      uploadBytes(profilePictureRef, file).then((snapshot) =>
        console.log(snapshot)
      );
      return await getDownloadURL(
        ref(
          storage,
          `profileImages/${userUid}.${fileExtension[fileExtension.length - 1]}`
        )
      );
    } catch (err) {
      console.log(err);
      return "";
    }
  };

  export const updateUserProfile = async (userToSave: IUserToSave) => {
    try {
      if (auth.currentUser) {
        await postToFirebase(userToSave, EDataTypes.USERS);
        await updateProfile(auth.currentUser, {
          displayName: userToSave.displayName,
          photoURL: userToSave.photoURL,
        });
      }
    } catch (err) {
      return handleUserError(err);
    }
  };