import { useNavigate } from "react-router-dom";

export default function Navbar() {

  const navigate = useNavigate();


  const logout = () => {

    localStorage.removeItem("user");

    alert("Logout Successful!");

    navigate("/login");

  };


  return (

    <nav
      style={{
        padding: "15px",
        borderBottom: "1px solid black",
        display: "flex",
        gap: "10px",
        flexWrap: "wrap"
      }}
    >

      <button onClick={() => navigate("/")}>
        🏠 Home
      </button>


      <button onClick={() => navigate("/dashboard")}>
        📊 Dashboard
      </button>


      <button onClick={() => navigate("/add-property")}>
        ➕ Add Property
      </button>


      <button onClick={() => navigate("/ai")}>
        🤖 AI Assistant
      </button>


      <button onClick={() => navigate("/reports")}>
        📈 Reports
      </button>


      <button onClick={logout}>
        🚪 Logout
      </button>


    </nav>

  );
}