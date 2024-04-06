import styled, { css } from "styled-components";
import IconArrow from "../../public/assets/icons/arrow.svg";
import { useState } from "react";
import InterestImage from "../../public/assets/select/interest.png";
import DisinterestImage from "../../public/assets/select/disinterest.png";
import Button from "../components/Button";

const SelectPage = () => {
  const [step, setStep] = useState(1);
  const [selectedItem, setSelectedItem] = useState("");

  return (
    <Container>
      <div>
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
            <span>유형 선택</span>
          </HeaderInfoContainer>
          <StepContainer>
            <Step $active={step === 1} />
            <Step $active={step === 2} />
          </StepContainer>
        </Header>
        <ContentContainer>
          <TitleContainer>
            <div className="title">분야 선택</div>
            <div className="subtitle">어떤 분야를 추천받고 싶으신가요?</div>
          </TitleContainer>
          <FieldCardContainer>
            <FieldCard
              $active={selectedItem === "interest"}
              $type="interest"
              onClick={() => setSelectedItem("interest")}
            >
              <img src={InterestImage} alt="interest" />
              <div className="description">관심있는 분야 추천 받기</div>
            </FieldCard>
            <FieldCard
              $active={selectedItem === "disinterest"}
              $type="disinterest"
              onClick={() => setSelectedItem("disinterest")}
            >
              <img src={DisinterestImage} alt="disinterest" />
              <div className="description">자제하고 싶은 분야 추천 받기</div>
            </FieldCard>
          </FieldCardContainer>
        </ContentContainer>
      </div>
      <Button
        disabled={selectedItem === ""}
        onClick={() => {
          //랜덤시간선택 페이지로 이동
        }}
      >
        다음
      </Button>
    </Container>
  );
};

export default SelectPage;

const Container = styled.div`
  padding: 0 20px;
  padding-bottom: 52px;
  height: 100%;

  display: flex;
  flex-direction: column;
  justify-content: space-between;
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

const ContentContainer = styled.div`
  padding-top: 50px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
  padding-bottom: 42px;

  .title {
    color: var(--color-text-primary, #222);
    font-size: 22px;
    font-style: normal;
    font-weight: 700;
    line-height: 25px; /* 113.636% */
  }

  .subtitle {
    color: var(--Grey-grey-7, #595959);

    /* H3/regular/16 */
    font-size: 16px;
    font-style: normal;
    font-weight: 600;
    line-height: 17.884px; /* 111.776% */
  }
`;

const FieldCardContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const FieldCard = styled.div<{ $active: boolean; $type: string }>`
  border-radius: 22px;
  background: #fff;
  border: 2px solid transparent;

  cursor: pointer;

  display: flex;
  flex-direction: column;
  align-items: center;

  /* shadow/10 */
  box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.09);

  .description {
    color: #000;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 23px; /* 143.75% */
    padding-bottom: 20px;
  }

  ${(props) =>
    props.$active &&
    props.$type === "disinterest" &&
    css`
      background: rgba(255, 215, 228, 0.55);
      border-color: var(--sub-sub, #ff3679);
    `}

  ${(props) =>
    props.$active &&
    props.$type === "interest" &&
    css`
      background: rgba(204, 230, 255, 0.55);
      border-color: var(--main-main, #0080ff);
    `}
`;
