import signinAPI from "./signinAPI.js";
import React, { useState } from "react";
import HeaderComponent from "../layout/headerComponent.jsx";
import FooterComponent from "../layout/footerComponent.jsx";

function SigninForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  let response = {
    success: false,
    data: "", //promise
  };
  const signinHandler = async (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    response = await signinAPI(email, password); //성공아니면 프로미스 반환(성공이 400도 성공으로 반환함)
    //프로미스를 반환하므로 if로 조건처리하지 말고 try catch를 사용할 수 있다. await대신 .then() 을 사용해서 성공처리를 할 수 있지만 프로미스 헬 발생가능
    console.log("프로미스 객체 반환하는 코드 뒤에 작성한 코드");
    if (response.success) {
      console.log(response);
      location.href = "/";
    } else {
      console.log("response", response);
    }
  };

  return (
    <div className="w-xl min-h-screen bg-gray-50 flex flex-col">
      <HeaderComponent />

      <main className="flex-grow flex py-16 px-4">
        <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-10 w-full max-w-lg">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              로그인
            </h2>
          </div>

          <div className="space-y-5">
            <form onSubmit={signinHandler}>
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
                  placeholder="example@email.com"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-gray-900 focus:border-transparent transition-all outline-none text-gray-900 placeholder-gray-400"
                  required
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
                  className="w-full bg-gray-900 text-white py-3.5 px-4 rounded-xl font-medium hover:bg-gray-800 transition-colors duration-200"
                >
                  로그인
                </button>

                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200"></div>
                  </div>
                  <div className="relative flex justify-center text-xs">
                    <span className="px-3 bg-white text-gray-400 font-medium">
                      계정이 없으신가요?
                    </span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => (location.href = "/signup")}
                  className="w-full bg-gray-900 text-white py-3.5 px-4 rounded-xl font-medium hover:bg-gray-800 transition-colors duration-200"
                >
                  회원가입하기
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>

      <FooterComponent />
    </div>
  );
}

export default SigninForm;
