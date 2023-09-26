import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './main.css'
import { ChakraProvider } from '@chakra-ui/react'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyALLS8rdCh_YummLHT7MInz-_zl7Z5wpCQ",
  authDomain: "comision-react55750.firebaseapp.com",
  projectId: "comision-react55750",
  storageBucket: "comision-react55750.appspot.com",
  messagingSenderId: "443807256734",
  appId: "1:443807256734:web:f4d4df59d170ce60cdeb8f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
    <ChakraProvider>
        <App />
    </ChakraProvider>
)
