import React, { useState, useEffect } from 'react'
import "./StudentForm.css"
import { query, collection, onSnapshot, orderBy, getFirestore, doc, setDoc, set } from "firebase/firestore";
export default function StudentForm() {
    const [studnets, setStudents] = useState(
        {
            name: "",
            fatherName: "",
            RollNumber: "",
            contactNumber: "",
            CNICNumber: "",
            Class: "",
        }
    )
    const [stdImage, setStdImage] = useState(null)

    const db = getFirestore();

    let name, value;
    const getInput = (event) => {
        name = event.target.name;
        value = event.target.value;
        setStudents({ ...studnets, [name]: value })
    }
    const saveData = async (event) => {
        event.preventDefault()
        console.log(studnets)
        try {
            const docRef = await setDoc(doc(db, "Students", studnets.RollNumber), studnets);
            console.log("Document written with ID: ", docRef);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
        setStudents({
            name: "",
            fatherName: "",
            RollNumber: "",
            contactNumber: "",
            CNICNumber: "",
            Class: "",
            TeacherName: "",
        })
    }


    const [teacherData, setTeacherData] = useState([])


    useEffect(() => {
        let unsubscribe = null;
        const getRealtimeData = async () => {
            const q = query(collection(db, "CreateClass"));
            unsubscribe = onSnapshot(q, (querySnapshot) => {
                const posts = [];
                querySnapshot.forEach((doc) => {
                    posts.unshift({ id: doc.id, ...doc.data() });
                });
                setTeacherData([...posts, posts])
            });
        }
        getRealtimeData();
        console.log(teacherData)
    }, [])



    return (
        <div> <div className="box">

            <div className="box1">
                <div className="form-heading">
                    <h2>Add Student</h2>
                </div>
                <div className="form-element">
                    <div className="form">
                        <form onSubmit={saveData}>
                            <div className="input">
                                <div className="input-lable">
                                    <label htmlFor="name">Name</label>
                                </div>
                                <div className="input-center">
                                    <div className="input-center">
                                        <input type="text" name='name' value={studnets.name} onChange={getInput} id="name" placeholder='Enter your name ' />
                                    </div>
                                </div>
                            </div>
                            <div className="input">
                                <div className="input-lable">
                                    <label htmlFor="name">Father Name</label>
                                </div>
                                <div className="input-center">
                                    <input type="text" name='fatherName' value={studnets.fatherName} onChange={getInput} id="name" placeholder='Enter your Father name ' />
                                </div>
                            </div>
                            <div className="input">
                                <div className="input-lable">
                                    <label htmlFor="name">Roll Number</label>
                                </div>
                                <div className="input-center">
                                    <input type="number" name='RollNumber' value={studnets.RollNumber} onChange={getInput} id="name" placeholder='Enter your Roll number ' />
                                </div>
                            </div>
                            <div className="input">
                                <div className="input-lable">
                                    <label htmlFor="name">Contact Number</label>
                                </div>
                                <div className="input-center">
                                    <input type="text" name='contactNumber' value={studnets.contactNumber} onChange={getInput} id="name" placeholder='Enter your Contact number ' />
                                </div>
                            </div>
                            <div className="input">
                                <div className="input-lable">
                                    <label htmlFor="name">CNIC Number</label>
                                </div>
                                <div className="input-center">
                                    <input type="text" name='CNICNumber' value={studnets.CNICNumber} onChange={getInput} id="name" placeholder='Enter your CNIC Number ' />
                                </div>
                            </div>
                            <div className="input">
                                <div className="input-lable">
                                    <label htmlFor="name">Teacher Name</label>
                                </div>
                                <select name="TeacherName" value={studnets.TeacherName} onChange={getInput} placeholder="Sort Data"  >
                                    <option value="" disabled selected>Choose</option>
                                    {teacherData.map((teacherName, i) =>
                                        <option value={teacherName.id} key={i}>{teacherName.id}</option>)}
                                </select>
                            </div>
                            <div className="input">
                                <div className="input-lable">
                                    <label htmlFor="name">Course</label>
                                </div>
                                <select name="Class" value={studnets.Class} onChange={getInput} placeholder="Sort Data"  >
                                    <option value="" disabled selected>Choose Course</option>
                                    {teacherData.map((teacherName, i) =>
                                        <option value={teacherName.CourseName} key={i}>{teacherName.CourseName}</option>)}
                                </select>
                            </div>

                            <div className="input">
                                <div className="input-lable">
                                    <label htmlFor="name">Student Image</label>
                                </div>
                                <div className="input-center">
                                    <input type="file" name='CNICNumber' onChange={(e) => setStdImage(e.target.files[0])} class="custom-file-input" />
                                </div>
                            </div>
                            <div className="form-btn">  
                                <button>Add Student</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div> </div>
        </div>
    )
}
