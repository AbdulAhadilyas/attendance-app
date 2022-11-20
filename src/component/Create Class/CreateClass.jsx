import React, { useState } from "react";
import "./CreateClass.css";
import {
    getFirestore,
    doc,
    setDoc,
} from "firebase/firestore";
import TextField from '@mui/material/TextField';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker, } from '@mui/x-date-pickers/TimePicker';
import moment from 'moment';



const db = getFirestore();

export default function CreateClass() {

    const [classStart, setClassStart] = useState(null);
    const [classEnd, setClassEnd] = useState(null);

    const [createClass, setCreateClass] = useState({
        SectionName: "",
        TeacherName: "",
        ClassSchedule: "",
        BatchNumber: "",
        CourseName: "",
    });


    let name, value;
    const getInput = (event) => {
        name = event.target.name;
        value = event.target.value;
        setCreateClass({ ...createClass, [name]: value });
    };
    const saveData = async (event) => {
        event.preventDefault();
        console.log(createClass);
        try {
            const docRef = await setDoc(
                doc(db, "CreateClass", createClass.TeacherName),
                createClass
            );
            console.log("Document written with ID: ", docRef);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
        setCreateClass({
            SectionName: "",
            TeacherName: "",
            ClassStart:"" ,
            ClassEnd: "",
            ClassSchedule: "",
            BatchNumber: "",
            CourseName: "",
        });
        
        console.log(classStart);
        console.log(classEnd)
    };



    return (
        <div>
            <div className="box">
                <div className="box1">
                    <div className="form-heading">
                        <h2>Create Class</h2>
                    </div>
                    <div className="form-element">
                        <div className="form">
                            <form onSubmit={saveData}>
                                <div className="input">
                                    <div className="input-lable">
                                        <label htmlFor="name">Teacher</label>
                                    </div>
                                    <div className="input-center">
                                        <div className="input-center">
                                            <input
                                                type="text"
                                                name="TeacherName"
                                                value={createClass.TeacherName}
                                                onChange={getInput}
                                                id="name"
                                                placeholder="Enter your Father name "
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="input">
                                    <div className="input-lable">
                                        <label htmlFor="name">Course Name</label>
                                    </div>
                                    <div className="input-center">
                                        <input
                                            type="text"
                                            name="CourseName"
                                            value={createClass.CourseName}
                                            onChange={getInput}
                                            id="name"
                                            placeholder="Enter your Father name "
                                        />
                                    </div>
                                </div>
                                <div className="input">
                                    <div className="input-lable">
                                        <label htmlFor="name">Class Schedule </label>
                                    </div>
                                    <div className="input-center">
                                        <input
                                            type="text"
                                            name="ClassSchedule"
                                            value={createClass.CourseNameSchedule}
                                            onChange={getInput}
                                            id="name"
                                            placeholder="Enter your Contact number "
                                        />
                                    </div>
                                </div>
                                <div className="input">
                                    <div className="input-lable">
                                        <label htmlFor="name">Section Name </label>
                                    </div>
                                    <div className="input-center">
                                        <input
                                            type="text"
                                            name="SectionName"
                                            value={createClass.SectionName}
                                            onChange={getInput}
                                            id="name"
                                            placeholder="Enter your name "
                                        />
                                    </div>
                                </div>
                                <div className="input">
                                    <div className="input-lable">
                                        <label htmlFor="name">Batch Number </label>
                                    </div>
                                    <div className="input-center">
                                        <input
                                            type="number"
                                            name="BatchNumber"
                                            value={createClass.BatchNumber}
                                            onChange={getInput}
                                            id="name"
                                            placeholder="Enter your CNIC Number "
                                        />
                                    </div>
                                </div>
                                <div className="input">
                                    <div className="input-lable">
                                        <label htmlFor="name">Class Timing </label>
                                    </div>
                                    <div className="input-center">
                                        <div className="time">
                                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                                <div className="time-input">
                                                    <div className="time-input-box">
                                                        <TimePicker
                                                            className={"TimePickerEdit"}
                                                            name="classStart"
                                                            value={classStart}
                                                            onChange={(ClassStart) => {
                                                                let StartTime = ClassStart.$d
                                                                setClassStart(ClassStart)
                                                                setCreateClass({ ...createClass, StartTime});
                                                            }}
                                                            renderInput={(params) => <TextField {...params} />}
                                                        />  
                                                    </div>
                                                    <div className="time-input-box">
                                                        <TimePicker
                                                            className={"TimePickerEdit"}
                                                            value={classEnd}
                                                            onChange={(ClassEnd) => {
                                                                let endTime = ClassEnd.$d
                                                                setCreateClass({ ...createClass, endTime});
                                                                setClassEnd(ClassEnd)
                                                            }}
                                                            renderInput={(params) => <TextField {...params} />}
                                                            
                                                        />
                                                    </div>


                                                </div>


                                            </LocalizationProvider>
                                        </div>
                                    </div>
                                </div>

                                <div className="form-btn">
                                    <button>Add Student</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
