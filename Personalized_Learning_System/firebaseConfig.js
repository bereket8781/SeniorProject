import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSuXK7VMLBFQE50iGV5UWHeFniVUN4ud8",
  authDomain: "personalized-learning-sy-3bbe2.firebaseapp.com",
  projectId: "personalized-learning-sy-3bbe2",
  storageBucket: "personalized-learning-sy-3bbe2.firebasestorage.app",
  messagingSenderId: "434263860880",
  appId: "1:434263860880:web:158e8a85760237bce8da15",
  measurementId: "G-85FN2HN1GK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);

export { db, auth, storage };