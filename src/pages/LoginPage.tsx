const LoginPage = () => {
  const handleLogin = async () => {
    const kakaoURL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${
      import.meta.env.VITE_REST_API_KEY
    }&redirect_uri=${import.meta.env.VITE_REDIRECT_URI}`;
    window.location.href = kakaoURL;
  };

  return (
    <div>
      <div>로그인페이지</div>
      <button type="button" onClick={handleLogin}>
        로그인
      </button>
    </div>
  );
};

export default LoginPage;
