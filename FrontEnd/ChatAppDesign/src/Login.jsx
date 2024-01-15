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
    <div className="bg bg-">
      <div className="chat">
        <form action="submit">
          <label htmlFor="">Email</label>
          <input type="text" placeholder="Enter Your Email"/>

          <label htmlFor="">Password</label>
          <input type="password" placeholder="Enter Your Password" />

          <button type="submit"></button>
          <p>Forgot Password?</p>
        </form>
      </div>
    </div>
  );
}

export default Login;
