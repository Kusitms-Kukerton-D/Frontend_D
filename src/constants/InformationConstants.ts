import { InformationFieldData } from "../types/Information.type";

export const INFORMATION_FIELD:InformationFieldData[] = [
  {
    title1: "관심있는 분야",
    title2: "는 무엇인가요?",
    subtitle: "관심 있는 분야를 기반으로 랜덤 추천 해드려요.",
    fields: [
      {id: 1, content: '자기계발', image:},
      {id: 2, content: '운동', image:},
      {id: 3, content: '액티비티', image:},
      {id: 4, content: '야식', image:},
      {id: 5, content: '음악', image:},
      {id: 6, content: '게임', image:},
      {id: 7, content: '미디어 시청', image:},
      {id: 8, content: '외출', image:},
      {id: 9, content: '청결(청소)', image:},
      {id: 10, content: '기타', image:},

    ],
  },
  {
    title1: "자제하고 싶은 분야",
    title2: "가 있나요?",
    subtitle: "선택을 기반으로 랜덤 추천 해드려요.",
    fields: [{id: 1, content: '배달음식', image:},
    {id: 2, content: '게임', image:},
    {id: 3, content: '음주&흡연', image:},
    {id: 4, content: '과소비', image:},
    {id: 5, content: '충동구매', image:},
    {id: 6, content: '카페인', image:},
    {id: 7, content: '미디어 시청', image:},
    {id: 8, content: '기타', image:},
    ],
  },
];
