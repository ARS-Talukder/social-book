import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyDSo7vIyjFAKWInlR_b3CGjAmRGwUZhPt4",
    authDomain: "job-task-9f291.firebaseapp.com",
    databaseURL: "https://job-task-9f291-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "job-task-9f291",
    storageBucket: "job-task-9f291.appspot.com",
    messagingSenderId: "707132390807",
    appId: "1:707132390807:web:d0ad6577538a09077498d2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;