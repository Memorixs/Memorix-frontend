import signinAPI from "./signinAPI.js";

function SigninForm() {
  const formData = {
    email: "email",
    password: "password",
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
    <>
      <form onSubmit={signinHandler}>
        <label>이메일</label>
        <input
          name={formData.email}
          type={formData.email}
          placeholder="email@email.com"
        />
        <label>비밀번호</label>
        <input
          name={formData.password}
          type={formData.password}
          placeholder="password"
        />
        <button type="submit">로그인</button>
        <button type="button">회원가입</button>
        <button type="button">카카오 간편 로그인</button>
      </form>
    </>
  );
}

export default SigninForm;
