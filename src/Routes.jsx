import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import App from "./App";
import Home from "./pages/home";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/" Component={Home} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
