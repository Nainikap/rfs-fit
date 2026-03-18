"use client"
import { Routes, Route } from "react-router-dom";
import ClientRouter from "./components/ClientRouter";
import ApplicationForm from "./components/applicationForm";
import Home from "./home";

function App() {
  return (
    
    <ClientRouter>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply" element={<ApplicationForm />} />
      </Routes>
    </ClientRouter>
  );
}

export default App;