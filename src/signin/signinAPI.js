const DEV_API = import.meta.env.VITE_DEV_API;

async function signinAPI(email, password) {
  const response = await fetch(`${DEV_API}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json;",
    },
    body: JSON.stringify({
      email: email,
      password: password,
    }),
  });

  const data = await response.text(); //프로미스 반환
  if (response.ok) {
    return {
      success: true,
      data: data,
    };
  } else if (response.status == 400) {
    console.log("data:", data);
    return {
      success: false,
      data: data,
    };
  } else if (response.status == 500) {
    return {
      success: false,
      data: data,
    };
  } else {
    return {
      success: false,
      data: "Unexpacted Error",
    };
  }
}

export default signinAPI;
