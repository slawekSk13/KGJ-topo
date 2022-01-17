import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";
import { firebaseConfig } from "./firebaseconfig";

initializeApp(firebaseConfig);
export const db = getDatabase();
export const auth = getAuth();
export const storage = getStorage();