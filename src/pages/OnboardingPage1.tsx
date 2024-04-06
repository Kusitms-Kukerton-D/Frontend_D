import { styled } from "styled-components";

const OnboardingPage1 = () => {
  const handleLogin = async () => {
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${
      import.meta.env.VITE_REST_API_KEY
    }&redirect_uri=${import.meta.env.VITE_REDIRECT_URI}`;
    window.location.href = kakaoURL;
  };

  return (
    <Layout>
      <div>
        <Title>할 일 랜덤박스,</Title>
        <Title>양파를 키워주세요</Title>

        <Desc>랜덤 추천 결과를 실행하고, 인증하면</Desc>
        <Desc>양파를 성장시킬 수 있어요</Desc>
      </div>
      <div>
        <KakaoBtn
          src="/public/assets/onboarding/kakaoBtn.svg"
          alt="kakao"
          onClick={handleLogin}
        />
      </div>
    </Layout>
  );
};

export default OnboardingPage1;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  padding: 2rem 1.5rem;
  padding-top: 76px;
  background-image: url("/public/assets/onboarding/background1.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Title = styled.div`
  style: ${({ theme }) => theme.fonts.primary};
  margin-bottom: 0.2rem;
`;

const Desc = styled.div`
  style: ${({ theme }) => theme.fonts.heading3};
  color: ${({ theme }) => theme.colors.gray700};
  margin-bottom: 0.2rem;
`;

const KakaoBtn = styled.img`
  width: 100%;
  cursor: pointer;
`;
