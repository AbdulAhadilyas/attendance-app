import React from 'react'
import DasRouters from '../../Routers/DasRouter'
import StudentForm from '../Add Student Form/StudentForm'
import { Link, NavLink, useLocation } from 'react-router-dom'
import "./DashBoard.css"

export default function DashBoard() {
  const location = useLocation();

  //destructuring pathname from location
  const { pathname } = location;

  //Javascript split method to get the name of the path in array
  const splitLocation = pathname;
  return (
    <div>
      <nav>
        <div className="topnav">
          <div className="logo">
            <img
              src="https://saylaniwelfare.com/static/media/logo_saylaniwelfare.22bf709605809177256c.png"
              alt="logo"
              width="150"
            />
          </div>
          <ul>
            <li className="image-flex-aling">
              <div className="image-box">
                <img
                  src="https://www.knowmuhammad.org/img/noavatarn.png"
                  alt=""
                />
              </div>
            </li>
            <li><button className="button-87" role="button">Log Out</button></li>
          </ul>
        </div>
      </nav>
      <div className="flex">
        {/* <aside>
          <div className="box-side">
            <div className="list">
              <ul>
                <li>
                  <Link to={"/"}>
                    <div className="hover-elemnt">
                      <i className="fa fa-dashboard"></i>
                      <div className="list-iteam">Dash board</div>
                    </div>
                  </Link>
                </li>
                <li>
                <Link to={"/"}>
                  <div className="hover-elemnt">
                    <i className="fa-solid fa-chalkboard-user"></i>
                    <div className="list-iteam">Create Class</div>
                  </div>
                  </Link>
                </li>
                <li>
                <Link to={"/student"}>
                  <div className="hover-elemnt">
                    <i className="fa-solid fa-graduation-cap"></i>
                    <div className="list-iteam">Add student</div>
                  </div>
                  </Link>
                </li>
                <li>
                <Link to={"/student"}>
                  <div className="hover-elemnt">
                    <i className="fa-solid fa-clipboard-user"></i>
                    <div className="list-iteam">Mark Attendance</div>
                  </div>
                  </Link> 
                </li>
                <li>
                <Link to={"/student/data"}>
                  <div className="hover-elemnt">
                    <i className="fa-solid fa-database"></i>
                    <div className="list-iteam">Get Student Data</div>
                  </div>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </aside> */}
        <div className="app">
          <div className="menu-toggle is-active">
            <div className="hamburger">
              <span></span>
            </div>
          </div>

          <aside className="sidebar ">
            <div className="over">
              <div className="head-box">
                <h3>Dashboard</h3>
              </div>
              <nav className="menu ">
                <Link to={"/"} className={splitLocation === "/" ? "menu-item is-active" : "menu-item"}>
                  Home
                </Link>
                <Link to={"/student"} className={splitLocation === "/student" ? "menu-item is-active" : "menu-item "}>
                  Add student
                </Link>
                <Link to={"/student/data"} className={splitLocation === "/student/data" ? "menu-item is-active" : "menu-item "}>
                  Get Student Data
                </Link>
                <Link to={"/class"} className={splitLocation === "/class" ? "menu-item is-active" : "menu-item "}>
                  Create Class
                </Link>
                <Link className="menu-item">
                  Contact
                </Link>
                <Link className="menu-item">
                  Contact
                </Link>
              </nav>
            </div>
          </aside>

        </div>


        <section>
          <DasRouters />
        </section>
      </div>

    </div>
  )
}
