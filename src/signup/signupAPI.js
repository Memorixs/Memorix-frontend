const DEV_API = import.meta.env.VITE_DEV_API;
async function signupAPI(email, username, password) {
  try {
    const response = await fetch(`${DEV_API}/signup`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        username: username,
        password: password,
      }),
    });

    let data;
    if (response.ok) {
      data = await response.json();
      console.log("Signup successful");
      return { success: true, data: data };
    } else if (response.status === 400) {
      data = await response.text();
      console.log("Signup failed:", data);
      return {
        success: false,
        data: data,
      };
    } else if (response.status === 500) {
      data = await response.text();
      console.log("Internal server error");
      return { success: false, data: data };
    }
  } catch (error) {
    console.error("Network error:", error);
    return { success: false, error: "Unexpected error occurred" };
  }
}

export default signupAPI;
