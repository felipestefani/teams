import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/home";
import Auth from "./pages/auth";
import TeamsInfo from "./pages/teams_info";
import AuthProvider from "./contexts/AuthContext";
import TeamsProvider from "./contexts/TeamsContext";
import TeamsProducts from "./pages/teams_products";
import TeamsProductInfo from "./pages/teams_product_info";
import NotFoundPage from "./pages/not_found";

const App = () => {
  return (

    <AuthProvider>
<TeamsProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Auth />} />
            <Route path="/home" element={<Home />} /> 
            <Route path="/team_info/:id" element={<TeamsInfo />} />
            <Route path='/home/products/:id' element={<TeamsProducts />}  />
            <Route path="/home/products/details/:id" element={<TeamsProductInfo />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </BrowserRouter>
        </TeamsProvider>  
    </AuthProvider>
    
  )
}

export default App