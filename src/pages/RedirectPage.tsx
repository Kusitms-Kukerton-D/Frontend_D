import { useEffect } from "react";
import Axios from "../apis/axios";

const RedirectPage = () => {
  const code = new URL(window.location.href).searchParams.get("code");
  console.log(code);

  const handleRedirect = async () => {
    try {
      const response = await Axios.get(`member/login?code=${code}`);
      if (response.status === 200) {
        window.location.href = "/certified";
      } else {
        console.error("로그인에 실패했습니다.");
      }
    } catch (error) {
      console.error("요청 중 오류가 발생했습니다:", error);
    }
  };

  useEffect(() => {
    handleRedirect();
  }, []);

  return null;
};

export default RedirectPage;
