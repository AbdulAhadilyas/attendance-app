import React, { useState, useEffect } from 'react'
import "./Home.css"
import { query, collection, onSnapshot, orderBy, getFirestore } from "firebase/firestore";

export default function Home() {
    const [studnetsData, setStudentsData] = useState([])


    const db = getFirestore();

    useEffect(() => {
        let unsubscribe = null;
        const getRealtimeData = async () => {
            const q = query(collection(db, "Students"));
            unsubscribe = onSnapshot(q, (querySnapshot) => {
                const posts = [];
                querySnapshot.forEach((doc) => {
                    posts.unshift({ id: doc.id, ...doc.data() });
                });
                setStudentsData([...posts, posts])
            });
        }
        getRealtimeData();

    }, [])



    console.log("posts: ", studnetsData);
    return (
        <div>
            <div className="dashboard">
                <div className="dashbard-item">
                    <div className="dash-heading">
                        <h2>Students</h2>
                    </div>


                    <table>
                        <thead>
                            <tr>
                                <th scope="col">Student</th>
                                <th scope="col">Class</th>
                                <th scope="col">Roll Number</th>
                                <th scope="col">Teacher name</th>
                            </tr>
                        </thead>
                        <tbody>
                            {studnetsData.map((data, i) => (<tr key={i} >
                                <td>{data?.name}</td>
                                <td></td>
                                <td>{data?.RollNumber}</td>
                                <td>{data?.Class}</td>
                            </tr>))}
                        </tbody>
                    </table>


                </div>
            </div>
        </div>
    )
}
