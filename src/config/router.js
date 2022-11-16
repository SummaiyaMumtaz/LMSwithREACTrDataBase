import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
// import Form from "../screen/user/UserForm";
// import Signup from "../screen/user/signup";
// import UserForm from "../screen/user/Form";
import Home from "../screen/home";
import Admin from "../screen/admin";
import StudentProfile from "../screen/user/profile";
import Login from "../screen/login"
import UserForm from "../screen/user/Form";
export default function RouterApp(){

    return(
  <Router>
    <Routes>
        {/* <Route path="/" element={<Login/>}></Route> */}
        <Route path="login" element={<Login/>}></Route>
        <Route path="/" element={<UserForm/>}></Route>
        <Route path="/admin/*" element={<Admin/>}></Route>
        <Route path="StudentProfile" element={<StudentProfile/>}></Route>
        {/* <Route path="login" element={<Login/>}></Route> */}
        {/* <Route path="" element={}></Route> */}
    </Routes>

  </Router>      
    )
}