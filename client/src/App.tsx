import "./App.css";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import LandingPage from "./Landing/Landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          {/* <Route path="/"  element={<LandingPage />} /> */}
        </Routes>
        <Footer/>
      </Router>
  );
}

export default App;
