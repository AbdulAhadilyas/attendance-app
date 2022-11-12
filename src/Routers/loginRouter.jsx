import React from 'react';
import Dashbord from '../pages/dashboard/Dashbord';
import { Route, Routes,  } from 'react-router-dom';
const LoginRouters = () => {
    return (
        <Routes>
            <Route path="/Dashbord" element={<Dashbord/>} />
        </Routes>
    );
}
export default LoginRouters;
