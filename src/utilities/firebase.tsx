import { initializeApp } from "firebase/app";
import { firebaseConfig } from "./firebaseconfig";
import { getDatabase, ref, set, get, child } from "firebase/database";
import { Problem } from "../state";

initializeApp(firebaseConfig);
const db = getDatabase();
// const auth = getAuth();

const handleError = (err: any) => {
  return { code: err.code, error: true, data: [] };
};

// const handleRegister = async (email, password) => {
//   try {
//     await createUserWithEmailAndPassword(auth, email, password);
//     sendEmailVerification(auth.currentUser);
//       signOut(auth);
//       return {code: 'email-unverified', error: false}
//   } catch (err) {
//     return handleUserError(err);
//   }
// };

// const handleLogin = async (email, password) => {
//   try {
//     await signInWithEmailAndPassword(auth, email, password);
//     const user = auth.currentUser;
//     if (!auth.currentUser.emailVerified) {
//       signOut(auth);
//       return {code: 'email-unverified', error: true}
//     } else {
//       return user;
//     }
//   } catch (err) {
//     return handleUserError(err);
//   }
// };

// const handleLogout = async () => {
//   try {
//     await signOut(auth);
//     return true;
//   } catch (err) {
//     return handleUserError(err);
//   }
// };

// const handleResetPassword = async (email) => {
//   try {
//     sendPasswordResetEmail(auth, email);
//   } catch (err) {
//     return handleUserError(err);
//   }
// };

// const refreshData = async () => {
//   try {
//     const pastResults = await getFromFirebase("results");
//     const pastPatients = await getFromFirebase("patients");
//     return { pastResults, pastPatients };
//   } catch (err) {
//     return handleUserError(err);
//   }
// };

export const postToFirebase = async (dataToSave: Problem) => {
  try {
    await set(ref(db, `boulders/${dataToSave.id}`), dataToSave);
    return true;
  } catch (err) {
    return handleError(err);
  }
};

export const getFromFirebase = async () => {
  try {
    const dataRef = ref(db);
    return get(child(dataRef, `boulders`)).then((snapshot) => {
      if (snapshot) {
        const data = snapshot.val();
        return {data: Object.values<Problem>(data), error: false, code: ''};
      } else return handleError({code: 'nodata'});
    });
  } catch (err) {
    return handleError(err);
  }
};
