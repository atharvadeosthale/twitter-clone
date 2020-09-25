import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBK3tzEtTIeWpsxDWFlq_BC9wU32bZqpsM",
  authDomain: "twitter-clone-c4529.firebaseapp.com",
  databaseURL: "https://twitter-clone-c4529.firebaseio.com",
  projectId: "twitter-clone-c4529",
  storageBucket: "twitter-clone-c4529.appspot.com",
  messagingSenderId: "906315159552",
  appId: "1:906315159552:web:7d240209f014673e0f20e5",
  measurementId: "G-4C5NNW6LHV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
export default db;
