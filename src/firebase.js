// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, signInWithEmailAndPassword } from "firebase/auth";
import  Swal  from 'sweetalert2';

const firebaseConfig = {
  apiKey: "AIzaSyB_G0huWbTLdZw2rw0qCvrXb1OT5-t_juM",
  authDomain: "my-app-9a9e4.firebaseapp.com",
  projectId: "my-app-9a9e4",
  storageBucket: "my-app-9a9e4.appspot.com",
  messagingSenderId: "712589077949",
  appId: "1:712589077949:web:0dd18ea2599f0e3f5b36d4",
  measurementId: "G-84MQYYZVER"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export { auth };

//SIGN IN 

export async function signIn(email, password){
  const auth=getAuth();
  const res= signInWithEmailAndPassword(auth, email,password)
  .then((userCredential) => {
    const user =userCredential.user;
    
Swal.fire({
  title:"Hello User :) ",
  icon:"success",
  showConfirmButton:false,
  timer:2000,

});
return user;
  }) 


  .catch((err)=>{
    const errorCode =err.code;
    // const errorMessage=err.message;
    const errorMessage ="Data is invalid , Try Again";

    Swal.fire({
      title:"Error",
      icon:"error",
      showConfirmButton:"OK",
      text:errorMessage,
    
    });
console.log("error code", errorCode);
console.log("error message",errorMessage);

  });
  return res;
}



// SIGN UP 
export async function signUp(email, password){
  const auth=getAuth();
  const res= createUserWithEmailAndPassword(auth, email,password)
  .then((userCredential) => {
    const user =userCredential.user;
Swal.fire({
  title:"Account created successfully",
  icon:"success",
  showConfirmButton:false,
  timer:2000,

});
return user;
  }) 


  .catch((err)=>{
    const errorCode =err.code;
    // const errorMessage=err.message;
const errorMessage ="Data is invalid , Try Again";
    Swal.fire({
      title:"Error",
      icon:"error",
      showConfirmButton:"OK",
      text:errorMessage,
    
    });
console.log("error code", errorCode);
console.log("error message",errorMessage);

  });
  return res;
}


