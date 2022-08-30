// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:process.env.REACT_APP_apiKey,
  authDomain:process.env.REACT_APP_authDomain,
  projectId:process.env.REACT_APP_projectId,
  storageBucket:process.env.REACT_APP_storageBucket,
  messagingSenderId:process.env.REACT_APP_messagingSenderId,
  appId:process.env.REACT_APP_appId
};
// const firebaseConfig = {
//   apiKey: "AIzaSyBle-aoWlpSJSQ98nzyzVKFHdbEpT7pkSQ",
//   authDomain: "genius-car-services-d0efa.firebaseapp.com",
//   projectId: "genius-car-services-d0efa",
//   storageBucket: "genius-car-services-d0efa.appspot.com",
//   messagingSenderId: "576088344026",
//   appId: "1:576088344026:web:3246ace649ed37df68ace3"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;