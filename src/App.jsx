import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Home from "./home/home";
import Facade from "./facade/facade";
import Elements from "./elements/elements";
import Panels from "./panels/panels";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/facade" element={<Facade />} />
        <Route path="/elements" element={<Elements />} />
        <Route path="/panels" element={<Panels />} />
      </Routes>
    </Router>
  );
}

export default App;
