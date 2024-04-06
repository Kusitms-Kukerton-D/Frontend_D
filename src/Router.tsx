import { BrowserRouter, Route, Routes } from "react-router-dom";
import OnboardingPage from "./pages/OnboardingPage";
import RedirectPage from "./pages/RedirectPage";
import MainPage from "./pages/MainPage";
import InformationPage from "./pages/InformationPage";
import Layout from "./components/Layout";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/information" element={<InformationPage />} />
          <Route path="/" element={<OnboardingPage />} />
          <Route path="/auth" element={<RedirectPage />} />
          <Route path="/main" element={<MainPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
