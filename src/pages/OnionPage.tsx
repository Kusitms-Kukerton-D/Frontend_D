import { styled } from "styled-components";
import Navigation from "../components/navigation/Navigation";
import { useNavigate } from "react-router-dom";

const OnionPage = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <Content>
        <img src="/public/assets/onion/onion.png" alt="onion" />
        <button onClick={() => navigate("diary")}>성장일기 바로가기</button>
      </Content>

      <NavigationLayout>
        <Navigation />
      </NavigationLayout>
    </Layout>
  );
};

export default OnionPage;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  text-align: center;

  button {
    width: 350px;
    padding: 0.8rem 0;
    color: ${({ theme }) => theme.colors.gray0};
    background: ${({ theme }) => theme.colors.gray800};
    border-radius: 0.5rem;
    font-weight: 500;
    margin-bottom: 6rem;
    margin-left: 1.2rem;
  }
`;

const Content = styled.div`
  flex: 1;
  img {
    width: 100%;
  }
`;

const NavigationLayout = styled.div`
  position: fixed;
  bottom: 0;
  width: 390px;
  z-index: 1;
`;
