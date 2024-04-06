import styled from "styled-components";
import IconArrow from "../../public/assets/icons/arrow.svg";
import { useState } from "react";
import InterestedField from "../components/InformationField";
import InformationField from "../components/InformationField";
import { INFORMATION_FIELD } from "../constants/InformationConstants";
import Button from "../components/Button";

const InformationPage = () => {
  const [step, setStep] = useState(1);

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
      <InformationField fields={INFORMATION_FIELD[step - 1]} />
      <Button>다음</Button>
    </Container>
  );
};

export default InformationPage;

const Container = styled.div`
  padding: 0 20px;
  padding-bottom: 52px;
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
