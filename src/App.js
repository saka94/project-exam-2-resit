import "./css/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./components/common/Footer/Footer";
import NavigationLogin from "./components/common/navigation/NavigationLogin/NavigationLogin";
import Login from "./components/login/Login/Login";
import Home from "./components/Home/Home";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <NavigationLogin />
        </header>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/home" element={<Home />} />
        </Routes>
        <footer>
          <Footer />
        </footer>
      </div>
    </Router>
  );
}

export default App;
