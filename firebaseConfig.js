// Import the required Firebase modules
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your Firebase configuration object
const firebaseConfig = {
    apiKey: "AIzaSyC_O2pBv0Rf6O4eHAd0_7d_rLtP0puct3k",
    database: "https://gillaniautomotors.firebaseapp.com",
    authDomain: "gillaniautomotors.firebaseapp.com",
    projectId: "gillaniautomotors",
    storageBucket: "gillaniautomotors.firebasestorage.app",
    messagingSenderId: "513980410429",
    appId: "1:513980410429:web:aea3d83a69f44f97d91854"
  };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
export const auth = getAuth(app);
export const firestore = getFirestore(app);

export default app;