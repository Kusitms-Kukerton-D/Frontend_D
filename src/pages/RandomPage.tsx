import { styled } from "styled-components";
import Navigation from "../components/navigation/Navigation";

const RandomPage = () => {
  return (
    <Layout>
      <Content>
        <Title>할 일 랜덤박스</Title>
        <RandomBox>
          <div>
            <div>도파민에서 벗어나고자 하는 사람들을 위한 </div>
            <div>랜덤 추천 할 일 롤링!</div>
          </div>
          <img src="/public/assets/random/randomBox.png" alt="random" />
          <Button>랜덤 박스 뽑기</Button>
        </RandomBox>
      </Content>
      <NavigationLayout>
        <Navigation />
      </NavigationLayout>
    </Layout>
  );
};

export default RandomPage;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;

  background-image: url("/public/assets/random/background.png");
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: center;
  padding: 4rem 1rem 1rem 1rem;
`;

const Title = styled.div`
  style: ${(props) => props.theme.fonts.heading1};
  color: ${(props) => props.theme.colors.gray0};
  font-size: 1.5rem;
  font-weight: bold;
  color: #ffffff;
`;

const RandomBox = styled.div`
  background: ${(props) => props.theme.colors.gray0};
  width: 100%;
  border-radius: 15px;
  text-align: center;

  > div {
    text-align: center;
    style: ${(props) => props.theme.fonts.body2};
    background: ${(props) => props.theme.colors.gray100};
    padding: 0.5rem 3rem;
    border-radius: 15px;
    margin-bottom: 1rem;
    white-space: nowrap;
    margin: 1.5rem;
  }

  img {
    width: 60%;
    height: auto;
  }
`;

const Button = styled.span`
  style: ${(props) => props.theme.fonts.body1};
  padding: 0.9rem 0rem;
  border-radius: 15px;
  cursor: pointer;
  width: 100%;
  display: inline-block;
  color: ${(props) => props.theme.colors.main800};
  border-top: 1px solid ${(props) => props.theme.colors.gray200};
`;

const NavigationLayout = styled.div`
  position: fixed;
  bottom: 0;
  width: 390px;
  z-index: 1;
`;
