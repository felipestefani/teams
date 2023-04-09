import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Auth from "./pages/auth";
import TeamsInfo from "./pages/teams_info";
import AuthProvider from "./contexts/AuthContext";
import TeamsProvider from "./contexts/TeamsContext";

const App = () => {
  return (

    <AuthProvider>
<TeamsProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Auth />} />
            <Route path="/home" element={<Home />} /> 
            <Route path="/team_info/:id" element={<TeamsInfo />} />
          </Routes>
        </BrowserRouter>
        </TeamsProvider>  
    </AuthProvider>
    
  )
}

export default App