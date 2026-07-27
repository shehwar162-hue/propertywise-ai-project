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
    <div style={containerStyle}>

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



      <h2>🔍 Search Properties</h2>


      <input
        placeholder="Search property..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        style={inputStyle}
      />


      <h2 style={{marginTop:"30px"}}>
        🏠 Available Properties
      </h2>


      {
        filteredProperties.length === 0 ? (

          <p>No properties found.</p>

        ) : (

          filteredProperties.map((property, index) => (

            <div key={index} style={cardStyle}>

              <h3>
                🏡 {property.title}
              </h3>

              <p>
                📍 Location: {property.location}
              </p>

              <p>
                💰 Price: {property.price}
              </p>

              <p>
                📐 Size: {property.size}
              </p>

              <p>
                🏠 Type: {property.type}
              </p>

            </div>

          ))

        )
      }


    </div>
  );
}



const containerStyle = {
  padding:"30px",
  background:"#f5f7fb",
  minHeight:"100vh"
};


const buttonStyle = {
  margin:"10px",
  padding:"12px 20px",
  borderRadius:"8px",
  border:"none",
  cursor:"pointer"
};


const inputStyle = {
  padding:"12px",
  width:"300px",
  borderRadius:"8px"
};


const cardStyle = {
  background:"white",
  padding:"20px",
  margin:"15px 0",
  borderRadius:"15px",
  boxShadow:"0 4px 8px rgba(0,0,0,0.1)"
};