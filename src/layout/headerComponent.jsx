// import "../tailwind.css";
import { useState } from "react";

function HeaderComponent() {
  const [isSignin, setIsSignin] = useState(false);

  return (
    <header className="bg-white border-b border-gray-200 py-4 px-4">
      <div className="px-3 max-w-6xl flex items-center justify-between">
        <div className="text-xl font-bold text-gray-900">
          <a href="/">Memorix</a>
        </div>

        <nav>
          <ul className="flex gap-6">
            {isSignin ? (
              <li>
                <a href="/mypage">내정보</a>
              </li>
            ) : (
              <>
                <li>
                  <a href="/signin">로그인</a>
                </li>
                <li>
                  <a href="/signup">회원가입</a>
                </li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default HeaderComponent;
