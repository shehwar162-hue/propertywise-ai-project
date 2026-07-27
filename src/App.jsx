import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./Pages/Home";
import Login from "./Pages/Login";
import Register from "./Pages/Register";
import Dashboard from "./Pages/Dashboard";
import AddProperty from "./Pages/AddProperty";
import AIAssistant from "./Pages/AIAssistant";
import Reports from "./Pages/Reports";


function App() {

  return (

    <BrowserRouter>

      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/add-property" element={<AddProperty />} />

        <Route path="/ai" element={<AIAssistant />} />

        <Route path="/reports" element={<Reports />} />

      </Routes>

    </BrowserRouter>

  );
}


export default App;