import React from "react";
import '../styles/Dashboard.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Redirect } from 'react-router'
import { useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import DashboardPage from './DashboardPage'
import StudentsPage from './StudentsPage'
import AddStudentPage from "./AddStudentPage";
import TeachersPage from "./TeachersPage";
import UpdateStudents from "./UpdateStudents"
import AddTeacherPage from "./AddTeacherPage"
import SettingPage from "./SettingPage";

function Dashboard({ loggedIn }) {

    const location = useLocation();

    if (loggedIn || location.loggedIn) {
        return (
            <Router>
                <div className="App">
                    <div className="app__body">
                        <Sidebar />
                        <div className="dashboard-container">
                            <Switch>
                                <Route path="/home/dashboard" component={() => <Navbar navTitle="Dashboard" />}></Route>
                                <Route exact path="/home/students" component={() => <Navbar navTitle="Students" />}></Route>
                                <Route exact path="/home/students/addstudents" component={() => <Navbar navTitle="Students" />}></Route>
                                <Route exact path="/home/students/updateStudents" component={() => <Navbar navTitle="Students" />}></Route>
                                <Route exact path="/home/teachers" component={() => <Navbar navTitle="Teachers" />}></Route>
                                <Route exact path="/home/teachers/addteachers" component={() => <Navbar navTitle="Teachers" />}></Route>
                                <Route exact path="/home/setting" component={() => <Navbar navTitle="Settings" />}></Route>
                            </Switch>
                            <div className="dashboard-body">
                                <Switch>
                                    <Route path="/home/dashboard" component={() => <DashboardPage />}></Route>
                                    <Route exact path="/home/students" component={() => <StudentsPage />}></Route>
                                    <Route exact path="/home/students/addstudents" component={() => <AddStudentPage />}></Route>
                                    <Route exact path="/home/students/updateStudents" component={() => <UpdateStudents />}></Route>
                                    <Route exact path="/home/teachers" component={() => <TeachersPage />}></Route>
                                    <Route exact path="/home/teachers/addteachers" component={() => <AddTeacherPage />}></Route>
                                    <Route exact path="/home/setting" component={() => <SettingPage />}></Route>
                                </Switch>
                            </div>
                        </div>
                    </div>
                </div>
            </Router>
        )
    } else {
        return (
            <Redirect to="/login" />
        )
    }


}

export default Dashboard;