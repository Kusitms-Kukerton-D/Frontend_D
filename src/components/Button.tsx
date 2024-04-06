import styled from "styled-components";

interface ButtonProps {
  children: React.ReactNode;
}

const Button = ({ children }: ButtonProps) => {
  return <StyledButton type="button">{children}</StyledButton>;
};

export default Button;

const StyledButton = styled.button`
  background: red;
  width: 100%;
  height: 50px;

  border-radius: 7px;
  background: var(--gray-gray-800, #434855);

  color: #fff;

  /* H3/semibold/16 */
  font-size: 16px;
  font-style: normal;
  font-weight: 600;
  line-height: 18px; /* 112.5% */
`;
