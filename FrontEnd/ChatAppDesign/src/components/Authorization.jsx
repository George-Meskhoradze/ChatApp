import React, { useEffect, useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes,
  useLocation,
} from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import MainPage from "./MainPage"
import axios from "axios";

const Authorization = () => {
  const location = useLocation();

  const [active, setActive] = useState("/");

  const showLogin = () => {
    return location.pathname === "/" || location.pathname === "/register";
  };


  return (
    <>
      <div className="login bg w-full h-screen bg-chatapp flex flex-col justify-center items-center">
        <div className="w-[350px] h-[50px] flex">
          {showLogin() && (
            <Link
              to="/"
              className={
                "login flex flex-col justify-center items-center w-6/12 cursor-pointer bg-lightPurple h-[100%] rounded-tl-[6px] transition-all duration-300 ease-in-out hover:bg-[#1f2b45] select-none"
              }
            >
              <h1 className="text-[18px] text-title font-bold">Log In</h1>
            </Link>
          )}
          {showLogin() && (
            <Link
              to="/register"
              className={
                "register flex flex-col justify-center items-center w-6/12 cursor-pointer bg-lightPurple h-[100%] rounded-tr-[6px] transition-all duration-300 ease-in-out hover:bg-[#1f2b45] select-none"
              }
            >
              <h1 className="text-[18px] text-title font-bold">Sign Up</h1>
            </Link>
          )}
        </div>

        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/mainpage" element={<MainPage />} />
        </Routes>
      </div>
    </>
  );
};

export default Authorization;
