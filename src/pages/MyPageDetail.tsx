import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const MyCertifiedPage = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <Header>
        <img
          src="/public/assets/common/back.svg"
          alt="back"
          onClick={() => {
            navigate(-1);
          }}
        />
        <h1>나의 인증</h1>
        <div>
          <img src="/public/assets/common/cancel.svg" alt="back" />
        </div>
      </Header>
      <img src="/public/assets/certified/certifiedBox.png" alt="certified" />

      <img src="/public/assets/certified/certifiedDiary.png" alt="certified" />
    </Layout>
  );
};

export default MyCertifiedPage;

const Layout = styled.div`
  padding: 3rem 1rem 1.5rem 1rem;

  > img {
    width: 100%;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;

  > img {
    cursor: pointer;
  }
  > div {
    visibility: hidden;
  }

  margin-bottom: 1rem;
`;
