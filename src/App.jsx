import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home } from "./views/Home.jsx";
import "./App.css";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element ={<Home/>} /> 
        {/* <Route path="/merch" element ={<Merch/>} /> 
        <Route path="/info" element ={<Info/>} />  */}
      </Routes>
    </Router>
  );
}

export default App;
