import { useState } from "react";
import Image1 from "../../public/assets/certification1.png";
import Image2 from "../../public/assets/certification2.png";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

const RegisterPage = () => {
  const [click, setClick] = useState(true);
  const navigate = useNavigate();

  return (
    <Container>
      {click ? (
        <img src={Image1} alt="1" onClick={() => setClick(false)} />
      ) : (
        <img
          src={Image2}
          alt="2"
          onClick={() => navigate("/myCertification")}
        />
      )}
    </Container>
  );
};

export default RegisterPage;

const Container = styled.div`
  img {
    cursor: pointer;
    width: 390px;
  }
`;
