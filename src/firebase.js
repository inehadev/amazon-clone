// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getAuth , createUserWithEmailAndPassword  } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAtXNqlhjuxMVN4wU9KCLTO5egVIdiLBrM",
    authDomain: "clone-c73bf.firebaseapp.com",
    projectId: "clone-c73bf",
    storageBucket: "clone-c73bf.appspot.com",
    messagingSenderId: "697867517250",
    appId: "1:697867517250:web:4ee77362ffe0f00d3edcdb",
    measurementId: "G-378P85FCTE"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp); // Use getAuth() to access Authentication

export{ auth , db};
