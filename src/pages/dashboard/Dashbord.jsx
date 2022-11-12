import React from 'react';
import { getAuth, signOut } from "firebase/auth";
import "./dashBoard.css"
import { Link ,Route,Router } from 'react-router-dom';
import StudentForm from '../../component/student from/studentform';
import DasRouters from '../../Routers/dasRouter';
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
        <div className="dash-flex">
    <>
    
    <div class="wrapper">
        <aside>
        <div class="sidebar">
            <div className='side-menu'>
                <div className='list'>
                    <Link to={"/student"}>
                    <li>Add Student</li>
                    </Link>
                </div>
                <div className='list'>
                    <li>class</li>
                </div>
                <div className='list'>
                    <li>get Student data</li>
                </div>
            </div>
            </div>
        </aside>
        </div>
        
        <div className='main'>
        <DasRouters/></div>
        </>
        </div>
    );
}

export default Dashbord;
