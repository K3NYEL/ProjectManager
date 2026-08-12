import { BrowserRouter, Routes, Route } from "react-router";

import Home from "./pages/Home";
import Documentation from "./pages/Documentation";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/documentation" element={<Documentation />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
