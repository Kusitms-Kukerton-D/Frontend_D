import styled from "styled-components";
import IconPhone from "../../public/assets/icons/phone.svg";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <Container>
        <InnerContainer>
          <span>9:41</span>
          <img src={IconPhone} alt="icon" />
        </InnerContainer>
      </Container>
      <Outlet />
    </>
  );
};

export default Layout;

const Container = styled.div`
  padding: 15px 27px 9px 47px;
`;

const InnerContainer = styled.div`
  display: flex;
  justify-content: space-between;

  span {
    color: #202842;
    text-align: center;
    font-family: Pretendard;
    font-size: 15px;
    font-style: normal;
    font-weight: 600;
    line-height: 20px;
    letter-spacing: -0.5px;
  }
`;
