import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import App from "./App";
import Home from "./pages/home";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* <App> */}
          <Route path="/" Component={Home} />
        {/* </App> */}
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
