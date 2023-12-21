import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Error404 from "./pages/Error404";
import Contact from "./pages/Contact";


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="about" element={<Error404 />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
