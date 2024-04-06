import { useEffect } from "react";
import Axios from "../apis/axios";

const RedirectPage = () => {
  const code = new URL(window.location.href).searchParams.get("code");
  console.log(code);

  const handleRedirect = async () => {
    const response = await Axios.get(`member/login?code=${code}`);
    console.log(response);
  };

  useEffect(() => {
    handleRedirect();
  }, []);

  return null;
};

export default RedirectPage;