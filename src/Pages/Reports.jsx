import { useEffect, useState } from "react";

export default function Reports() {

  const [properties, setProperties] = useState([]);


  useEffect(() => {

    const savedProperties =
      JSON.parse(localStorage.getItem("properties")) || [];

    setProperties(savedProperties);

  }, []);



  const totalProperties = properties.length;


  const totalLocations = [
    ...new Set(
      properties.map((p) => p.location)
    )
  ].length;


  const totalTypes = [
    ...new Set(
      properties.map((p) => p.type)
    )
  ].length;



  return (

    <div style={{ padding:"30px" }}>

      <h1>📊 PropertyWise AI Reports</h1>


      <p>
        Property management statistics and analysis
      </p>



      <div style={{
        display:"flex",
        gap:"20px",
        flexWrap:"wrap"
      }}>


        <div style={{
          border:"1px solid black",
          padding:"20px",
          width:"200px"
        }}>
          <h2>🏠</h2>
          <h3>Total Properties</h3>
          <h1>{totalProperties}</h1>
        </div>



        <div style={{
          border:"1px solid black",
          padding:"20px",
          width:"200px"
        }}>
          <h2>📍</h2>
          <h3>Locations</h3>
          <h1>{totalLocations}</h1>
        </div>



        <div style={{
          border:"1px solid black",
          padding:"20px",
          width:"200px"
        }}>
          <h2>🏡</h2>
          <h3>Property Types</h3>
          <h1>{totalTypes}</h1>
        </div>


      </div>



      <h2 style={{marginTop:"40px"}}>
        Property Summary
      </h2>


      {
        properties.length === 0 ? (

          <p>No property data available.</p>

        ) : (

          properties.map((property,index)=>(

            <div
              key={index}
              style={{
                border:"1px solid gray",
                padding:"15px",
                margin:"15px"
              }}
            >

              <h3>
                🏠 {property.title}
              </h3>

              <p>
                📍 {property.location}
              </p>

              <p>
                💰 {property.price}
              </p>

              <p>
                🏷️ {property.type}
              </p>

            </div>

          ))

        )
      }


    </div>

  );
}