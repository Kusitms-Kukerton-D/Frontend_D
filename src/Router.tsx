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
import SelectPage from "./pages/SelectPage";
import MyPageDetail from "./pages/MyPageDetail";
import CouponPage from "./pages/CouponPage";
import RandomResultPage from "./pages/RandomResultPage";
import OnionDiaryPage from "./pages/OnionDiaryPage";
import RegisterPage from "./pages/RegisterPage";
import MyCertification from "./pages/MyCertification";

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
          <Route path="/random/result" element={<RandomResultPage />} />
          <Route path="/onion" element={<OnionPage />} />
          <Route path="/onion/diary" element={<OnionDiaryPage />} />
          <Route path="/mypage" element={<MyPage />} />
          <Route path="/mypage/:id" element={<MyPageDetail />} />
          <Route path="/information" element={<InformationPage />} />
          <Route path="/select" element={<SelectPage />} />
          <Route path="/coupon" element={<CouponPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/myCertification" element={<MyCertification />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
