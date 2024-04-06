export interface FieldItemData {
  id: number;
  content: string;
  image: string;
}

export interface InformationFieldData {
  title1: string;
  title2: string;
  subtitle: string;
  fields: FieldItemData[];
}
