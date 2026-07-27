import { useState } from "react";

export default function AIAssistant() {

  const [question, setQuestion] = useState("");
  const [response, setResponse] = useState("");


  const askAI = () => {

    if (!question) {
      setResponse("Please enter your question.");
      return;
    }


    let answer = "";


    if (question.toLowerCase().includes("price")) {

      answer =
        "🏠 Property prices depend on location, size, and market conditions.";

    } 
    else if (question.toLowerCase().includes("multan")) {

      answer =
        "📍 Multan has many residential areas with different price ranges.";

    }
    else if (question.toLowerCase().includes("house")) {

      answer =
        "🏡 You can search houses by location, size, and budget.";

    }
    else {

      answer =
        "🤖 AI Suggestion: Please provide more details about the property.";

    }


    setResponse(answer);

  };



  return (

    <div style={{padding:"30px"}}>

      <h1>🤖 PropertyWise AI Assistant</h1>

      <p>
        Ask your real estate questions
      </p>


      <input
        type="text"
        placeholder="Example: Multan property price"
        value={question}
        onChange={(e)=>setQuestion(e.target.value)}
        style={{
          padding:"10px",
          width:"300px"
        }}
      />


      <button
        onClick={askAI}
        style={{
          padding:"10px",
          marginLeft:"10px"
        }}
      >
        Send
      </button>


      <div style={{
        marginTop:"30px",
        border:"1px solid black",
        padding:"20px"
      }}>

        <h3>AI Response:</h3>

        <p>
          {response}
        </p>

      </div>


    </div>

  );

}