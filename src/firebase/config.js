import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firebase"

const firebaseConfig = {
  apiKey: "AIzaSyAvYThqxkhbBuDYoUkZNNSANttrRhWBSpo",
  authDomain: "miniblog-d7691.firebaseapp.com",
  projectId: "miniblog-d7691",
  storageBucket: "miniblog-d7691.appspot.com",
  messagingSenderId: "597850864460",
  appId: "1:597850864460:web:3f09b7dd49bede14b82de9"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app)

export {db};