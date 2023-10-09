import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAPAcuc4v7oa8RZqk7pPdCWgMXyqqoY91g",
  authDomain: "assignment-9-bb560.firebaseapp.com",
  projectId: "assignment-9-bb560",
  storageBucket: "assignment-9-bb560.appspot.com",
  messagingSenderId: "489041223317",
  appId: "1:489041223317:web:75d341b3a0ce1d03da059c",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
