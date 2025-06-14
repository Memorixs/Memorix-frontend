import { useState } from "react";
import signupAPI from "./signupAPI";
import verifyEmailAPI from "./verifyEmailAPI";

function SignupButton() {
  //   const [isLoading, setIsLoading] = useState(false);
  //   const [error, setError] = useState(null);

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
      console.log("Signup successful");
    } else {
      console.log("Signup failed");
    }
  };

  const handleVerifyEmail = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const data = verifyEmailAPI(email);
    if (data.success) {
      console.log("Email Verifiy successful");
      console.log(data.id);
    } else {
      console.log("Email Verifiy failed");
    }
  };

  return (
    <>
      <form onSubmit={handleSignup}>
        <input name={formData.username} type="text" placeholder="username" />
        <input
          name={formData.email}
          type={formData.email}
          placeholder="email@email.com"
        />
        <button type="button" onClick={handleVerifyEmail}></button>
        <input
          name={formData.password}
          type={formData.password}
          placeholder="password"
        />
        <button type="submit">Signup</button>
      </form>
    </>
  );
}

export default SignupButton;
