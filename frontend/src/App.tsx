import { useState } from 'react';
import Homepage from "./pages/Homepage/index";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { theme } from "./styles/theme";
import SignUp from "./pages/SignUp/index";
import { GlobalStyles } from "./styles/global-styles";
import LoginPage from './pages/LoginPage';
import ProfilesPage from './pages/profiles';
import NewProfileForm from './pages/profiles/createProfiles';
import { RequireAuth } from './contexts/Auth/RequireAuth';
import { AuthProvider } from './contexts/Auth/AuthProvider';



const App: React.FC = () => {

  return (
    <>
        <Router>
            <ThemeProvider theme={theme}>
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<LoginPage/>} />
                <Route path="/profiles" element={<ProfilesPage/>} />
                <Route path="/createprofile" element={<NewProfileForm/>}/>
              </Routes>
            </ThemeProvider>
            <GlobalStyles />
          </Router>    


    </>

  )
}

export default App;
