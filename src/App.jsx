import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/navbar";
import Home from "./home/home";
import Caramida from "./Caramida/caramida";
import Panels from "./panels/panels";
import Facade from "./facade/facade";
import Elements from "./elements/elements";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/facade" element={<Facade />} />
        <Route path="/elements" element={<Elements />} />
        <Route path="/panels" element={<Panels />} />
        <Route path="/caramida" element={<Caramida />} />
      
      </Routes>
    </Router>
  );
}

export default App;
