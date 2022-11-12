import React from 'react';

import { getAuth, signOut } from "firebase/auth";

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
        <div>
            
            <button onClick={logOut}>logOut</button>
        </div>

    );
}

export default Dashbord;
