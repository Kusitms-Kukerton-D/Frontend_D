import styled from "styled-components";
import IconArrow from "../../public/assets/icons/arrow.svg";
import { useState } from "react";
import InformationField from "../components/InformationField";
import { INFORMATION_FIELD } from "../constants/InformationConstants";
import { useNavigate } from "react-router-dom";
import Axios from "../apis/axios";

const InformationPage = () => {
  const [step, setStep] = useState(1);
  const [selectedInterestFields, setSelectedInterestFields] = useState<
    string[]
  >([]);
  const [selectedDisinterestFields, setSelectedDisinterestFields] = useState<
    string[]
  >([]);
  const navigate = useNavigate();

  const handleRegister = async () => {
    try {
      const response = await Axios.post("member/onboarding", {
        interested_categories: selectedInterestFields,
        restrained_categories: selectedDisinterestFields,
        user_id: 1,
      });

      if (response.status === 200) {
        navigate("/random");
      } else {
        console.error("기본 정보 입력이 완료되었습니다.");
      }
    } catch (error) {
      console.error("요청 중 오류가 발생했습니다:", error);
    }
  };

  return (
    <Container>
      <Header>
        <HeaderInfoContainer>
          <div>
            <button type="button">
              <img src={IconArrow} alt="arrow" />
            </button>
            <button type="button" className="skip">
              건너뛰기
            </button>
          </div>
          <span>기본정보 입력</span>
        </HeaderInfoContainer>
        <StepContainer>
          <Step $active={step === 1} />
          <Step $active={step === 2} />
        </StepContainer>
      </Header>
      {step === 1 && (
        <InformationField
          interestType={true}
          fields={INFORMATION_FIELD[0]}
          selectedFields={selectedInterestFields}
          setSelectedFields={setSelectedInterestFields}
          buttonText="다음"
          handleButtonClick={() => setStep(2)}
        />
      )}
      {step === 2 && (
        <InformationField
          interestType={false}
          fields={INFORMATION_FIELD[1]}
          selectedFields={selectedDisinterestFields}
          setSelectedFields={setSelectedDisinterestFields}
          buttonText="저장하기"
          handleButtonClick={() => {
            handleRegister();
          }}
        />
      )}
    </Container>
  );
};

export default InformationPage;

const Container = styled.div`
  padding: 0 20px;
  padding-bottom: 30px;
  padding-top: 44px;
  height: 100%;

  display: flex;
  flex-direction: column;
`;

const Header = styled.div``;

const HeaderInfoContainer = styled.div`
  position: relative;
  margin: 2px 0 16px 0;

  div {
    display: flex;
    justify-content: space-between;

    .skip {
      color: ${(props) => props.theme.colors.gray700};
      style: ${(props) => props.theme.fonts.heading2};
    }
  }

  span {
    position: absolute;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;

    color: ${(props) => props.theme.colors.black};
    style: ${(props) => props.theme.fonts.heading2};
  }
`;

const StepContainer = styled.div`
  display: flex;
  gap: 4px;
`;

const Step = styled.hr<{ $active: boolean }>`
  width: 100%;
  border-width: 3px 0 0 0;
  border-style: solid;
  border-color: #bbb;
  border-radius: 17px;
  border-color: ${(props) =>
    props.$active ? props.theme.colors.gray900 : props.theme.colors.gray200};
  margin: 0;
`;
