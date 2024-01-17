import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";

const Authorization = () => {
  const [active, setActive] = useState("/");

  return (
    <>
      <div className="login bg w-full h-screen bg-chatapp flex flex-col justify-center items-center">
        <div className="chatcont flex flex-col">
          <div className="flex items-center w-[350px] h-[50px] bg-lightPurple rounded-t-[6px]">
          <Link
              to="/"
              className={`flex flex-col justify-center items-center w-6/12 cursor-pointer h-[100%] rounded-tl-[6px] transition-all duration-300 ease-in-out hover:bg-[#1f2b45] ${active === "login" ? "bg-[#1f2b45]" : ""}`}
            >
              <h1 className="text-[18px] text-title font-bold">Log In</h1>
            </Link>
            <Link
              to="/register"
              className={`flex flex-col justify-center items-center w-6/12 cursor-pointer h-[100%] rounded-tr-[6px] transition-all duration-300 ease-in-out hover:bg-[#1f2b45] ${active === "register" ? "bg-[#1f2b45]" : ""}`}
            >
              <h1 className="text-[18px] text-title font-bold">Sign Up</h1>
            </Link>
          </div>

          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Routes>
        </div>
      </div>
    </>
  );
};

export default Authorization;

