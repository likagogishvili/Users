import "./App.scss";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import LandingPage from "./Landing/Landing";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ChartPage from "./ChartPage/ChartPage";
function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Chart" element={<ChartPage />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
