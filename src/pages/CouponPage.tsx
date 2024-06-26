import { useNavigate } from "react-router-dom";
import { styled } from "styled-components";

const CouponPage = () => {
  const navigate = useNavigate();

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

      <img src="/public/assets/coupon/coupon1.png" alt="coupon" />
      <img src="/public/assets/coupon/coupon2.png" alt="coupon" />
      <img src="/public/assets/coupon/coupon3.png" alt="coupon" />
    </Layout>
  );
};

export default CouponPage;

const Layout = styled.div`
  padding: 1.5rem 1rem;
  padding-top: 68px;

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
