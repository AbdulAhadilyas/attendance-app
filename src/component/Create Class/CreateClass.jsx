import React from 'react'
import "./CreateClass.css"
export default function CreateClass() {
    return (
        <div> <div className="box">

            <div className="box1">
                <div className="form-heading">
                    <h2>Create Class</h2>
                </div>
                <div className="form-element">
                    <div className="form">
                        <form action="">
                            <div className="input">
                                <div className="input-lable">
                                    <label htmlFor="name">Teacher Name</label>
                                </div>
                                <div className="input-center">
                                    <div className="input-center">
                                        <input type="text" id="name" />
                                    </div>
                                </div>
                            </div>
                            <div className="input">
                                <div className="input-lable">
                                    <label htmlFor="name">Course Name</label>
                                </div>
                                <div className="input-center">
                                    <input type="text" id="name" />
                                </div>
                            </div>
                            <div className="input">
                                <div className="input-lable">
                                    <label htmlFor="name">Batch Name</label>
                                </div>
                                <div className="input-center">
                                    <input type="text" id="name" />
                                </div>
                            </div>
                            <div className="input">
                                <div className="input-lable">
                                    <label htmlFor="name">Section name</label>
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
                                    <option value="">NWf</option>
                                    <option value="">TTS</option>
                                    <option value="">Weekend</option>
                                </select>
                            </div>
                            <div className="form-btn">
                                <button>Create Class</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div> </div>
        </div>
    )
}
