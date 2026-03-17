import { BrowserRouter, Routes, Route } from "react-router-dom";
import ApplicationForm from "./components/applicationForm";
import Home from "./home";

function App() {
  return (
    
    <BrowserRouter>
      {/* <ApplyNow /> */}
      {/* <Home/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/apply" element={<ApplicationForm />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;