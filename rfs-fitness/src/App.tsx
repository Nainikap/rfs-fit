"use client"
import { Routes, Route } from "react-router-dom";
import ClientRouter from "./components/ClientRouter";
import ApplicationForm from "./components/applicationForm";
import AboutUs from "./components/aboutUs";
import Home from "./home";

function App() {
  return (
    
    <ClientRouter>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />

        <Route path="/apply" element={<ApplicationForm />} />

      </Routes>
    </ClientRouter>
  );
}

export default App;