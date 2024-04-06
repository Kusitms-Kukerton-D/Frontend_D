import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";
import Axios from "../apis/axios";
import { useEffect, useState } from "react";

const MyCertifiedPage = () => {
  const navigate = useNavigate();
  const [data, setData] = useState<{
    imageUrl: string;
    userTitle: string;
    localDate: string;
    review: string;
  }>();

  const mypageDetail = async () => {
    try {
      const response = await Axios.get(`certification/1`);
      if (response.status === 200) {
        setData(response.data.data);
      }
    } catch (error) {
      console.error("요청 중 오류가 발생했습니다:", error);
    }
  };

  useEffect(() => {
    mypageDetail();
  }, []);

  return (
    <Layout>
      <Header>
        <img
          src="/public/assets/common/back.svg"
          alt="back"
          onClick={() => {
            navigate(-1);
          }}
        />
        <h1>나의 인증</h1>
        <div>
          <img src="/public/assets/common/cancel.svg" alt="back" />
        </div>
      </Header>
      <img src="/public/assets/certified/certifiedBox.png" alt="certified" />

      <Box>
        {data && (
          <>
            <img src={data.imageUrl} alt="certified" />
            <div>
              <div>{data.userTitle}</div>
              <div>{data.localDate}</div>
            </div>
            <Review>{data.review}</Review>
          </>
        )}
      </Box>
    </Layout>
  );
};

export default MyCertifiedPage;

const Layout = styled.div`
  padding: 3rem 1rem 1.5rem 1rem;

  > img {
    width: 100%;
  }
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;

  > img {
    cursor: pointer;
  }
  > div {
    visibility: hidden;
  }

  margin-bottom: 1rem;
`;

const Box = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  img {
    width: 100%;
    height: 20rem;
    object-fit: cover;
  }
`;

const Review = styled.div`
  margin-top: 0.5rem;
`;
