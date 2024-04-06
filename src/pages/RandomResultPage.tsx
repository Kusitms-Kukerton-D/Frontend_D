import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const RandomResultPage = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

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
      <List
        src="/public/assets/random/climb.png"
        alt="climb"
        onClick={openModal}
      />
      <List
        src="/public/assets/random/climb.png"
        alt="climb"
        onClick={openModal}
      />
      <List
        src="/public/assets/random/climb.png"
        alt="climb"
        onClick={openModal}
      />
      <List
        src="/public/assets/random/climb.png"
        alt="climb"
        onClick={openModal}
      />
      <button onClick={openModal}>Open Modal</button>
      {isOpen && (
        <ModalContainer>
          <ModalContent>
            <h2>쿠폰을 저장했어요!</h2>
            <h3>내 쿠폰함으로 이동하시겠어요?</h3>

            <div>
              <NoButton onClick={closeModal}>아니오</NoButton>
              <YesButton onClick={() => navigate("/coupon")}>좋아요</YesButton>
            </div>
          </ModalContent>
        </ModalContainer>
      )}
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

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const ModalContent = styled.div`
  background-color: white;
  padding: 25px 20px;
  width: 17rem;
  border-radius: 8px;
  display: flex;
  flex-direction: column;

  h2 {
    style: ${({ theme }) => theme.fonts.heading2};
  }
  h3 {
    style: ${({ theme }) => theme.fonts.body2};
    margin-bottom: 1rem;
  }

  div {
    display: flex;
  }

  button {
    padding: 9px 0;
    border-radius: 8px;
    width: 50%;
  }
`;

const NoButton = styled.button`
  background: ${({ theme }) => theme.colors.gray200};
  margin-right: 0.5rem;
`;

const YesButton = styled.button`
  background: ${({ theme }) => theme.colors.gray800};
  color: ${({ theme }) => theme.colors.gray0};
`;
