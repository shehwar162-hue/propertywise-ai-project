import { useNavigate } from "react-router-dom";

export default function Home() {

  const navigate = useNavigate();


  return (

    <div
      style={{
        padding:"40px",
        textAlign:"center",
        background:"#f5f7fb",
        minHeight:"100vh"
      }}
    >

      <h1 style={{fontSize:"40px"}}>
        🏠 Welcome to PropertyWise AI
      </h1>


      <h2>
        Smart Real Estate Management System
      </h2>


      <p style={{fontSize:"18px"}}>
        Manage properties, get AI assistance,
        and analyze real estate data easily.
      </p>



      <button
        style={{
          padding:"12px 25px",
          margin:"15px",
          borderRadius:"10px",
          border:"none",
          cursor:"pointer"
        }}
        onClick={() => navigate("/login")}
      >
        🔐 Login
      </button>



      <button
        style={{
          padding:"12px 25px",
          margin:"15px",
          borderRadius:"10px",
          border:"none",
          cursor:"pointer"
        }}
        onClick={() => navigate("/register")}
      >
        📝 Create Account
      </button>




      <h2 style={{marginTop:"50px"}}>
        🚀 Features
      </h2>



      <div
        style={{
          display:"flex",
          justifyContent:"center",
          gap:"20px",
          flexWrap:"wrap"
        }}
      >


        <div style={cardStyle}>
          🏡
          <h3>Property Management</h3>
          <p>
            Add and manage your properties easily.
          </p>
        </div>



        <div style={cardStyle}>
          🤖
          <h3>AI Assistant</h3>
          <p>
            Get smart real estate suggestions.
          </p>
        </div>



        <div style={cardStyle}>
          📊
          <h3>Reports</h3>
          <p>
            View property statistics and analysis.
          </p>
        </div>


      </div>


    </div>

  );
}



const cardStyle = {

  background:"white",

  padding:"25px",

  width:"220px",

  borderRadius:"15px",

  boxShadow:"0 4px 8px rgba(0,0,0,0.1)"

};