import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

export default function Dashboard() {

  const navigate = useNavigate();

  const [user, setUser] = useState(null);
  const [properties, setProperties] = useState([]);
  const [search, setSearch] = useState("");


  useEffect(() => {

    const savedUser = JSON.parse(localStorage.getItem("user"));
    setUser(savedUser);

    const savedProperties =
      JSON.parse(localStorage.getItem("properties")) || [];

    setProperties(savedProperties);

  }, []);


  const logout = () => {

    localStorage.removeItem("user");

    alert("Logout Successful!");

    navigate("/login");

  };


  const filteredProperties = properties.filter((property) =>
    property.title?.toLowerCase().includes(search.toLowerCase()) ||
    property.location?.toLowerCase().includes(search.toLowerCase()) ||
    property.type?.toLowerCase().includes(search.toLowerCase())
  );


  return (

    <div style={{
      padding:"30px",
      background:"#f5f7fb",
      minHeight:"100vh"
    }}>

      <h1>📊 PropertyWise AI Dashboard</h1>


      {user && (
        <h3>
          Welcome, {user.name} 👋
        </h3>
      )}


      <button
        style={buttonStyle}
        onClick={() => navigate("/add-property")}
      >
        ➕ Add Property
      </button>


      <button
        style={buttonStyle}
        onClick={() => navigate("/ai")}
      >
        🤖 AI Assistant
      </button>


      <button
        style={buttonStyle}
        onClick={() => navigate("/reports")}
      >
        📈 Reports
      </button>


      <button
        style={buttonStyle}
        onClick={logout}
      >
        🚪 Logout
      </button>



      <h2>🔍