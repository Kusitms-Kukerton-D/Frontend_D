import { styled } from "styled-components";
import Navigation from "../components/navigation/Navigation";
import { useNavigate } from "react-router-dom";

const MyPage = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <Content>
        <Title>마이페이지</Title>
        <BigBox>
          <Profile src="/public/assets/mypage/profile.svg" alt="user" />
          <div>
            김대박 <span>Lv.5</span>
          </div>
          <img src="/public/assets/mypage/pencil.svg" alt="pencil" />
        </BigBox>

        <BoxContainer>
          <Box>
            <span>16</span>
            <div>랜덤 추천 결과</div>
          </Box>
          <Box>
            <span>15</span>
            <div>인증한 갯수</div>
          </Box>
          <Box>
            <span>3</span>
            <div>쿠폰함</div>
          </Box>
        </BoxContainer>

        <Certified>
          <CertifiedTitle>나의 인증</CertifiedTitle>
          <ImageBox>
            <img
              src="/public/assets/mypage/certified1.png"
              alt="certified"
              onClick={() => {
                navigate("/mypage/1");
              }}
            />
            <img
              src="/public/assets/mypage/certified2.png"
              alt="certified"
              onClick={() => {
                navigate("/mypage/2");
              }}
            />
            <img
              src="/public/assets/mypage/certified3.png"
              alt="certified"
              onClick={() => {
                navigate("/mypage/3");
              }}
            />
          </ImageBox>
        </Certified>
      </Content>

      <NavigationLayout>
        <Navigation />
      </NavigationLayout>
    </Layout>
  );
};

export default MyPage;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`;

const Content = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
`;

const Title = styled.div`
  padding: 1rem;
  style: ${({ theme }) => theme.fonts.heading1};
  margin-bottom: 1rem;
`;

const Profile = styled.img`
  width: 3rem;
  height: 3rem;
`;

const BigBox = styled.div`
  background: ${({ theme }) => theme.colors.gray0};
  padding: 1.5rem 2rem;
  width: 100%;
  gap: 1rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  style: ${({ theme }) => theme.fonts.heading2};
  box-shadow: 0px 0px 10px 1px rgb(240, 240, 240);

  border-radius: 10px;

  > div {
    width: 100%;
    span {
      color: ${({ theme }) => theme.colors.main800};
      style: ${({ theme }) => theme.fonts.body2};
      margin-left: 2px;
    }
  }
  img {
    cursor: pointer;
  }
`;

const BoxContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  width: 100%;
`;

const Box = styled.div`
  background: ${({ theme }) => theme.colors.gray0};
  padding: 0.8rem 0;
  width: 100%;
  margin-top: 1rem;
  white-space: nowrap;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  style: ${({ theme }) => theme.fonts.heading2};
  box-shadow: 0px 0px 10px 1px rgb(240, 240, 240);
  border-radius: 10px;

  span {
    style: ${({ theme }) => theme.fonts.heading1};
    color: ${({ theme }) => theme.colors.gray800};
  }

  div {
    style: ${({ theme }) => theme.fonts.body2};
    color: ${({ theme }) => theme.colors.gray600};
  }
`;

const NavigationLayout = styled.div`
  position: fixed;
  bottom: 0;
  width: 390px;
  z-index: 1;
`;

const Certified = styled.div`
  width: 100%;
`;

const CertifiedTitle = styled.div`
  padding: 0.8rem;
  margin: 2rem 0 1rem 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray200};
`;

const ImageBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
  margin-bottom: 5rem;

  img {
    cursor: pointer;
  }
`;
