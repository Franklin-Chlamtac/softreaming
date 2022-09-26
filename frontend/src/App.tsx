import { useState } from 'react';
import Homepage from "./pages/Homepage/index"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import Auth from "./pages/Auth/index"


const App: React.FC = () => {

  return (
    <>
      <Router>
        <ThemeProvider theme={theme}>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/" element={<Auth />} />
          </Routes>
        </ThemeProvider>
      </Router>
    </>

  )
  
  

}
