import axios from "axios";

export async function session() {
  const token = localStorage.getItem("token");

  if (!token) {
    console.log("No token found in localStorage");
    if(localStorage.getItem("token")){
      localStorage.removeItem("token");
    }
    return false;
  }

  try {
    const response = await axios.get("http://localhost:3000/api/auth/protected-route", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    if (response.status === 200) {
      return response.data; // Token is valid
    } else {
      console.log("Invalid or expired token");
      if(localStorage.getItem("token")){
        localStorage.removeItem("token");
      }

      return false; // Token invalid or expired
    }
  } catch (error) {
    console.log("Error validating token:", error.response?.data || error.message);
    if(localStorage.getItem("token")){
        localStorage.removeItem("token");
      }
 
    return false;
  }
}

export async function logout(){
  localStorage.removeItem("token");
  console.log("Token removed..");
}
