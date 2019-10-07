import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyBB3gXyBnS_wJreVM6MI6r24WfbOkNrUCg",
  authDomain: "to-do-ec2b8.firebaseapp.com",
  databaseURL: "https://to-do-ec2b8.firebaseio.com",
  projectId: "to-do-ec2b8",
  storageBucket: "to-do-ec2b8.appspot.com",
  messagingSenderId: "480191809182",
  appId: "1:480191809182:web:b2ce0ca56a17e2b59d9d8f"
};

firebase.initializeApp(config);

export const auth = firebase.auth();

export const db = firebase.firestore();
