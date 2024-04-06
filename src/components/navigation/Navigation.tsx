import { styled } from "styled-components";

const Navigation = () => {
  const handleIconClick = (id: number) => {
    switch (id) {
      case 1:
        window.location.href = "/certified";
        break;
      case 2:
        window.location.href = "/random";
        break;
      case 3:
        window.location.href = "/mypage";
        break;
      default:
        break;
    }
  };

  const currentPath = window.location.pathname;

  return (
    <div>
      <ListLayout>
        <List onClick={() => handleIconClick(1)}>
          <img
            src={
              currentPath === "/certified"
                ? "/public/assets/navigation/menu2.svg"
                : "/public/assets/navigation/menu1.svg"
            }
            alt="home"
          />
          <div
            style={{
              color: currentPath === "/certified" ? "#434855" : "#9397A1",
            }}
          >
            인증페이지
          </div>
        </List>
        <List onClick={() => handleIconClick(2)}>
          <img
            src={
              currentPath === "/random"
                ? "/public/assets/navigation/menu4.svg"
                : "/public/assets/navigation/menu3.svg"
            }
            alt="home"
          />
          <div
            style={{
              color: currentPath === "/random" ? "#434855" : "#9397A1",
            }}
          >
            랜덤뽑기
          </div>
        </List>
        <List onClick={() => handleIconClick(3)}>
          <img
            src={
              currentPath === "/mypage"
                ? "/public/assets/navigation/menu6.svg"
                : "/public/assets/navigation/menu5.svg"
            }
          />
          <div
            style={{
              color: currentPath === "/mypage" ? "#434855" : "#9397A1",
            }}
          >
            마이페이지
          </div>
        </List>
      </ListLayout>
    </div>
  );
};

export default Navigation;

const ListLayout = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 1rem 3.5rem;
  border-radius: 20px 20px 0 0;
  box-shadow: 0px -4px 4px rgba(0, 0, 0, 0.1);
  background-color: #ffffff;
`;

const List = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 0.1rem;
  cursor: pointer;

  img {
    width: 1.4rem;
    height: 1.4rem;
  }

  div {
    style: ${({ theme }) => theme.fonts.body2};
  }
`;
