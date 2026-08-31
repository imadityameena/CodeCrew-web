import React, { useState } from "react";
import axios from "axios";

const Login = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {

    try {

      const res = await axios.post(
      "http://localhost:7777/login",
      {
        email,
        password,
      },
      {withCredentials : true}
    )

   console.log(res);

      
    } catch (error) {

      console.log(error);
      
    }
    
  }


  return (
    <div className="flex justify-center m-20">
  <fieldset className="fieldset bg-base-200 border-base-300 rounded-box w-xs border p-4">
  

  <label className="label">Email</label>
  <input type="email" className="input" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />

  <label className="label">Password</label>
  <input type="password" className="input" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />

  <button className="btn btn-neutral mt-4" onClick={handleLogin}>Login</button>
</fieldset>
    </div>
   
  );
};

export default Login;
