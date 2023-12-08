import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDVv3TsOtGzlDIeVzf84q_xQgOSorQIsno",
  authDomain: "reacttpfinal-8408d.firebaseapp.com",
  projectId: "reacttpfinal-8408d",
  storageBucket: "reacttpfinal-8408d.appspot.com",
  messagingSenderId: "1008396852461",
  appId: "1:1008396852461:web:a70197fc6aab89f29b40e4"
};

const app = initializeApp(firebaseConfig);

export const db = getFirestore (app)    