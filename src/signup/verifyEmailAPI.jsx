const DEV_API = import.meta.env.VITE_DEV_API;

async function verifyEmailAPI(email) {
  const response = await fetch(`${DEV_API}/auth/confirm?email=${email}`, {
    method: "GET",
  });
  try {
    if (response.ok) {
      const data = await response.json();
      console.log("Signup successful");
      return { success: true, data };
    } else if (response.status === 400) {
      //만료된 링크 요청
      const errorData = await response.json();
      console.log("Signup failed:", errorData);
      return {
        success: false,
        error: "Invalid input data",
        details: errorData,
      };
    } else if (response.status === 500) {
      console.log("Internal server error");
      return { success: false, error: "Server error occurred" };
    } else {
      console.log("Unexpected error:", response.status);
      return { success: false, error: "Unexpected error occurred" };
    }
  } catch (error) {
    console.error("Network error:", error);
    return { success: false, error: "Network error occurred" };
  }
}

export default verifyEmailAPI;
