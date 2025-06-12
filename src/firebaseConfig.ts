import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyADUDs86ziLXk4zQNDP9thVPKwu5yVGEgY",
  authDomain: "proyectoau-2fddb.firebaseapp.com",
  projectId: "proyectoau-2fddb",
  storageBucket: "proyectoau-2fddb.appspot.com",
  messagingSenderId: "83547391079",
  appId: "1:83547391079:web:1499d404908511d9f700c2",
  measurementId: "G-FC7TNE1GHJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

 import { getFirestore } from "firebase/firestore";

export const db = getFirestore(app);


