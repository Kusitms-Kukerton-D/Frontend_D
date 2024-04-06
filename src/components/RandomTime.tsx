import "react-time-picker-typescript/dist/style.css";
import Button from "./Button";
import styled from "styled-components";

interface RandomTimeProps {
  selectedTime: { hour: any; min: any };
  handleButtonClick: () => void;
  setSelectedTime: ({ hour, min }: { hour: any; min: any }) => void;
}

const RandomTime = ({
  selectedTime,
  handleButtonClick,
  setSelectedTime,
}: RandomTimeProps) => {
  return (
    <div style={{ height: "100%" }}>
      <ContentContainer>
        <TitleContainer>
          <div className="title">희망 소요 시간 설정</div>
          <div className="subtitle">
            설정하신 시간에 적합한 할 일을 추천 해드릴게요!
          </div>
        </TitleContainer>
        <TimeContainer>
          <div>시간을 입력해주세요</div>
          <InputContainer>
            <div>
              <input
                value={selectedTime.hour}
                onChange={(e) =>
                  setSelectedTime({
                    ...selectedTime,
                    hour: parseInt(e.target.value),
                  })
                }
              />
              <span>시</span>
            </div>
            <div>
              <input
                value={selectedTime.min}
                onChange={(e) =>
                  setSelectedTime({
                    ...selectedTime,
                    min: parseInt(e.target.value),
                  })
                }
              />
              <span>분</span>
            </div>
          </InputContainer>
        </TimeContainer>
      </ContentContainer>
      <Button
        disabled={!selectedTime.hour || !selectedTime.min}
        onClick={handleButtonClick}
      >
        랜덤박스 OPEN!
      </Button>
    </div>
  );
};

export default RandomTime;

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

const TimeContainer = styled.div`
  div {
    color: var(--gray-gray-900, #222);
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 17.884px; /* 111.776% */
  }
`;

const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 16px;

  div {
    width: 166px;
    border-radius: 7px;
    background: var(--gray-gray-100, #f2f4f8);
    border: none;
    padding: 13px 30px;

    display: flex;
    gap: 10px;

    input {
      background: transparent;
      width: 100%;
      border: none;

      color: black;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 23px; /* 143.75% */
    }

    span {
      color: var(--gray-gray-700, #5f646f);
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 23px; /* 143.75% */
    }
  }
`;
