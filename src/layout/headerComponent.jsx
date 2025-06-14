function HeaderComponent({ isSignin }) {
  return (
    <>
      <header>
        <a href="/">홈으로</a>
        {isSignin ? (
          <>
            <a href="/signup">회원가입</a>
            <a href="/signin">로그인</a>
          </>
        ) : (
          <a href="/mypage">내정보</a>
        )}
      </header>
    </>
  );
}

export default HeaderComponent;
