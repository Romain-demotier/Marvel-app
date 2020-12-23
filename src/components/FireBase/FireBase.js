import app from "firebase/app";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyBsPySdUdaWFz9ubjToeqfolDtITGFUbys",
    authDomain: "marvel-app-8c133.firebaseapp.com",
    projectId: "marvel-app-8c133",
    storageBucket: "marvel-app-8c133.appspot.com",
    messagingSenderId: "89508601836",
    appId: "1:89508601836:web:ea92c17f0a034461fdeac9"
  };


class FireBase {
    constructor(){
        app.initializeApp(config);
        this.auth = app.auth();
    }
//inscription
signUpUser = (email,password) =>
    this.auth.createUserWithEmailAndPassword(email,password);

//conexion
loginUser = (email,password)=>
    this.auth.signInWithEmailAndPassword(email, password)

//Deconexion
signOutUser = () => this.auth.signOut()



}

export default FireBase;