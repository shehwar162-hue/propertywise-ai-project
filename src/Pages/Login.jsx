import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {

  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleLogin = () => {

    const savedUser =
      JSON.parse(localStorage.getItem("user"));


    if (
      savedUser &&
      savedUser.email === email &&
      savedUser.password === password
    ) {

      alert("✅ Login Successful!");

      navigate("/dashboard");

    } else {

      alert("❌ Invalid Email or Password");

    }

  };


  return (
    <div style={{textAlign:"center", marginTop:"60px"}}>

      <h1>🔐 Login</h1>

      <input
        placeholder="Email"
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        style={{padding:"10px", width:"250px"}}
      />

      <br/><br/>

      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        style={{padding:"10px", width:"250px"}}
      />

      <br/><br/>

      <button
        onClick={handleLogin}
        style={{padding:"10px 30px"}}
      >
        Login
      </button>

    </div>
  );
}