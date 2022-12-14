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
import ProtectedRoute from './components/ProtectRoute';




const App: React.FC = () => {

  return (
    <>
        <Router>
            <ThemeProvider theme={theme}>
              <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/login" element={<LoginPage/>} />
                <Route element={<ProtectedRoute />}>
                  <Route path="/profiles" element={<ProfilesPage/>} />
                </Route>
                <Route path="/createprofile" element={<NewProfileForm/>}/>
              </Routes>
            </ThemeProvider>
            <GlobalStyles />
          </Router>    
    </>

  )
}

export default App;
