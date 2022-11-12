import React from 'react';

import { getAuth, signOut } from "firebase/auth";
import "./dashBoard.css"

const Dashbord = () => {


    const logOut = () => {
        const auth = getAuth();
        signOut(auth).then(() => {
            // Sign-out successful.
            console.log("logout")
        }).catch((error) => {
            // An error happened.
            console.log("failed")
        });
    }
    

    return (
        <aside>
            
            
        </aside>
    );
}

export default Dashbord;
