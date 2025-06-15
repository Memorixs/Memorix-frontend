import { useSearchParams } from "react-router";
import { useEffect } from "react";

const VITE_DEV_URI = import.meta.env.VITE_DEV_API;

function RedirectPage() {
  const [searchParams] = useSearchParams();
  const code = searchParams.get("code");

  useEffect(() => {
    const getToken = async () => {
      try {
        const response = await fetch(
          `${VITE_DEV_URI}/login/oauth2/code/kakao?code=${code}`,
          {
            method: "GET",
            credentials: "include", // 쿠키를 주고받을 경우 필요
          }
        );

        if (response.ok) {
          console.log("성공");
          // 예: 토큰 저장, 리디렉션
          localStorage.setItem("login", true);
          window.location.href = "/";
        } else if (response.staus == 400) {
          alert("로그인 실패");
          console.log(response);
          location.href = "/signin";
        } else if (response.status == 500) {
          alert("서버 오류입니다. 서버에 문의해주세요.");
          console.error(response);
          location.href = "/signin";
        }
      } catch (error) {
        console.error("에러 발생:", error);
      }
    };

    if (code) getToken(); // code가 있을 때만 요청
  }, [code]);

  return <div>로그인 처리 중입니다...</div>;
}

export default RedirectPage;
