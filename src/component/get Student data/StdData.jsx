import React from 'react'
import "./StdData.css"

export default function StdData() {
  return (
    <div>
         <div className="search-std">
          <div className="inputBox">
            <div className="std-input-box">
              <input type="text" />
            </div>
            <div className="std-btn">
              <button>Search</button>
            </div>
          </div>

          <div className="id-card">
            <div className="id-box">
              <div className="id-card-logo">
                <div className="id-img">
                  <img src="./Capture.PNG" alt="" />
                </div>
              </div>
              <div className="std-image-center">
                <div className="std-image">
                  <img
                    src="https://avatars.githubusercontent.com/u/99830052?v=4"
                    alt=""
                    width="140"
                  />
                </div>
              </div>
              <div className="std-data">
                <div className="std-name">
                  <h3>Abdul Ahad</h3>
                </div>
              </div>
              <div className="id-card-footer">
                <div className="std-roll-no">
                  <div className="id-cur">
                    <span>KH014902733</span>
                  </div>
                </div>
                <div className="cores-name">
                  <span>Web And App</span>
                </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  )
}
