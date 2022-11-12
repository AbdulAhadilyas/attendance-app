import React, { useEffect, useState } from 'react'
import { collection, addDoc,getFirestore } from "firebase/firestore";
export default function CreatClass() {
    const db = getFirestore();
    const [classData , setClassdata] = useState({
        time:"",
        sirName:"",
        Schedule:"",
        sectionName:"",
        courseName:"",
    })

    const createClass = async(e) => {
        e.preventDefault()
        try {
            const docRef = await addDoc(collection(db, classData.sirName), classData);
            console.log("Document written with ID: ", docRef.id);
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }

    let name,value;
    const classAddData = (event)=>{
        name = event.target.name;
        value = event.target.value;

        setClassdata({...classData,[name]:value})

    }
    return (
        <div>
            <form onSubmit={createClass}>
                <input type="text" name='sirName' onChange={classAddData} value={classData.sirName} placeholder="sirname"/>
                <input type="text" name='time' onChange={classAddData} value={classData.time} />
                <input type="text" name='courseName' onChange={classAddData} value={classData.courseName} />
                <input type="text" name='sectionName' onChange={classAddData} value={classData.sectionName} />
                <input type="text" name='Schedule' onChange={classAddData} value={classData.Schedule} />
                <button type="submit">add</button>
            </form>
        </div>
    )
}
