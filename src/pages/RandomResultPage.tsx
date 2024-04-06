import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const RandomResultPage = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <img
        src="/public/assets/common/back.svg"
        alt="back"
        onClick={() => {
          navigate(-1);
        }}
      />
      <ResultBox src="/public/assets/random/randomResult.png" alt="random" />
      <Desc>내 주위 클라이밍 할 곳 추천</Desc>
      <List src="/public/assets/random/climb.png" alt="climb" />
      <List src="/public/assets/random/climb.png" alt="climb" />
      <List src="/public/assets/random/climb.png" alt="climb" />
      <List src="/public/assets/random/climb.png" alt="climb" />
    </Layout>
  );
};

export default RandomResultPage;

const Layout = styled.div`
  padding: 1.5rem 1rem;

  background-image: url("/public/assets/random/resultBackground.png");
  background-size: cover;
  background-repeat: no-repeat;

  img {
    cursor: pointer;
  }
`;

const ResultBox = styled.img`
  width: 100%;
`;

const Desc = styled.div`
  style: ${({ theme }) => theme.fonts.body1};
  margin: 1rem 0 0 1rem;
`;

const List = styled.img`
  width: 100%;
`;
