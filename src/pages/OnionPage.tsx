import { styled } from "styled-components";
import Navigation from "../components/navigation/Navigation";

const OnionPage = () => {
  return (
    <Layout>
      <Content>1</Content>
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
