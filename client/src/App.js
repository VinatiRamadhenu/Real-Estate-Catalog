import "./global.css";
import SignUp from "./components/signup/signUp";
import SignIn from "./components/sighIn/signIn";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import AddNewProperty from "./components/addnewprop/addnewprop";

import Home from "./components/home/home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/home" element={<Home />} />
        <Route path="/sidebar" element={<AddNewProperty />} />
      </Routes>
    </Router>
  );
}

export default App;
