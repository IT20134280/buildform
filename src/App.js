import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import FormSection from "./Components/FormSection";
import QuesForm01 from "./Components/Forms/QuesForm01";
import QuesForm02 from "./Components/Forms/QuesForm02";
import QuesForm03 from "./Components/Forms/QuesForm03";
import QuesForm05 from "./Components/Forms/QuesForm05";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/form" element={<FormSection />} />

        {/* Forms Sections */}
        <Route path="/page1" element={<QuesForm01 />} />
        <Route path="/page2" element={<QuesForm02 />} />
        <Route path="/page3" element={<QuesForm03 />} />

        <Route path="/page5" element={<QuesForm05 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
