import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAZVaMu6MWrAT7tEryhvMvfh3WGiN8EoDI",
  authDomain: "carizabd.firebaseapp.com",
  projectId: "carizabd",
  storageBucket: "carizabd.appspot.com",
  messagingSenderId: "428310930155",
  appId: "1:428310930155:web:962000508df9eaf48854ae"
};

const app = initializeApp(firebaseConfig);
const auth=getAuth(app)
export default auth;