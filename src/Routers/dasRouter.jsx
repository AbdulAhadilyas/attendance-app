import React from 'react';
import { Route, Routes,  } from 'react-router-dom';
import StudentForm from '../component/Add Student Form/StudentForm';
import CreateClass from '../component/Create Class/CreateClass';
import StdData from '../component/get Student data/StdData';
import Home from '../component/home/Home';



const DasRouters = () => {
    return (
        <Routes>
             <Route path="/" element={<Home/>} />
             <Route path="/student" element={<StudentForm/>} />
             <Route path="/student/data" element={<StdData/>} />
             <Route path="/class" element={<CreateClass/>} />
        </Routes>
    );
}
export default DasRouters;
