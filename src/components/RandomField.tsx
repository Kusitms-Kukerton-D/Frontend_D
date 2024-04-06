import styled, { css } from "styled-components";
import InterestImage from "../../public/assets/select/interest.png";
import DisinterestImage from "../../public/assets/select/disinterest.png";
import Button from "./Button";

interface RandomFieldProps {
  selectedItem: string;
  setSelectedItem: (item: string) => void;
  handleButtonClick: () => void;
}

const RandomField = ({
  selectedItem,
  setSelectedItem,
  handleButtonClick,
}: RandomFieldProps) => {
  return (
    <div style={{ height: "100%" }}>
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
      <Button disabled={selectedItem === ""} onClick={handleButtonClick}>
        다음
      </Button>
    </div>
  );
};

export default RandomField;

const ContentContainer = styled.div`
  padding-top: 50px;
  height: 100%;
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
