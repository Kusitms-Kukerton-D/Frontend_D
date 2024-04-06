import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const OnboardingPage = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <div>
        <Title>할 일 랜덤박스,</Title>
        <Logo src="/public/assets/onboarding/logo.svg" alt="box" />

        <Desc>할 일을 랜덤 추천받아</Desc>
        <Desc>도파민에서 벗어나고, 마음의 안정을 찾아봐요.</Desc>
      </div>
      <div>
        <button onClick={() => navigate("/next")}>다음</button>
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
  padding-top: 76px;
  background-image: url("/public/assets/onboarding/background.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  div {
    button {
      width: 100%;
      padding: 0.8rem 0;
      background: ${({ theme }) => theme.colors.gray800};
      color: ${({ theme }) => theme.colors.gray0};
      border-radius: 0.5rem;
      font-size: 15px;
    }
  }
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
