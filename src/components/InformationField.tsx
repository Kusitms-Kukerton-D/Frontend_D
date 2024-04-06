import { InformationFieldData } from "../types/Information.type";

interface InformationFieldProps {
  fields: InformationFieldData;
}

const InformationField = ({ fields }: InformationFieldProps) => {
  return (
    <div>
      <div>
        <span>{fields.title1}</span>
        <span>{fields.title2}</span>
      </div>
      <div>{fields.subtitle}</div>
      <div>
        <span>* 복수 선택 가능</span>
        <div>
          {fields.fields.map((item) => (
            <div>{item.content}</div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InformationField;
