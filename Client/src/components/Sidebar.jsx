import React from 'react';
import '../styles/Sidebar.css';
import Axios from 'axios';
import { useHistory, NavLink } from 'react-router-dom';
import { MdDashboard } from 'react-icons/md';
import { FaChalkboardTeacher, FaUserGraduate } from 'react-icons/fa';
import { RiMoneyEuroCircleFill } from 'react-icons/ri';
import { GoSettings } from 'react-icons/go';
import { CgLogOut } from 'react-icons/cg';
import { IoIosPaper } from 'react-icons/io'
import logo from '../assets/images/logo-white.png'

function Sidebar() {

    let history = useHistory();

    function logoutClick() {
        Axios.post("http://localhost:3001/logout")
        history.go("/login");
    }

    return (
        < div className="sidebar" >
            <div className="logo__container">
                <img src={logo} alt="" />
                <div className="logo__name">
                    Space4Staff
                </div>
            </div>
            <ul className="menu">
                <li className="active">
                    <NavLink to="/home/dashboard">
                        <div className="menu__icon">
                            <MdDashboard />
                        </div>
                        Dashboard
                    </NavLink >
                </li>
                <li>
                    <NavLink to="/home/students" >
                        <div className="menu__icon">
                            <FaUserGraduate />
                        </div>
                        Students
                    </NavLink >
                </li>
                <li >
                    <NavLink to="/home/teachers">
                        <div className="menu__icon">
                            <FaChalkboardTeacher />
                        </div>
                        Teachers
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/home/studentssss">
                        <div className="menu__icon">
                            <IoIosPaper />
                        </div>
                        Grades
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/home/studentsss">
                        <div className="menu__icon">
                            <RiMoneyEuroCircleFill />
                        </div>
                        Payment
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/home/setting">
                        <div className="menu__icon">
                            <GoSettings />
                        </div>
                        Settings
                    </NavLink>
                </li>
                <li onClick={logoutClick}>
                    <NavLink to="/home/studentss">
                        <div className="menu__icon">
                            <CgLogOut />
                        </div>
                        Logout
                    </NavLink>
                </li>
            </ul>
            <div className="copyRight">
                <div>
                    <span>Space4Staff</span> <br />
                    © 2021 All Rights Reserved
                </div>
            </div>
        </div >
    )
}

export default Sidebar
