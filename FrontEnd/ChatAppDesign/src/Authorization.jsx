import React, { useState } from "react";
import Login from "./Login";
import Register from "./Register";

const Authorization = () => {
  const [active, setActive] = useState("login");

  const HandlePage = (page) => {
    setActive(page);
  };

  return (
    <div>
      <div className="flex items-center w-[350px] h-[50px] bg-lightPurple rounded-t-[6px]">
        <div
          className="flex flex-col justify-center items-center w-6/12 cursor-pointer h-[100%]
        rounded-tl-[6px] transition-all duration-300 ease-in-out hover:bg-[#1f2b45]"
        onClick={HandlePage('login')}
        >
          <h1 className="text-[18px] text-title font-bold">Log In</h1>
        </div>
        <div
          className="flex flex-col justify-center items-center w-6/12 cursor-pointer h-[100%] 
        rounded-tr-[6px] transition-all duration-300 ease-in-out hover:bg-[#1f2b45]"
        onClick={HandlePage('register')}
        >
          <h1 className="text-[18px] text-title font-bold">Sign Up</h1>
        </div>
      </div>
      {active === "login" ? <Login /> : <Register />}
    </div>
  );
};

export default Authorization;
