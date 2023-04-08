import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Auth from "./pages/auth";
import AuthProvider from "./contexts/AuthContext";

const App = () => {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/home" element={<Home />} /> 
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App