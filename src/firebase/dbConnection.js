import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {

  apiKey: "AIzaSyAYSrGnRT4xH5FsQlcplOgOOjqCVrllizU",

  authDomain: "react62330.firebaseapp.com",

  projectId: "react62330",

  storageBucket: "react62330.appspot.com",

  messagingSenderId: "1077315653629",

  appId: "1:1077315653629:web:01e79b97da3c63e631d394"

};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


