import { styled } from "styled-components";

const OnboardingPage = () => {
  return (
    <Layout>
      <div>
        <Title>할 일 랜덤박스,</Title>
        <Logo src="/public/assets/onboarding/logo.svg" alt="box" />

        <Desc>할 일을 랜덤 추천받아</Desc>
        <Desc>도파민에서 벗어나고, 마음의 안정을 찾아봐요.</Desc>
      </div>
      <div>
        <KakaoBtn src="/public/assets/onboarding/kakaoBtn.svg" alt="kakao" />
      </div>
    </Layout>
  );
};

export default OnboardingPage;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  padding: 2rem 1.5rem;
  background-image: url("/public/assets/onboarding/background.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Title = styled.div`
  style: ${({ theme }) => theme.fonts.primary};
  margin-bottom: 0.2rem;
`;

const Logo = styled.img`
  margin-bottom: 1.4rem;
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
