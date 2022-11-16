import React from 'react'
import "./StudentForm.css"

export default function StudentForm() {
    return (
        <div> <div className="box">

            <div className="box1">
                <div className="form-heading">
                    <h2>Add Student</h2>
                </div>
                <div className="form-element">
                    <div className="form">
                        <form action="">
                            <div className="input">
                                <div className="input-lable">
                                    <label htmlFor="name">Name</label>
                                </div>
                                <div className="input-center">
                                    <div className="input-center">
                                        <input type="text" id="name" />
                                    </div>
                                </div>
                            </div>
                            <div className="input">
                                <div className="input-lable">
                                    <label htmlFor="name">Father Name</label>
                                </div>
                                <div className="input-center">
                                    <input type="text" id="name" />
                                </div>
                            </div>
                            <div className="input">
                                <div className="input-lable">
                                    <label htmlFor="name">Roll Number</label>
                                </div>
                                <div className="input-center">
                                    <input type="text" id="name" />
                                </div>
                            </div>
                            <div className="input">
                                <div className="input-lable">
                                    <label htmlFor="name">Contact Number</label>
                                </div>
                                <div className="input-center">
                                    <input type="text" id="name" />
                                </div>
                            </div>
                            <div className="input">
                                <div className="input-lable">
                                    <label htmlFor="name">CNIC Number</label>
                                </div>
                                <div className="input-center">
                                    <input type="text" id="name" />
                                </div>
                            </div>
                            <div className="input">
                                <div className="input-lable">
                                    <label htmlFor="name">Class</label>
                                </div>
                                <select name="" id="">
                                    <option value="">Inzamama malik</option>
                                    <option value="">Inzamama malik</option>
                                    <option value="">Inzamama malik</option>
                                    <option value="">Inzamama malik</option>
                                </select>
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
