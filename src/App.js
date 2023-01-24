import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import ForMe from "./pages/ForMe";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />
        <Route path="/pour-moi" element={<ForMe />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
