import "./App.css";
import Header from "./Header/Header";
import LandingPage from "./Landing/Landing";
import { darkTheme } from "./assets/theme/theme";
import { ThemeProvider } from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <ThemeProvider theme={darkTheme}>
       <Router>
       <Header/>
        <Routes>
          <Route path="/"  element={<LandingPage />} />
          {/* <Route path="/"  element={<LandingPage />} /> */}

       
        </Routes>
      </Router>

    </ThemeProvider>
  );
}

export default App;
