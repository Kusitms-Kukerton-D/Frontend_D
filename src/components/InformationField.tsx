import styled from "styled-components";
import { InformationFieldData } from "../types/Information.type";

interface InformationFieldProps {
  fields: InformationFieldData;
}

const InformationField = ({ fields }: InformationFieldProps) => {
  return (
    <Container>
      <TitleContainer>
        <div className="title">
          <span className="title1">{fields.title1}</span>
          <span className="title2">{fields.title2}</span>
        </div>
        <div className="subtitle">{fields.subtitle}</div>
      </TitleContainer>
      <DataContainer>
        <span>* 복수 선택 가능</span>
        <FieldCardContainer>
          {fields.fields.map((item) => (
            <FieldCard key={item.id}>
              <div>{item.content}</div>
              <img src={item.image} alt={item.content} />
            </FieldCard>
          ))}
        </FieldCardContainer>
      </DataContainer>
    </Container>
  );
};

export default InformationField;

const Container = styled.div`
  padding: 50px 0px;
`;

const TitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 11px;
  margin-bottom: 43px;

  .title {
    color: ${(props) => props.theme.colors.gray900};
    style: ${(props) => props.theme.fonts.heading1};

    .title1 {
      font-weight: 700;
    }

    .title2 {
      font-weight: 400;
    }
  }

  .subtitle {
    color: ${(props) => props.theme.colors.gray800};

    font-size: 13.007px;
    font-style: normal;
    font-weight: 600;
    line-height: 17.884px;
  }
`;

const DataContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  span {
    color: ${(props) => props.theme.colors.gray600};

    font-size: 13.007px;
    font-style: normal;
    font-weight: 600;
    line-height: 17.884px; /* 137.5% */
  }
`;

const FieldCardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 11px;
`;

const FieldCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 25px;

  border-radius: 13px;
  background: ${(props) => props.theme.colors.gray0};
  box-shadow: 0px 0px 16px 0px rgba(0, 0, 0, 0.09);

  div {
    color: ${(props) => props.theme.colors.black};

    font-size: 13.007px;
    font-style: normal;
    font-weight: 600;
    line-height: 17.884px; /* 137.5% */
  }
`;
