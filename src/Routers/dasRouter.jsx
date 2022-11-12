import React from 'react';
import Dashbord from '../pages/dashboard/Dashbord.jsx';
import { Route, Routes,  } from 'react-router-dom';
import StudentForm from '../component/student from/studentform.jsx';
import CreatClass from '../component/create class/CreatClass.jsx';

const DasRouters = () => {
    return (
        <Routes>
             <Route path="/student" element={<StudentForm/>} />
             <Route path="/createclass" element={<CreatClass/>} />
        </Routes>
    );
}
export default DasRouters;
