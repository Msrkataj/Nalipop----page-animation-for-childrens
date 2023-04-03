import firebase from 'firebase/app';
import 'firebase/storage';


const firebaseConfig = {
    apiKey: "AIzaSyDv1ZA7gwaT2uHoljkSZ8WupSf-NtyxmXk",
    authDomain: "nallipop-7d9e4.firebaseapp.com",
    projectId: "nallipop-7d9e4",
    storageBucket: "nallipop-7d9e4.appspot.com",
    messagingSenderId: "829834243946",
    appId: "1:829834243946:web:df72e40549e9605afeff13",
    measurementId: "G-NN5Q100TDG"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
}

const storage = firebase.storage();


export default storage;
