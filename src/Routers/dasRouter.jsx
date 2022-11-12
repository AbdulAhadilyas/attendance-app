import React from 'react';
import Dashbord from '../pages/dashboard/Dashbord.jsx';
import { Route, Routes,  } from 'react-router-dom';
import StudentForm from '../component/student from/studentform.jsx';

const DasRouters = () => {
    return (
        <Routes>
             <Route path="/" element={<Dashbord/>} />
             <Route path="/student" element={<StudentForm/>} />
        </Routes>
    );
}
export default DasRouters;
