import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function AddProperty() {

  const navigate = useNavigate();

  const [property, setProperty] = useState({
    title:"",
    location:"",
    price:"",
    size:"",
    type:""
  });


  const addProperty = () => {

    const oldProperties =
      JSON.parse(localStorage.getItem("properties")) || [];

    oldProperties.push(property);

    localStorage.setItem(
      "properties",
      JSON.stringify(oldProperties)
    );

    alert("Property Added Successfully!");

    navigate("/dashboard");
  };


  return (
    <div style={{padding:"30px"}}>

      <h1>➕ Add Property</h1>

      <input placeholder="Title"
        onChange={(e)=>setProperty({...property,title:e.target.value})}
      />

      <br/><br/>

      <input placeholder="Location"
        onChange={(e)=>setProperty({...property,location:e.target.value})}
      />

      <br/><br/>

      <input placeholder="Price"
        onChange={(e)=>setProperty({...property,price:e.target.value})}
      />

      <br/><br/>

      <input placeholder="Size"
        onChange={(e)=>setProperty({...property,size:e.target.value})}
      />

      <br/><br/>

      <input placeholder="Type"
        onChange={(e)=>setProperty({...property,type:e.target.value})}
      />

      <br/><br/>

      <button onClick={addProperty}>
        Save Property
      </button>

    </div>
  );
}