import "./global.css";
import SignUp from "./components/signUp";
import SignIn from "./components/sighIn/signIn";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
