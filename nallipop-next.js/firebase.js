import firebase from 'firebase/app';
import 'firebase/storage';
import { initializeApp } from 'firebase/app';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
    apiKey: "AIzaSyD_5n4llu6-zkEf-LwPRp7wZwidE_3CxdA",
    authDomain: "nallipop-2b0a3.firebaseapp.com",
    projectId: "nallipop-2b0a3",
    storageBucket: "nallipop-2b0a3.appspot.com",
    messagingSenderId: "566282488335",
    appId: "1:566282488335:web:63c2dbedc6922c4d63317a",
    measurementId: "G-X2G00RK65P"
};
const app = initializeApp(firebaseConfig);
const storage = getStorage(app);


export default storage;
