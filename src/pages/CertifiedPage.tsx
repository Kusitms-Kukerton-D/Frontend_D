import { styled } from "styled-components";
import Navigation from "../components/navigation/Navigation";
import CertifiedBox from "../components/certified/CertifiedBox";
import Axios from "../apis/axios";
import { useEffect, useState } from "react";

const CertifiedPage = () => {
  const [data, setData] = useState([]);

  const certifiedList = () => {
    Axios.get("certification/members/1")
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  useEffect(() => {
    certifiedList();
  }, []);

  return (
    <Layout>
      <Title>나의 인증 리스트</Title>
      <Content>
        {data.map(
          (certified: { img: string; taskTitle: string; content: string }) => (
            <CertifiedBox
              img={certified.imageUrl}
              title={certified.taskTitle}
              description={certified.content}
            />
          )
        )}
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
