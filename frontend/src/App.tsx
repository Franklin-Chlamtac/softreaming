import { useState } from 'react';
import Homepage from "./pages/Homepage/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import SignUp from "./pages/SignUp/index";
import { GlobalStyles } from "./styles/global-styles";
import LoginPage from './pages/LoginPage';


const App: React.FC = () => {

  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/login" element={<LoginPage/>} />
          </Routes>
        </ThemeProvider>
        <GlobalStyles />
      </Router>
    </>

  )
}

export default App;
