import React, { useEffect, useState } from "react";
import axios from "axios";

function Login() {
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   axios
  //     .get("http://localhost:3000/getUser")
  //     .then((response) => {
  //       setData(response.data);
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // }, []);

  return (
    <div className="chat flex flex-col bg-lightPurple w-[350px] h-[300px] rounded-b-[6px] justify-center items-center">
      <form
        action="submit"
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
