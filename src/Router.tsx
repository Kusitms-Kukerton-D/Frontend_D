import { BrowserRouter, Route, Routes } from "react-router-dom";
import OnboardingPage from "./pages/OnboardingPage";
import RedirectPage from "./pages/RedirectPage";
import MainPage from "./pages/MainPage";
import InformationPage from "./pages/InformationPage";
import Layout from "./components/Layout";
import CertifiedPage from "./pages/CertifiedPage";
import RandomPage from "./pages/RandomPage";
import MyPage from "./pages/MyPage";
import OnionPage from "./pages/OnionPage";
import MyPageDetail from "./pages/MyPageDetail";

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<OnboardingPage />} />
          <Route path="/auth" element={<RedirectPage />} />
          <Route path="/main" element={<MainPage />} />
          <Route path="/certified" element={<CertifiedPage />} />
          <Route path="/random" element={<RandomPage />} />
          <Route path="/onion" element={<OnionPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/mypage/:id" element={<MyPageDetail />} />
          <Route path="/information" element={<InformationPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
