import './App.css';
import React from 'react';
import Form from './component/Form/form';
import { useState } from "react"
import { getAuth,signInWithEmailAndPassword ,signOut} from "firebase/auth";
import app from "./fireBaseCon/fireBase"

function App() {
  const [Email, setEmail] = useState("");
  const [Pass, setPass] = useState("");

  const submitHandler = (e) =>{
    e.preventDefault()
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, Email, Pass)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("login")
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log( error.message)
      });
      console.log(Email)
      console.log(Pass)
  }
  
  return (
    <div>
      <Form
      getEmail={(e)=>setEmail(e.target.value)}
      getPass={(e)=>setPass(e.target.value)}
      submitForm={submitHandler}

      />
    </div>
  );
}

export default App;
