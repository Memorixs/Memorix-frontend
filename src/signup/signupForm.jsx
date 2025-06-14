import { useState } from "react";
import signupAPI from "./signupAPI";
import verifyEmailAPI from "./verifyEmailAPI";
import HeaderComponent from "../layout/headerComponent";
import FooterCompoenet from "../layout/footerComponent";

function SignupButton() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const formData = {
    username: "username",
    email: "email",
    password: "password",
  };

  const handleSignup = (e) => {
    e.preventDefault();
    setIsLoading(true);
    const username = e.target.username.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    const data = signupAPI(email, username, password);

    if (data.success) {
      console.log("Signup successful, Send code to your email");
      //회원가입 다음 단계 페이지 띄어주기
      //사용자에게 이메일 링크가면 그 링크를 클릭할 것임.
    } else {
      console.log("Signup failed");
    }
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
    <>
      <HeaderComponent />
      <form onSubmit={handleSignup}>
        <input name={formData.username} type="text" placeholder="username" />
        <input
          name={formData.email}
          type={formData.email}
          placeholder="email@email.com"
        />
        {/* <button type="button" onClick={handleVerifyEmail}>
          이메일 인증
        </button> */}
        <input
          name={formData.password}
          type={formData.password}
          placeholder="password"
        />
        <button type="submit">Signup</button>
      </form>
      <FooterCompoenet />
    </>
  );
}

export default SignupButton;
