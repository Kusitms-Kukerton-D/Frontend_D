import { styled } from "styled-components";
import Navigation from "../components/navigation/Navigation";
import CertifiedBox from "../components/certified/CertifiedBox";

const CertifiedList = [
  {
    img: "/public/assets/certified/certified1.png",
    title: "클라이밍하기",
    description: "몸과 마음의 근력을 기르기 !",
  },
  {
    img: "/public/assets/certified/certified2.png",
    title: "독서하기",
    description: "마음의 양식을 채워보아요 :)",
  },
  {
    img: "/public/assets/certified/certified3.png",
    title: "게임 그만하기",
    description: "오늘은 캐릭터에게 휴식을 주세요 ~",
  },
];

const CertifiedPage = () => {
  return (
    <Layout>
      <Title>나의 인증 리스트</Title>
      <Content>
        {CertifiedList.map((certified) => (
          <CertifiedBox
            img={certified.img}
            title={certified.title}
            description={certified.description}
          />
        ))}
      </Content>
      <NavigationLayout>
        <Navigation />
      </NavigationLayout>
    </Layout>
  );
};

export default CertifiedPage;

const Title = styled.div`
  text-align: center;
  padding: 3.5rem 0 1rem 0;
  style: ${({ theme }) => theme.fonts.heading1};
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray100};
`;

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
