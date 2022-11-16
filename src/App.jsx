import './App.css';
import React from 'react';
import Form from './component/Form/form';
import { useState, useEffect } from "react"
import { getAuth, signInWithEmailAndPassword, signOut, onAuthStateChanged } from "firebase/auth";
import app from "./fireBaseCon/fireBase"
import Dashbord from './component/dashboard/DashBoard';
import { Link, Route, Router } from 'react-router-dom';

function App() {
  const [Email, setEmail] = useState("");
  const [Pass, setPass] = useState("");
  const [isLogin, setIsLogin] = useState(false);

  const submitHandler = (e) => {
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
        console.log(error.message)
      });
    console.log(Email)
    console.log(Pass)
  }

  useEffect(() => {
    const auth = getAuth();
    const unSubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const uid = user.uid;
        setIsLogin(true)
        console.log("user is login", user)
      } else {
        setIsLogin(false)
      }
    });
    return () => {
      unSubscribe()
      console.log("clean up")
    }
  }, [])

  return (
    <div>
      {isLogin ? <Dashbord/>
        : <Form
          getEmail={(e) => setEmail(e.target.value)}
          getPass={(e) => setPass(e.target.value)}
          submitForm={submitHandler}
        />
      }
    </div>
    

    
  );

}

export default App;
