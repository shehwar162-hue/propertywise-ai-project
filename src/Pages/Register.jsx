import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Register() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const handleRegister = () => {

    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    const user = {
      name,
      email,
      password
    };

    localStorage.setItem(
      "user",
      JSON.stringify(user)
    );

    alert("✅ Account Created Successfully!");

    navigate("/login");
  };


  return (
    <div style={{ textAlign:"center", marginTop:"60px" }}>

      <h1>🏠 PropertyWise AI</h1>
      <h2>Create Account</h2>

      <input
        placeholder="Full Name"
        value={name}
        onChange={(e)=>setName(e.target.value)}
        style={{padding:"10px", width:"250px"}}
      />

      <br/><br/>

      <input
        placeholder="Email"
        type="email"
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
        onClick={handleRegister}
        style={{padding:"10px 30px"}}
      >
        Register
      </button>

    </div>
  );
}