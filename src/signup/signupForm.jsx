import { useState } from "react";
import signupAPI from "./signupAPI.js";
import verifyEmailAPI from "./verifyEmailAPI";
import HeaderComponent from "../layout/headerComponent";
import FooterComponent from "../layout/footerComponent";
import KakaoLoginButton from "../kakao/kakaoLoginButton.jsx";
// import "tailwindcss";

function SignupForm() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });
  let response = {
    success: false,
    data: "", //promise
  };

  const handleSignup = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    try {
      response = await signupAPI(email, username, password);
      if (response.success) {
        console.log(
          "Sigconst data = await signupAPI(email, username, password);nup successful, Send code to your email"
        );
        location.href = "/signin";
        //회원가입 다음 단계 페이지 띄어주기
        //사용자에게 이메일 링크가면 그 링크를 클릭할 것임.
      } else {
        console.log("Signup failed", response);
        alert(response.data);
      }
    } catch {
      console.log("Signup failed");
    }
  };

  const signinHandler = () => {
    location.href = "/signin";
  };

  //   const handleVerifyEmail = (e) => {
  //     e.preventDefault();
  //     const emailInput = e.target
  //       .closest("form")
  //       .querySelector('input[name="email"]');
  //     const email = emailInput.value;
  //     console.log(email);
  //     const data = verifyEmailAPI(email);
  //     if (data.success) {
  //       console.log("Email Verify successful");
  //       console.log(data.id);
  //     } else {
  //       console.log("Email Verify failed");
  //     }
  //   };

  return (
    <div className="w-xl min-h-screen bg-gray-50 flex flex-col">
      <HeaderComponent />

      <main className="flex-grow flex py-16 px-4">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-10 w-full max-w-lg">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              회원가입
            </h2>
            <p className="text-gray-500 text-sm">새로운 계정을 만드세요</p>
          </div>
          <KakaoLoginButton text="카카오톡으로 로그인" />

          <form onSubmit={handleSignup}>
            <div className="space-y-5">
              <div>
                <label
                  htmlFor="username"
                  className="block text-sm font-medium text-left text-gray-800 mb-2 after:ml-0.5 after:text-red-500 after:content-['*']"
                >
                  사용자명
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  // onChange={handleInputChange}
                  placeholder="사용자명을 입력하세요"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all outline-none text-gray-900 placeholder-gray-400"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-left text-gray-800 mb-2 after:ml-0.5 after:text-red-500 after:content-['*']"
                >
                  이메일
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  // onChange={handleInputChange}
                  placeholder="이메일을 입력하세요"
                  required
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all outline-none text-gray-900 placeholder-gray-400"
                />
              </div>

              <div>
                <label
                  htmlFor="password"
                  className="block text-sm font-medium text-left text-gray-800 mb-2 after:ml-0.5 after:text-red-500 after:content-['*']"
                >
                  비밀번호
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  // onChange={handleInputChange}
                  placeholder="비밀번호를 입력하세요"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all outline-none text-gray-900 placeholder-gray-400"
                  required
                />
              </div>

              <div className="pt-4 space-y-4">
                <button
                  type="submit"
                  // onClick={handleSignup}
                  className="w-full bg-gray-900 text-white py-3.5 px-4 rounded-xl font-medium hover:bg-gray-800 transition-colors duration-200"
                >
                  계정 만들기
                </button>

                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-xs">
                    <span className="px-3 bg-white text-gray-400 font-medium">
                      이미 계정이 있으신가요?
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={signinHandler}
                  className="w-full bg-gray-900 text-white py-3.5 px-4 rounded-xl font-medium hover:bg-gray-800 transition-colors duration-200"
                >
                  로그인하기
                </button>
              </div>
            </div>
          </form>
        </div>
      </main>

      <FooterComponent />
    </div>
  );
}

export default SignupForm;
