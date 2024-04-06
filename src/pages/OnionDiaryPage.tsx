import { styled } from "styled-components";
import Navigation from "../components/navigation/Navigation";

const OnionDiaryPage = () => {
  return (
    <Layout>
      <Content>
        <img src="/public/assets/onion/onionDiary.png" alt="onion-diary" />
      </Content>
      <NavigationLayout>
        <Navigation />
      </NavigationLayout>
    </Layout>
  );
};

export default OnionDiaryPage;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.div`
  flex: 1;
`;

const NavigationLayout = styled.div`
  position: fixed;
  bottom: 0;
  width: 390px;
  z-index: 1;
`;
