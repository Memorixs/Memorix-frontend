import React from "react";
const KAKAO_CLIENT_KEY = import.meta.env.VITE_KAKAO_CLIENT_KEY;
const KAKAO_REDIRECT_URI = import.meta.env.VITE_KAKAO_REDIRECT_URI;

// 카카오 로그인 아이콘 컴포넌트
const KakaoIcon = () => (
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M10 0C4.477 0 0 3.58 0 8c0 2.797 1.8 5.266 4.52 6.717-.197-.751-.365-1.907.079-2.743.4-.753 2.586-10.96 2.586-10.96s-.66 1.174-.66 2.91c0 1.371.794 2.394 1.783 2.394.843 0 1.25-.632 1.25-1.39 0-1.368-.87-3.428-.87-3.428s2.065-.22 2.065 2.607c0 1.595-.837 2.894-2.059 2.894-1.184 0-2.144-.977-2.144-2.181 0-1.205.96-2.182 2.144-2.182.376 0 .728.097 1.034.268L10 20l6.48-5.283C18.2 13.266 20 10.797 20 8c0-4.42-4.477-8-10-8z"
      fill="#3C1E1E"
    />
  </svg>
);

const uri =
  "https://kauth.kakao.com/oauth/authorize?" +
  new URLSearchParams({
    client_id: KAKAO_CLIENT_KEY,
    redirect_uri: KAKAO_REDIRECT_URI,
    response_type: "code",
  }).toString();

const kakaoLoginHandler = () => {
  window.location.href = uri;
};

const KakaoLoginButton = ({ text = "카카오로 로그인", className = "" }) => {
  return (
    <button
      type="button"
      onClick={kakaoLoginHandler}
      style={{
        width: "100%",
        backgroundColor: "#FEE500",
        color: "#000000",
        border: "none",
        borderRadius: "12px",
        padding: "14px 16px",
        fontSize: "16px",
        fontWeight: "500",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "12px",
        cursor: "pointer",
        transition: "all 0.2s ease",
        boxShadow: "0 1px 2px 0 rgba(0, 0, 0, 0.05)",
      }}
      onMouseEnter={(e) => {
        e.target.style.backgroundColor = "#FDD835";
        e.target.style.boxShadow = "0 4px 6px -1px rgba(0, 0, 0, 0.1)";
      }}
      onMouseLeave={(e) => {
        e.target.style.backgroundColor = "#FEE500";
        e.target.style.boxShadow = "0 1px 2px 0 rgba(0, 0, 0, 0.05)";
      }}
      className={className}
    >
      <KakaoIcon />
      {text}
    </button>
  );
};

export default KakaoLoginButton;
