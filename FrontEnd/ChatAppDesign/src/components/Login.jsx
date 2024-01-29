import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/", {
        email,
        password,
      });
      if (response.status == 200) {
        navigate("/mainpage")
      } else {
        console.log("Failed")
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="chat flex flex-col bg-lightPurple w-[350px] h-[300px] rounded-b-[6px] justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="form flex flex-col justify-center items-center gap-[30px]"
      >
        <div className="flex flex-col gap-[25px]">
          <div className="flex flex-col justify-center gap-[2px]">
            <label htmlFor="" className="text-title text-[13px] font-Raleway">
              Email
            </label>
            <input
              type="text"
              placeholder="Enter Your Email"
              onChange={(e) => setEmail(e.target.value)}
              className="w-[300px] h-[40px] rounded-[5px] pl-[3px] outline-none bg-lightPink"
            />
          </div>

          <div className="flex flex-col justify-center gap-[2px]">
            <label htmlFor="" className="text-title text-[13px] font-Raleway">
              Password
            </label>
            <input
              type="password"
              placeholder="Enter Your Password"
              onChange={(e) => setPassword(e.target.value)}
              className="w-[300px] h-[40px] rounded-[5px] pl-[3px] outline-none bg-lightPink"
            />
          </div>
        </div>
        <div className="flex flex-col items-center gap-[10px]">
          <button
            type="submit"
            className=" w-[300px] h-[40px] rounded-[5px] bg-orange text-title text-[18px] 
          font-semibold transition-all duration-200 ease-in-out hover:bg-[#64431f]"
          >
            Log In
          </button>
          <p className="text-title cursor-pointer hover:underline">
            Forgot Password?
          </p>
        </div>
      </form>
    </div>
  );
}

export default Login;
