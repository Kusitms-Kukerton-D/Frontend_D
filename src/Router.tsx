import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import InformationPage from "./pages/InformationPage";
import Layout from "./components/Layout";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<MainPage />} />
          <Route path="/information" element={<InformationPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
