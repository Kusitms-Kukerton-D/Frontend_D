import { InformationFieldData } from "../types/Information.type";
import Info1 from "../../public/assets/icons/info/info1.svg";
import Info2 from "../../public/assets/icons/info/info2.svg";
import Info3 from "../../public/assets/icons/info/info3.svg";
import Info4 from "../../public/assets/icons/info/info4.svg";
import Info5 from "../../public/assets/icons/info/info5.svg";
import Info6 from "../../public/assets/icons/info/info6.svg";
import Info7 from "../../public/assets/icons/info/info7.svg";
import Info8 from "../../public/assets/icons/info/info8.svg";
import Info9 from "../../public/assets/icons/info/info9.svg";
import Info10 from "../../public/assets/icons/info/info10.svg";
import Info11 from "../../public/assets/icons/info/info11.svg";
import Info12 from "../../public/assets/icons/info/info12.svg";
import Info13 from "../../public/assets/icons/info/info13.svg";
import Info14 from "../../public/assets/icons/info/info14.svg";
import Info15 from "../../public/assets/icons/info/info15.svg";
import Info16 from "../../public/assets/icons/info/info16.svg";
import Info17 from "../../public/assets/icons/info/info17.svg";
import Info18 from "../../public/assets/icons/info/info18.svg";

export const INFORMATION_FIELD: InformationFieldData[] = [
  {
    title1: "관심있는 분야",
    title2: "는 무엇인가요?",
    subtitle: "관심 있는 분야를 기반으로 랜덤 추천 해드려요.",
    fields: [
      { id: 1, content: "자기계발", image: Info1 },
      { id: 2, content: "운동", image: Info2 },
      { id: 3, content: "액티비티", image: Info3 },
      { id: 4, content: "야식", image: Info4 },
      { id: 5, content: "음악", image: Info5 },
      { id: 6, content: "게임", image: Info6 },
      { id: 7, content: "미디어 시청", image: Info7 },
      { id: 8, content: "외출", image: Info8 },
      { id: 9, content: "청결(청소)", image: Info9 },
      { id: 10, content: "기타", image: Info10 },
    ],
  },
  {
    title1: "자제하고 싶은 분야",
    title2: "가 있나요?",
    subtitle: "선택을 기반으로 랜덤 추천 해드려요.",
    fields: [
      { id: 1, content: "배달음식", image: Info11 },
      { id: 2, content: "게임", image: Info12 },
      { id: 3, content: "음주&흡연", image: Info13 },
      { id: 4, content: "과소비", image: Info14 },
      { id: 5, content: "충동구매", image: Info15 },
      { id: 6, content: "카페인", image: Info16 },
      { id: 7, content: "미디어 시청", image: Info17 },
      { id: 8, content: "기타", image: Info18 },
    ],
  },
];
