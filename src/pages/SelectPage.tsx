import styled from "styled-components";
import IconArrow from "../../public/assets/icons/arrow.svg";
import { useState } from "react";
import RandomField from "../components/RandomField";
import RandomTime from "../components/RandomTime";
import Axios from "../apis/axios";
import { useNavigate } from "react-router-dom";

const SelectPage = () => {
  const [step, setStep] = useState(1);
  const [selectedItem, setSelectedItem] = useState("");
  const [selectedTime, setSelectedTime] = useState({ hour: "", min: "" });
  const navigate = useNavigate();

  const handleOpen = async () => {
    try {
      const response = await Axios.post("random", {
        category: selectedItem,
        hour: parseInt(selectedTime.hour),
        minute: parseInt(selectedTime.min),
      });

      if (response.status === 200) {
        navigate("/random/result");
      } else {
        console.error("");
      }
    } catch (error) {
      console.error("요청 중 오류가 발생했습니다:", error);
    }
  };

  return (
    <Container>
      <InnerContainer>
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
            {step === 1 ? <span>유형 선택</span> : <span>시간 선택</span>}
          </HeaderInfoContainer>
          <StepContainer>
            <Step $active={step === 1} />
            <Step $active={step === 2} />
          </StepContainer>
        </Header>
        {step === 1 && (
          <RandomField
            selectedItem={selectedItem}
            setSelectedItem={setSelectedItem}
            handleButtonClick={() => setStep(2)}
          />
        )}
        {step === 2 && (
          <RandomTime
            selectedTime={selectedTime}
            setSelectedTime={setSelectedTime}
            handleButtonClick={handleOpen}
          />
        )}
      </InnerContainer>
    </Container>
  );
};

export default SelectPage;

const Container = styled.div`
  padding: 0 20px;
  padding-top: 44px;
  height: 100%;

  display: flex;
  flex-direction: column;
`;

const InnerContainer = styled.div`
  height: 85%;
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
