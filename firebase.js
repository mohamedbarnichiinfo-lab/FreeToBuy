import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCBHyX-JbwxPj8AoTEXICyAEv5UpFDpaCU",
  authDomain: "freetobuy-68610.firebaseapp.com",
  projectId: "freetobuy-68610",
  storageBucket: "freetobuy-68610.firebasestorage.app",
  messagingSenderId: "219185353738",
  appId: "1:219185353738:web:722f5a601cf63faddcfbf3",
  measurementId: "G-003HCC3MQ8"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);

// Google Sign-In function
export async function loginWithGoogle() {
  try {
    const result = await signInWithPopup(auth, new GoogleAuthProvider());
    console.log("Firebase Auth Google Login SUCCESS. User Info:", result.user);
    return result.user;
  } catch (error) {
    console.error("Firebase Auth Google Login FAILED:", error);
    throw error;
  }
}

export default app;
