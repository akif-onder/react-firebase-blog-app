
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyCpHtq_vt7vF2dYrGEoMWN51faGNCrN7tg",
  authDomain: "blog-app-6847b.firebaseapp.com",
  projectId: "blog-app-6847b",
  storageBucket: "blog-app-6847b.appspot.com",
  messagingSenderId: "183923622745",
  appId: "1:183923622745:web:c703229e54257a47840248"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();