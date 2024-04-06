import { BrowserRouter, Route, Routes } from "react-router-dom";
import OnboardingPage from "./pages/OnboardingPage";
import RedirectPage from "./pages/RedirectPage";
import MainPage from "./pages/MainPage";
import CertifiedPage from "./pages/CertifiedPage";
import RandomPage from "./pages/RandomPage";
import MyPage from "./pages/MyPage";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<OnboardingPage />} />
        <Route path="/auth" element={<RedirectPage />} />
        <Route path="/main" element={<MainPage />} />
        <Route path="/certified" element={<CertifiedPage />} />
        <Route path="/random" element={<RandomPage />} />
        <Route path="/mypage" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
