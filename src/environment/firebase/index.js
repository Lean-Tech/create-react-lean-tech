import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';
import {firebaseConfig} from "../../utils/Config";

firebase.initializeApp(firebaseConfig);

export const firebaseApp =  firebase;
