import { styled } from "styled-components";

interface CertifiedBoxProps {
  img: string;
  title: string;
  description: string;
}

const CertifiedBox = ({ img, title, description }: CertifiedBoxProps) => {
  return (
    <Layout>
      <Box>
        <img src={img} alt="certified" />
        <div>
          <h1>{title}</h1>
          <p>{description}</p>
        </div>
      </Box>
      <Button>인증하기</Button>
    </Layout>
  );
};

export default CertifiedBox;

const Layout = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;

  border-bottom: 1px solid ${({ theme }) => theme.colors.gray100};
`;

const Box = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 1rem;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 0.4rem;

    p {
      font-size: 13px;
    }
  }
`;

const Button = styled.button`
  width: 100%;
  background: ${({ theme }) => theme.colors.gray800};
  color: ${({ theme }) => theme.colors.gray0};
  border-radius: 0.5rem;
  padding: 0.8rem;
  text-align: center;
`;
