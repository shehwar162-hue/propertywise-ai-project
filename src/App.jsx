import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Dashboard from "./pages/Dashboard";
import AddProperty from "./pages/AddProperty";
import AIAssistant from "./pages/AIAssistant";
import Reports from "./pages/Reports";


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