import {
    sendPasswordResetEmail,
    signInWithEmailAndPassword,
    signOut,
  } from "firebase/auth";
import { noErrorUserObject } from "../constants";
import { ILoginParameters, IUserReturn } from "../types";
import { getUsersListFromFirebase } from "./firebaseDB";
import { handleUserError } from "./firebaseErrorHandlers";
import { auth } from "./firebaseInit";
import { updateUserProfile } from "./firebaseStorage";

  export const handleLogin = async ({
    email,
    password,
  }: ILoginParameters): Promise<IUserReturn> => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
      const user = auth.currentUser;
      const users = await getUsersListFromFirebase();
      if (user) {
        const { uid, displayName, photoURL, email } = user;
        let userShortenedEmail: string = "";
        if (email) {
          userShortenedEmail =
            email?.split("@")[0].length > email?.split(".")[0].length
              ? email?.split(".")[0]
              : email?.split("@")[0];
        }
        if (
          users &&
          users.data.filter((el: any) => el.uid.toString() === uid).length < 1
        ) {
          const userToSave = {
            uid,
            displayName: displayName || userShortenedEmail,
            photoURL: photoURL || "/logo512.png",
          };
          updateUserProfile(userToSave);
        } else {
          console.log("already in db");
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