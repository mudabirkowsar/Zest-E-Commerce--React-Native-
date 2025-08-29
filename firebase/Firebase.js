// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBFMSsHZFeRl2s-KLMDecSZXp_tNg3Y3hQ",
    authDomain: "zest-a3a70.firebaseapp.com",
    projectId: "zest-a3a70",
    storageBucket: "zest-a3a70.firebasestorage.app",
    messagingSenderId: "240037560401",
    appId: "1:240037560401:web:988091ae671bcf79ffb870"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
})

